"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Plus,
  FileText,
  Search,
  ChevronRight,
  ChevronDown,
  Settings,
  MoreHorizontal,
  SquarePen,
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  updated_at: string;
}

type EventCallback = () => void;

class EventEmitter {
  private events: { [key: string]: EventCallback[] } = {};

  on(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event: string, callback: EventCallback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }

  emit(event: string) {
    if (!this.events[event]) return;
    this.events[event].forEach((cb) => cb());
  }
}

const events = new EventEmitter();

export function emitNoteSaved() {
  events.emit("note-saved");
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();
  const [user, setUser] = useState<{ id: string; email?: string; display_name?: string } | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchNotes = useCallback(async (userId: string) => {
    const { data, error } = await supabase
      .from("notes")
      .select("id, title, content, updated_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });

    if (!error && data) {
      setNotes(data);
    }
  }, [supabase]);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      setUser({
        id: user.id,
        email: user.email,
        display_name: user.user_metadata?.display_name,
      });
      await fetchNotes(user.id);
      setLoading(false);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (pathname === "/app" && user?.id) {
      fetchNotes(user.id);
    }
  }, [pathname, user, fetchNotes]);

  useEffect(() => {
    const handleNoteSaved = () => {
      if (user?.id) {
        fetchNotes(user.id);
      }
    };

    events.on("note-saved", handleNoteSaved);
    return () => {
      events.off("note-saved", handleNoteSaved);
    };
  }, [user, fetchNotes]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const createNote = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("notes")
      .insert({
        user_id: user.id,
        title: "Untitled",
        content: "",
      })
      .select()
      .single();

    if (!error && data) {
      router.push(`/app/${data.id}`);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--canvas)]">
        <p className="text-sm text-[var(--ink-secondary)]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[var(--canvas)]">
      <aside
        className="w-[240px] flex flex-col bg-[var(--surface)] border-r border-[var(--border)]"
        style={{ height: "100vh" }}
      >
        <div className="p-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-[var(--hover-surface)]">
            <div className="w-5 h-5 bg-[var(--accent)] rounded flex items-center justify-center">
              <span className="text-[10px] font-semibold text-white">
                {user?.display_name ? getInitials(user.display_name)[0] : "U"}
              </span>
            </div>
            <span className="text-sm font-medium text-[var(--ink-primary)] flex-1 truncate">
              {user?.display_name || "User"}&apos;s Workspace
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[var(--ink-tertiary)]" />
          </div>
        </div>

        <div className="p-2">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[var(--canvas)] border border-[var(--border)]">
            <Search className="w-4 h-4 text-[var(--ink-secondary)]" />
            <span className="text-sm text-[var(--ink-secondary)] flex-1">Search</span>
            <span className="text-[11px] text-[var(--ink-tertiary)] bg-[var(--canvas)] border border-[var(--border)] rounded px-1.5 py-0.5 font-medium">
              ⌘K
            </span>
          </div>
        </div>

        <div className="px-2">
          <button
            onClick={createNote}
            className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--hover-surface)] rounded transition-colors"
          >
            <SquarePen className="w-4 h-4" />
            <span>New page</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="px-2 py-1.5">
            <span className="text-[11px] font-semibold text-[var(--ink-tertiary)] uppercase tracking-wide">
              Private
            </span>
          </div>

          {notes.length === 0 ? (
            <div className="px-2 py-1.5">
              <p className="text-sm text-[var(--ink-tertiary)]">No pages yet</p>
            </div>
          ) : (
            <div className="space-y-0.5" key={refreshKey}>
              {notes.map((note) => {
                const isActive = pathname === `/app/${note.id}`;
                return (
                  <Link
                    key={note.id}
                    href={`/app/${note.id}`}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--hover-surface)] border-l-[3px] border-[var(--accent)]"
                        : "hover:bg-[var(--hover-surface)]"
                    }`}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-tertiary)]" />
                    <FileText className="w-4 h-4 text-[var(--ink-secondary)]" />
                    <span className={`truncate ${isActive ? "text-[var(--ink-primary)] font-medium" : "text-[var(--ink-secondary)]"}`}>
                      {note.title || "Untitled"}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          <button className="w-full flex items-center gap-2 px-2 py-1.5 mt-1 rounded text-sm text-[var(--ink-tertiary)] hover:text-[var(--ink-secondary)] hover:bg-[var(--hover-surface)] transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add a page</span>
          </button>
        </div>

        <div className="p-2 border-t border-[var(--border)]">
          <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--hover-surface)] transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>

          <div className="flex items-center gap-2 px-2 py-1.5 mt-1 rounded hover:bg-[var(--hover-surface)] cursor-pointer" onClick={handleLogout}>
            <div className="w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {user?.display_name ? getInitials(user.display_name) : "U"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--ink-primary)] truncate">
                {user?.display_name || "User"}
              </p>
              <p className="text-xs text-[var(--ink-secondary)] truncate">
                {user?.email}
              </p>
            </div>
            <MoreHorizontal className="w-4 h-4 text-[var(--ink-tertiary)]" />
          </div>
        </div>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}