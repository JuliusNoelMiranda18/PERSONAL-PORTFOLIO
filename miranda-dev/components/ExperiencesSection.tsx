"use client";
import React from "react";
import {
  GitCommitIcon,
  RepoIcon,
  FilterIcon,
  StarIcon,
  UnfoldIcon,
  GraphIcon,
} from "@primer/octicons-react";

export default function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 flex flex-col justify-center"
      style={{ minHeight: "calc(100vh - 112px)", backgroundColor: "var(--bg)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* ── Left Column: Experience Activity Timeline (2/3 width = 8 cols) ── */}
        <div className="lg:col-span-8 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                Experience
              </h2>
            </div>

            {/* Month Header / Divider */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "var(--text)" }}>
                September <span style={{ color: "var(--muted)" }}>2026</span>
              </span>
              <div className="h-[1px] w-full" style={{ backgroundColor: "var(--border)", opacity: 0.5 }} />
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-6 flex flex-col gap-6 border-l" style={{ borderColor: "var(--border)" }}>
              {/* Part 1: AI Backend Engineering */}
              <div className="relative flex flex-col gap-3">
                <div
                  className="absolute -left-[37px] top-0 w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <GitCommitIcon size={14} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                      AI Backend Engineer Intern
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full border font-mono" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                      16 commits
                    </span>
                  </div>
                  <UnfoldIcon size={14} style={{ color: "var(--muted)" }} />
                </div>

                <div className="flex flex-col gap-2.5 text-sm pl-1">
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="https://github.com/JuliusNoelMiranda18/NON-PARAMETRIC-STATISTICS"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium hover:underline truncate"
                      style={{ color: "var(--text)" }}
                    >
                      JuliusNoelMiranda18/NON-PARAMETRIC-ST...
                    </a>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs underline cursor-pointer" style={{ color: "var(--muted)" }}>
                        9 commits
                      </span>
                      <div className="w-24 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
                        <div className="h-full w-[80%]" style={{ backgroundColor: "#2da44e" }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="https://github.com/JuliusNoelMiranda18/PROLOG-"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium hover:underline truncate"
                      style={{ color: "var(--text)" }}
                    >
                      JuliusNoelMiranda18/PROLOG-
                    </a>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs underline cursor-pointer" style={{ color: "var(--muted)" }}>
                        4 commits
                      </span>
                      <div className="w-24 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
                        <div className="h-full w-[45%]" style={{ backgroundColor: "#3fb950" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Repositories & Systems Architecture */}
              <div className="relative flex flex-col gap-3">
                <div
                  className="absolute -left-[37px] top-0 w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <RepoIcon size={14} />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                    Created 3 core repositories & AI tools
                  </h3>
                  <UnfoldIcon size={14} style={{ color: "var(--muted)" }} />
                </div>

                <div className="flex flex-col gap-2.5 text-sm pl-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <RepoIcon size={14} style={{ color: "var(--muted)" }} />
                      <a
                        href="https://github.com/JuliusNoelMiranda18/PERSONAL-PORTFOLIO"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium hover:underline truncate"
                        style={{ color: "var(--text)" }}
                      >
                        JuliusNoelMiranda18/PERSONAL-PORTFOLIO
                      </a>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-xs" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#3178c6" }} />
                        TypeScript
                      </span>
                      <span>Sep 13</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <RepoIcon size={14} style={{ color: "var(--muted)" }} />
                      <a
                        href="https://github.com/JuliusNoelMiranda18/PROLOG-"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium hover:underline truncate"
                        style={{ color: "var(--text)" }}
                      >
                        JuliusNoelMiranda18/PROLOG-
                      </a>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-xs" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#74283c" }} />
                        Prolog
                      </span>
                      <span>Sep 11</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 3: Hackathons & Research Projects */}
              <div className="relative flex flex-col gap-3">
                <div
                  className="absolute -left-[37px] top-0 w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <GraphIcon size={14} />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                    5x Hackathons & Data Science Projects
                  </h3>
                  <UnfoldIcon size={14} style={{ color: "var(--muted)" }} />
                </div>

                <div className="flex flex-col gap-2.5 text-sm pl-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <RepoIcon size={14} style={{ color: "var(--muted)" }} />
                      <a
                        href="https://github.com/JuliusNoelMiranda18/NON-PARAMETRIC-STATISTICS"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium hover:underline truncate"
                        style={{ color: "var(--text)" }}
                      >
                        JuliusNoelMiranda18/NON-PARAMETRIC-STATISTICS
                      </a>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-xs" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#198ce7" }} />
                        R
                      </span>
                      <span>Sep 7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: Education Feed (1/3 width = 4 cols) ── */}
        <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                Education
              </h2>
              <button
                type="button"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border cursor-pointer"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <FilterIcon size={14} />
                Filter
              </button>
            </div>

            {/* Feed Card Container */}
            <div
              className="rounded-lg border overflow-hidden flex flex-col divide-y flex-1"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              {/* Card 1: University of the Philippines Manila */}
              <div className="p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center gap-1.5">
                    <GraphIcon size={14} />
                    <span>University of the Philippines Manila</span>
                    <span>·</span>
                    <a href="#connect" className="hover:underline" style={{ color: "var(--text)" }}>
                      See degree
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border" style={{ borderColor: "var(--border)" }}>
                      <img src="/profile/1-dithered.jpg" alt="UP Manila" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-sm truncate" style={{ color: "var(--text)" }}>
                      BS Computer Science / AI Focus
                    </span>
                  </div>

                  <div className="flex items-center rounded-md overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium cursor-pointer"
                      style={{ backgroundColor: "var(--surface)", color: "var(--text)" }}
                    >
                      <StarIcon size={14} />
                      Star
                    </button>
                    <button
                      type="button"
                      className="px-1.5 py-1 text-xs border-l cursor-pointer"
                      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                    >
                      ▾
                    </button>
                  </div>
                </div>

                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  Focused on artificial intelligence, machine learning algorithms, and high-performance backend architecture.
                </p>

                <div className="flex items-center gap-4 text-xs pt-1" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#3178c6" }} />
                    CS Core
                  </span>
                  <span className="flex items-center gap-1">
                    <StarIcon size={12} />
                    2023 - Present
                  </span>
                </div>
              </div>

              {/* Card 2: Academic Achievements & Coursework */}
              <div className="p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center gap-1.5">
                    <GraphIcon size={14} />
                    <span>Honors & Coursework</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border" style={{ borderColor: "var(--border)" }}>
                      <img src="/profile/1-dithered.jpg" alt="Academic" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-sm truncate" style={{ color: "var(--text)" }}>
                      Data Structures, Algorithms & AI
                    </span>
                  </div>

                  <div className="flex items-center rounded-md overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium cursor-pointer"
                      style={{ backgroundColor: "var(--surface)", color: "var(--text)" }}
                    >
                      <StarIcon size={14} />
                      Star
                    </button>
                    <button
                      type="button"
                      className="px-1.5 py-1 text-xs border-l cursor-pointer"
                      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                    >
                      ▾
                    </button>
                  </div>
                </div>

                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  Specialized in non-parametric statistics, symbolic logic (Prolog), and modern web/AI application engineering.
                </p>

                <div className="flex items-center gap-4 text-xs pt-1" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#74283c" }} />
                    Research
                  </span>
                  <span className="flex items-center gap-1">
                    <StarIcon size={12} />
                    Top Honor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
