import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--canvas)]">
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[var(--ink-primary)]">Note Taker</h1>
        <nav className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors rounded-md hover:bg-[var(--hover-surface)]"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium text-[var(--canvas)] bg-[var(--ink-primary)] rounded-md hover:bg-[#333] transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center space-y-6">
          <h2 className="text-[36px] font-semibold text-[var(--ink-primary)] tracking-tight leading-[1.3]">
            Capture your thoughts,<br />organize your life.
          </h2>
          <p className="text-base text-[var(--ink-secondary)] max-w-md mx-auto">
            Simple, fast, always accessible. Your notes sync across all your devices instantly.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/signup"
              className="px-6 py-3 text-sm font-medium text-[var(--canvas)] bg-[var(--ink-primary)] rounded-md hover:bg-[#333] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 text-sm font-medium text-[var(--ink-primary)] border border-[var(--border)] rounded-md hover:bg-[var(--hover-surface)] transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="p-6 bg-[var(--canvas)] border border-[var(--border)] rounded-lg text-center space-y-3 shadow-[0_1px_3px_var(--shadow-card)]">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[var(--surface)] rounded-lg">
              <svg className="w-6 h-6 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--ink-primary)]">Quick Capture</h3>
            <p className="text-sm text-[var(--ink-secondary)]">
              Jot down ideas instantly with our intuitive editor. No friction, just flow.
            </p>
          </div>
          <div className="p-6 bg-[var(--canvas)] border border-[var(--border)] rounded-lg text-center space-y-3 shadow-[0_1px_3px_var(--shadow-card)]">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[var(--surface)] rounded-lg">
              <svg className="w-6 h-6 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--ink-primary)]">Secure & Private</h3>
            <p className="text-sm text-[var(--ink-secondary)]">
              Your notes are encrypted and only accessible to you. Your data, your control.
            </p>
          </div>
          <div className="p-6 bg-[var(--canvas)] border border-[var(--border)] rounded-lg text-center space-y-3 shadow-[0_1px_3px_var(--shadow-card)]">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[var(--surface)] rounded-lg">
              <svg className="w-6 h-6 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--ink-primary)]">Access Anywhere</h3>
            <p className="text-sm text-[var(--ink-secondary)]">
              From any device, anywhere. Your notes sync instantly across all platforms.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full px-6 py-4 text-center text-sm text-[var(--ink-tertiary)]">
        © 2026 Note Taker. All rights reserved.
      </footer>
    </div>
  );
}