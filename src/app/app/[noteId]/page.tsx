"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, Trash2, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { emitNoteSaved } from "../layout";

export default function NoteEditorPage() {
  const params = useParams();
  const router = useRouter();
  const noteId = params.noteId as string;
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("id", noteId)
        .single();

      if (error || !data) {
        router.push("/app");
        return;
      }

      setTitle(data.title || "");
      setContent(data.content || "");
      setLoading(false);
    };

    fetchNote();
  }, [noteId]);

  const saveNote = useCallback(async () => {
    if (!noteId) return;
    setSaving(true);

    const { error } = await supabase
      .from("notes")
      .update({
        title: title || "Untitled",
        content,
        updated_at: new Date().toISOString(),
      })
      .eq("id", noteId);

    if (!error) {
        emitNoteSaved();
      } else {
        console.error("Error saving note:", error);
      }
    setSaving(false);
    setHasChanges(false);
  }, [noteId, title, content]);

  useEffect(() => {
    if (!hasChanges) return;

    const timeoutId = setTimeout(() => {
      saveNote();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [hasChanges, saveNote]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setHasChanges(true);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    setHasChanges(true);
  };

  const handleDelete = async () => {
    if (!confirm("Delete this page?")) return;

    const { error } = await supabase
      .from("notes")
      .delete()
      .eq("id", noteId);

    if (!error) {
      router.push("/app");
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-sm text-[var(--ink-secondary)]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[var(--canvas)]">
      <header className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--hover-surface)] rounded transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <span className="text-sm text-[var(--ink-tertiary)]">
            {saving ? "Saving..." : hasChanges ? "Unsaved" : "Saved"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--hover-surface)] rounded transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-[var(--danger)] hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[720px] mx-auto px-12 py-10">
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Untitled"
            className="w-full text-3xl font-semibold text-[var(--ink-primary)] placeholder-[var(--ink-tertiary)] focus:outline-none mb-2 bg-transparent"
          />
          <textarea
            value={content}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Empty page"
            className="w-full min-h-[400px] text-base text-[var(--ink-secondary)] placeholder-[var(--ink-tertiary)] focus:outline-none resize-none bg-transparent leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
}