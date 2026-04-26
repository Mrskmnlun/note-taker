"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  updated_at: string;
}

interface NotesContextType {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  refreshNotes: () => void;
  lastRefresh: number;
}

const NotesContext = createContext<NotesContextType | null>(null);

export function NotesProvider({
  children,
  initialNotes = [],
}: {
  children: ReactNode;
  initialNotes?: Note[];
}) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  const refreshNotes = useCallback(() => {
    setLastRefresh(Date.now());
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes, refreshNotes, lastRefresh }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within NotesProvider");
  }
  return context;
}