import { FileText } from "lucide-react";

export default function AppPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-[var(--ink-tertiary)]">
      <FileText className="w-12 h-12 mb-4" />
      <p className="text-sm">Select a note from the sidebar or create a new one</p>
    </div>
  );
}