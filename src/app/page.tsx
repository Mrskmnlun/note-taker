import Link from "next/link";
import { FileText, ArrowRight, NotebookPen, Feather, Link2, UsersRound, ShieldCheck, Check, Heading1, Heading2, Heading3, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--canvas)]">
      <header className="w-full h-[72px] flex items-center justify-between px-12 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--ink-primary)] rounded-md flex items-center justify-center">
            <NotebookPen className="w-[18px] h-[18px] text-[var(--canvas)]" />
          </div>
          <span className="text-lg font-semibold text-[var(--ink-primary)] tracking-tight">Note Taker</span>
        </div>

        <nav className="flex items-center gap-8">
          <span className="text-sm text-[var(--ink-secondary)]">Product</span>
          <span className="text-sm text-[var(--ink-secondary)]">Templates</span>
          <span className="text-sm text-[var(--ink-secondary)]">Pricing</span>
          <span className="text-sm text-[var(--ink-secondary)]">Changelog</span>
          <span className="text-sm text-[var(--ink-secondary)]">Docs</span>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-[var(--ink-primary)]">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="h-9 px-4 flex items-center justify-center text-sm font-medium text-[var(--canvas)] bg-[var(--ink-primary)] rounded-md hover:bg-[#333] transition-colors"
          >
            Get started
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="flex flex-col items-center pt-24 pb-16 px-12 gap-8">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full">
            <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-sm" />
            <span className="text-sm font-medium text-[var(--ink-primary)]">New — Realtime presence is here</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--ink-secondary)]" />
          </div>

          <h1 className="text-[72px] font-bold text-[var(--ink-primary)] leading-[1.05] tracking-[-0.025em%] text-center max-w-[960px]">
            The calm home for the things you think.
          </h1>

          <p className="text-xl text-[var(--ink-secondary)] leading-[1.5] text-center max-w-[680px]">
            Note Taker is a quiet place to write, plan, and connect ideas — without the chrome and clutter of every other tool.
          </p>

          <div className="flex items-center gap-3 pt-4">
            <Link
              href="/signup"
              className="h-12 px-6 flex items-center justify-center text-[15px] font-medium text-[var(--canvas)] bg-[var(--ink-primary)] rounded-md hover:bg-[#333] transition-colors"
            >
              Start writing for free
            </Link>
            <Link
              href="/login"
              className="h-12 px-6 flex items-center justify-center text-[15px] font-medium text-[var(--ink-primary)] border border-[var(--border)] rounded-md hover:bg-[var(--hover-surface)] transition-colors"
            >
              Watch the 2-min tour
            </Link>
          </div>

          <p className="text-sm text-[var(--ink-tertiary)] pt-2">
            Free for individuals. No credit card required.
          </p>
        </section>

        <section className="flex justify-center px-12 pb-24">
          <div className="w-[1200px] h-[680px] bg-[var(--canvas)] rounded-xl border border-[var(--border)] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="h-10 bg-[var(--surface)] border-b border-[var(--border)] flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E55D5D]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5C84D]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#5DC57A]" />
              <div className="flex-1 flex justify-center">
                <span className="text-xs text-[var(--ink-tertiary)]">app.notetaker.com / project-roadmap-q2-2026</span>
              </div>
            </div>
            <div className="flex h-[calc(100%-40px)]">
              <div className="w-[220px] bg-[var(--surface)] border-r border-[var(--border)] p-3">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded">
                  <div className="w-5 h-5 bg-[var(--ink-primary)] rounded flex items-center justify-center">
                    <span className="text-[11px] font-semibold text-[var(--canvas)]">E</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--ink-primary)]">Edmund&apos;s Workspace</span>
                </div>
                <div className="h-2" />
                <div className="flex items-center gap-2 px-2 py-1.5 bg-[var(--canvas)] border border-[var(--border)] rounded">
                  <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm text-[var(--ink-secondary)]">Search</span>
                </div>
                <div className="h-4" />
                <div className="px-2 py-1">
                  <span className="text-[10px] font-medium text-[var(--ink-tertiary)] tracking-wide">PRIVATE</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1.5 rounded">
                  <svg className="w-3 h-3 text-[var(--ink-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-sm text-[var(--ink-primary)]">Getting Started</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1.5 bg-[var(--hover-surface)] border-l-[3px] border-[var(--accent)] rounded">
                  <svg className="w-3 h-3 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <svg className="w-3.5 h-3.5 text-[var(--ink-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-[var(--ink-primary)]">Project Roadmap Q2</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1.5 pl-8 rounded">
                  <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span className="text-sm text-[var(--ink-primary)]">Q2 Goals & OKRs</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1.5 pl-8 rounded">
                  <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-[var(--ink-primary)]">Sprint Planning</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1.5 rounded">
                  <svg className="w-3 h-3 text-[var(--ink-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-sm text-[var(--ink-primary)]">Meeting Notes</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1.5 rounded">
                  <svg className="w-3 h-3 text-[var(--ink-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m15.364-6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                  <span className="text-sm text-[var(--ink-primary)]">Daily Journal</span>
                </div>
              </div>
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[var(--surface)] rounded-lg flex items-center justify-center">
                    <Feather className="w-5 h-5 text-[var(--ink-primary)]" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-[var(--ink-primary)] tracking-[-0.02em%] mb-4">Project Roadmap Q2 2026</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-semibold text-white">E</span>
                  </div>
                  <span className="text-sm text-[var(--ink-secondary)]">Edmund Hee</span>
                  <span className="text-sm text-[var(--ink-tertiary)]">·</span>
                  <span className="text-sm text-[var(--ink-secondary)]">Edited 2 minutes ago</span>
                </div>
                <div className="p-4 bg-[var(--surface)] rounded-lg flex items-start gap-3 mb-6">
                  <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="text-sm text-[var(--ink-primary)] leading-relaxed">Tip — type / to insert any block. Drag the handle to rearrange.</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink-primary)] tracking-[-0.01em%] mb-2">Themes for the quarter</h3>
                <p className="text-base text-[var(--ink-secondary)] leading-relaxed">
                  We are organizing work around three themes that align with the company-wide objectives. Anything not covered should be parked on the backlog.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center py-[72px] px-12 gap-6 bg-[var(--canvas)]">
          <p className="text-sm font-medium text-[var(--ink-tertiary)] tracking-wide">Trusted by writers and teams at</p>
          <div className="flex items-center gap-16">
            <span className="text-xl font-semibold text-[var(--ink-tertiary)] tracking-tight">Northwind</span>
            <span className="text-xl font-semibold text-[var(--ink-tertiary)] tracking-tight">Lumen</span>
            <span className="text-xl font-semibold text-[var(--ink-tertiary)] tracking-tight">Forge & Foam</span>
            <span className="text-xl font-semibold text-[var(--ink-tertiary)] tracking-tight">Cartograph</span>
            <span className="text-xl font-semibold text-[var(--ink-tertiary)] tracking-tight">Quietly</span>
            <span className="text-xl font-semibold text-[var(--ink-tertiary)] tracking-tight">Halflight</span>
          </div>
        </section>

        <section className="flex flex-col items-center py-24 px-12 gap-16 bg-[var(--surface)]">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-semibold text-[var(--accent)] tracking-widest">WHAT YOU GET</span>
            <h2 className="text-[48px] font-bold text-[var(--ink-primary)] leading-[1.15] tracking-tight text-center max-w-[760px]">
              A workspace that gets out of the way.
            </h2>
            <p className="text-lg text-[var(--ink-secondary)] leading-[1.55] text-center max-w-[640px]">
              Note Taker pairs editorial typography with thoughtful structure — so writing feels like writing, and your pages stay easy to find a year from now.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-[1200px]">
            <div className="flex gap-5">
              <div className="flex-1 p-8 bg-[var(--canvas)] border border-[var(--border)] rounded-xl">
                <div className="w-11 h-11 bg-[var(--ink-primary)] rounded-lg flex items-center justify-center mb-5">
                  <Feather className="w-5 h-5 text-[var(--canvas)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink-primary)] tracking-tight mb-2">Built for writing</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                  A focused editor with slash commands, blocks, and hotkeys that fade away. Inter at 16px on a generous measure.
                </p>
              </div>
              <div className="flex-1 p-8 bg-[var(--canvas)] border border-[var(--border)] rounded-xl">
                <div className="w-11 h-11 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-5">
                  <Link2 className="w-5 h-5 text-[var(--canvas)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink-primary)] tracking-tight mb-2">Linked, not lost</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                  Pages reference pages. Backlinks, mentions, and breadcrumbs make it natural to find what you wrote three months ago.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 p-8 bg-[var(--canvas)] border border-[var(--border)] rounded-xl">
                <div className="w-11 h-11 bg-[var(--ink-primary)] rounded-lg flex items-center justify-center mb-5">
                  <UsersRound className="w-5 h-5 text-[var(--canvas)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink-primary)] tracking-tight mb-2">Quiet collaboration</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                  Realtime presence, inline comments, and clear page roles. Bring teammates in without the noise of a chat app.
                </p>
              </div>
              <div className="flex-1 p-8 bg-[var(--canvas)] border border-[var(--border)] rounded-xl">
                <div className="w-11 h-11 bg-[var(--ink-primary)] rounded-lg flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5 text-[var(--canvas)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink-primary)] tracking-tight mb-2">Yours, end-to-end</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                  Encrypted at rest, exportable as Markdown, and never used to train anyone&apos;s model. Your pages are your pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center gap-20 py-[120px] px-12 bg-[var(--canvas)]">
          <div className="w-[520px] flex flex-col gap-6">
            <span className="text-xs font-semibold text-[var(--accent)] tracking-widest">WRITE</span>
            <h2 className="text-[44px] font-bold text-[var(--ink-primary)] leading-[1.15] tracking-tight">
              Slash command, then write.
            </h2>
            <p className="text-base text-[var(--ink-secondary)] leading-relaxed">
              Type / and pick any block — heading, list, code, quote, callout. Drag the handle to rearrange. Press Tab to indent. Hotkeys for the things you reach for, never for the things you don&apos;t.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-primary)]">Markdown shortcuts that feel native</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-primary)]">Inline code, math, and embeds</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-primary)]">Sticky page covers and cover icons</span>
              </div>
            </div>
          </div>

          <div className="w-[520px] h-[480px] bg-[var(--canvas)] rounded-xl border border-[var(--border)] shadow-[0_14px_40px_-8px_rgba(0,0,0,0.08)] overflow-hidden p-8">
            <h3 className="text-[28px] font-bold text-[var(--ink-primary)] tracking-tight mb-4">Reading List</h3>
            <p className="text-sm text-[var(--ink-tertiary)] mb-3">Type</p>
            <span className="inline-block px-1.5 py-0.5 bg-[var(--surface)] rounded text-sm font-medium text-[var(--accent)]">/head</span>
            <div className="h-3" />
            <div className="w-[340px] bg-[var(--canvas)] rounded-lg border border-[var(--border)] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.13)] p-1.5">
              <div className="px-2 py-1">
                <span className="text-[11px] font-semibold text-[var(--ink-tertiary)] tracking-wide">BASIC BLOCKS</span>
              </div>
              <div className="p-2 space-y-1">
                <div className="flex items-center gap-2.5 p-2 bg-[var(--hover-surface)] rounded">
                  <div className="w-7 h-7 bg-[var(--canvas)] border border-[var(--border)] rounded flex items-center justify-center">
                    <Heading1 className="w-4 h-4 text-[var(--ink-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--ink-primary)]">Heading 1</p>
                    <p className="text-[11px] text-[var(--ink-tertiary)]">Big section heading</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2">
                  <div className="w-7 h-7 bg-[var(--surface)] rounded flex items-center justify-center">
                    <Heading2 className="w-4 h-4 text-[var(--ink-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--ink-primary)]">Heading 2</p>
                    <p className="text-[11px] text-[var(--ink-tertiary)]">Medium subsection</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2">
                  <div className="w-7 h-7 bg-[var(--surface)] rounded flex items-center justify-center">
                    <Heading3 className="w-4 h-4 text-[var(--ink-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--ink-primary)]">Heading 3</p>
                    <p className="text-[11px] text-[var(--ink-tertiary)]">Smaller subsection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center py-[120px] px-12 gap-16 bg-[var(--surface)]">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-[var(--accent)] tracking-widest">PRICING</span>
            <h2 className="text-[48px] font-bold text-[var(--ink-primary)] leading-[1.15] tracking-tight">
              Two plans, no surprises.
            </h2>
            <p className="text-[17px] text-[var(--ink-secondary)] leading-[1.55] text-center max-w-[560px]">
              Start free for personal pages. Upgrade when your team needs realtime collaboration and admin controls.
            </p>
          </div>

          <div className="flex gap-5">
            <div className="w-[380px] p-8 bg-[var(--canvas)] border border-[var(--border)] rounded-xl flex flex-col gap-5">
              <span className="text-sm font-semibold text-[var(--ink-secondary)] tracking-wider">PERSONAL</span>
              <div className="flex items-end gap-1.5">
                <span className="text-[48px] font-bold text-[var(--ink-primary)] tracking-tight">$0</span>
                <span className="text-sm text-[var(--ink-tertiary)] mb-2">forever</span>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                For one writer with infinite pages and a calm corner of the internet.
              </p>
              <button className="w-full h-[42px] border border-[var(--border)] rounded-md text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--hover-surface)] transition-colors">
                Start writing
              </button>
              <div className="h-px bg-[var(--border)]" />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--ink-primary)]">Unlimited pages and blocks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--ink-primary)]">Sync across web, mac, and iOS</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--ink-primary)]">Markdown import and export</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--ink-primary)]">Up to 3 guests per page</span>
                </div>
              </div>
            </div>

            <div className="w-[380px] p-8 bg-[var(--ink-primary)] rounded-xl shadow-[0_18px_48px_-12px_rgba(0,0,0,0.2)] flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--canvas)] tracking-wider">TEAM</span>
                <span className="px-2 py-0.5 bg-[var(--accent)] rounded-full text-[11px] font-semibold text-[var(--canvas)]">Most popular</span>
              </div>
              <div className="flex items-end gap-1.5">
                <span className="text-[48px] font-bold text-[var(--canvas)]">$8</span>
                <span className="text-sm text-[#FFFFFF99] mb-2">per editor / month</span>
              </div>
              <p className="text-sm text-[#FFFFFFCC] leading-relaxed">
                For teams writing together — realtime presence, comments, and admin controls included.
              </p>
              <button className="w-full h-[42px] bg-[var(--canvas)] rounded-md text-sm font-medium text-[var(--ink-primary)]">
                Start a 14-day trial
              </button>
              <div className="h-px bg-[#FFFFFF1F]" />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--canvas)]">Everything in Personal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--canvas)]">Realtime presence and comments</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--canvas)]">Permissions and admin controls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--canvas)]">SAML SSO and audit log</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--canvas)]">Priority support, weekday hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-[120px] px-12 bg-[var(--canvas)]">
          <div className="w-[1100px] bg-[var(--ink-primary)] rounded-[20px] p-20 flex flex-col items-center gap-6">
            <h2 className="text-[48px] font-bold text-[var(--canvas)] leading-[1.1] tracking-tight text-center max-w-[760px]">
              Begin a quieter way to write.
            </h2>
            <p className="text-lg text-[#FFFFFFB3] leading-[1.5] text-center max-w-[560px]">
              Open a fresh page in fewer than ten seconds. No credit card. No onboarding tour.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <button className="h-12 px-6 bg-[var(--canvas)] rounded-md text-sm font-medium text-[var(--ink-primary)] flex items-center gap-2">
                Get started — it&apos;s free
              </button>
              <button className="h-12 px-6 border border-[#FFFFFF33] rounded-md text-sm font-medium text-[var(--canvas)]">
                Talk to sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-16 px-12 bg-[var(--canvas)]">
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-col gap-4 w-[340px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--ink-primary)] rounded-md flex items-center justify-center">
                <NotebookPen className="w-[18px] h-[18px] text-[var(--canvas)]" />
              </div>
              <span className="text-lg font-semibold text-[var(--ink-primary)] tracking-tight">Note Taker</span>
            </div>
            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
              A calmer place to write, plan, and connect ideas. Made on a quiet street in 2026.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="w-8 h-8 border border-[var(--border)] rounded flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <div className="w-8 h-8 border border-[var(--border)] rounded flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[var(--ink-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[var(--ink-primary)]">Product</span>
              <span className="text-sm text-[var(--ink-secondary)]">Features</span>
              <span className="text-sm text-[var(--ink-secondary)]">Pricing</span>
              <span className="text-sm text-[var(--ink-secondary)]">Changelog</span>
              <span className="text-sm text-[var(--ink-secondary)]">Roadmap</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[var(--ink-primary)]">Resources</span>
              <span className="text-sm text-[var(--ink-secondary)]">Documentation</span>
              <span className="text-sm text-[var(--ink-secondary)]">Guides</span>
              <span className="text-sm text-[var(--ink-secondary)]">API Reference</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[var(--ink-primary)]">Company</span>
              <span className="text-sm text-[var(--ink-secondary)]">About</span>
              <span className="text-sm text-[var(--ink-secondary)]">Blog</span>
              <span className="text-sm text-[var(--ink-secondary)]">Careers</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[var(--ink-primary)]">Legal</span>
              <span className="text-sm text-[var(--ink-secondary)]">Privacy</span>
              <span className="text-sm text-[var(--ink-secondary)]">Terms</span>
              <span className="text-sm text-[var(--ink-secondary)]">Security</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex justify-between">
          <span className="text-sm text-[var(--ink-tertiary)]">© 2026 Note Taker. All rights reserved.</span>
          <span className="text-sm text-[var(--ink-tertiary)]">Made with care</span>
        </div>
      </footer>
    </div>
  );
}