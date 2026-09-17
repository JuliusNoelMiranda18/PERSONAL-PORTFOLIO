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
      className="max-w-[1280px] mx-auto px-4 md:px-8 py-5 flex flex-col justify-center scroll-mt-[5px]"
      style={{ minHeight: "calc(100vh - 112px)", backgroundColor: "var(--bg)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* ── Left Column: Experience Activity Timeline (2/3 width = 8 cols) ── */}
        <div className="lg:col-span-8 flex flex-col gap-8 justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
                Experience
              </h2>
            </div>

            {/* Month Header / Divider */}
            <div className="flex items-center gap-4">
              <span className="text-base font-bold whitespace-nowrap" style={{ color: "var(--text)" }}>
                September <span style={{ color: "var(--muted)" }}>2026</span>
              </span>
              <div className="h-[1px] w-full" style={{ backgroundColor: "var(--border)", opacity: 0.5 }} />
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-8 flex flex-col gap-8 border-l-2" style={{ borderColor: "var(--border)" }}>
              {/* Part 1: AI Backend Engineering */}
              <div className="relative flex flex-col gap-4">
                <div
                  className="absolute -left-[45px] top-0 w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <GitCommitIcon size={16} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                      AI Backend Engineer Intern
                    </h3>
                    <span className="text-xs md:text-sm px-3 py-1 rounded-full border font-mono font-semibold" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                      16 commits
                    </span>
                  </div>
                  <span style={{ color: "var(--muted)" }}><UnfoldIcon size={16} /></span>
                </div>

                <div className="flex flex-col gap-3 text-base pl-1">
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="https://github.com/JuliusNoelMiranda18/NON-PARAMETRIC-STATISTICS"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold hover:underline truncate text-base md:text-lg"
                      style={{ color: "var(--text)" }}
                    >
                      JuliusNoelMiranda18/NON-PARAMETRIC-ST...
                    </a>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm font-medium underline cursor-pointer" style={{ color: "var(--muted)" }}>
                        9 commits
                      </span>
                      <div className="w-28 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
                        <div className="h-full w-[80%]" style={{ backgroundColor: "#2da44e" }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <a
                      href="https://github.com/JuliusNoelMiranda18/PROLOG-"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold hover:underline truncate text-base md:text-lg"
                      style={{ color: "var(--text)" }}
                    >
                      JuliusNoelMiranda18/PROLOG-
                    </a>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm font-medium underline cursor-pointer" style={{ color: "var(--muted)" }}>
                        4 commits
                      </span>
                      <div className="w-28 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
                        <div className="h-full w-[45%]" style={{ backgroundColor: "#3fb950" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Repositories & Systems Architecture */}
              <div className="relative flex flex-col gap-4">
                <div
                  className="absolute -left-[45px] top-0 w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <RepoIcon size={16} />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                    Created 3 core repositories & AI tools
                  </h3>
                  <span style={{ color: "var(--muted)" }}><UnfoldIcon size={16} /></span>
                </div>

                <div className="flex flex-col gap-3 text-base pl-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 truncate">
                      <span style={{ color: "var(--muted)" }}><RepoIcon size={16} /></span>
                      <a
                        href="https://github.com/JuliusNoelMiranda18/PERSONAL-PORTFOLIO"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:underline truncate text-base md:text-lg"
                        style={{ color: "var(--text)" }}
                      >
                        JuliusNoelMiranda18/PERSONAL-PORTFOLIO
                      </a>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-sm font-medium" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full inline-block" style={{ backgroundColor: "#3178c6" }} />
                        TypeScript
                      </span>
                      <span>Sep 13</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 truncate">
                      <span style={{ color: "var(--muted)" }}><RepoIcon size={16} /></span>
                      <a
                        href="https://github.com/JuliusNoelMiranda18/PROLOG-"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:underline truncate text-base md:text-lg"
                        style={{ color: "var(--text)" }}
                      >
                        JuliusNoelMiranda18/PROLOG-
                      </a>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-sm font-medium" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full inline-block" style={{ backgroundColor: "#74283c" }} />
                        Prolog
                      </span>
                      <span>Sep 11</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 3: Hackathons & Research Projects */}
              <div className="relative flex flex-col gap-4">
                <div
                  className="absolute -left-[45px] top-0 w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <GraphIcon size={16} />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                    5x Hackathons & Data Science Projects
                  </h3>
                  <span style={{ color: "var(--muted)" }}><UnfoldIcon size={16} /></span>
                </div>

                <div className="flex flex-col gap-3 text-base pl-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 truncate">
                      <span style={{ color: "var(--muted)" }}><RepoIcon size={16} /></span>
                      <a
                        href="https://github.com/JuliusNoelMiranda18/NON-PARAMETRIC-STATISTICS"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:underline truncate text-base md:text-lg"
                        style={{ color: "var(--text)" }}
                      >
                        JuliusNoelMiranda18/NON-PARAMETRIC-STATISTICS
                      </a>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-sm font-medium" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full inline-block" style={{ backgroundColor: "#198ce7" }} />
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
        <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
                Education
              </h2>
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border cursor-pointer"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <FilterIcon size={16} />
                Filter
              </button>
            </div>

            {/* Feed Card Container */}
            <div
              className="rounded-xl border-2 overflow-hidden flex flex-col divide-y-2 flex-1"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              {/* Card 1: University of the Philippines Manila */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm font-medium" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center gap-2">
                    <GraphIcon size={16} />
                    <span>University of the Philippines Manila</span>
                    <span>·</span>
                    <a href="#connect" className="hover:underline font-semibold" style={{ color: "var(--text)" }}>
                      See degree
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border-2" style={{ borderColor: "var(--border)" }}>
                      <img src="/profile/1-dithered.jpg" alt="UP Manila" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-lg md:text-xl truncate" style={{ color: "var(--text)" }}>
                      BS Computer Science / AI Focus
                    </span>
                  </div>

                  <div className="flex items-center rounded-lg overflow-hidden border-2" style={{ borderColor: "var(--border)" }}>
                    <button
                      type="button"
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold cursor-pointer"
                      style={{ backgroundColor: "var(--surface)", color: "var(--text)" }}
                    >
                      <StarIcon size={16} />
                      Star
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1.5 text-sm border-l-2 cursor-pointer font-bold"
                      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                    >
                      ▾
                    </button>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Focused on artificial intelligence, machine learning algorithms, and high-performance backend architecture.
                </p>

                <div className="flex items-center gap-5 text-sm font-medium pt-1" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3178c6" }} />
                    CS Core
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <StarIcon size={14} />
                    2023 - Present
                  </span>
                </div>
              </div>

              {/* Card 2: Academic Achievements & Coursework */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm font-medium" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center gap-2">
                    <GraphIcon size={16} />
                    <span>Honors & Coursework</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border-2" style={{ borderColor: "var(--border)" }}>
                      <img src="/profile/1-dithered.jpg" alt="Academic" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-lg md:text-xl truncate" style={{ color: "var(--text)" }}>
                      Data Structures, Algorithms & AI
                    </span>
                  </div>

                  <div className="flex items-center rounded-lg overflow-hidden border-2" style={{ borderColor: "var(--border)" }}>
                    <button
                      type="button"
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold cursor-pointer"
                      style={{ backgroundColor: "var(--surface)", color: "var(--text)" }}
                    >
                      <StarIcon size={16} />
                      Star
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1.5 text-sm border-l-2 cursor-pointer font-bold"
                      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                    >
                      ▾
                    </button>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Specialized in non-parametric statistics, symbolic logic (Prolog), and modern web/AI application engineering.
                </p>

                <div className="flex items-center gap-5 text-sm font-medium pt-1" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#74283c" }} />
                    Research
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <StarIcon size={14} />
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
