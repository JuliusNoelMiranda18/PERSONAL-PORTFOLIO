"use client";
import React, { useState } from "react";
import {
  FilterIcon,
  StarIcon,
  UnfoldIcon,
  FoldIcon,
  GraphIcon,
  RepoIcon,
  RocketIcon,
  CodeIcon,
} from "@primer/octicons-react";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  date: string;
  logoType: "img" | "text";
  logoSrc?: string;
  logoText?: string;
  badgeText?: string;
  bullets: string[];
  tags: { label: string; color: string }[];
}

const EXPERIENCES_DATA: TimelineItem[] = [
  {
    id: "flyrank",
    role: "AI Backend Engineer",
    company: "Flyrank",
    date: "June 2026 - July 2026",
    logoType: "img",
    logoSrc: "/logo/flyrank_logo.png",
    badgeText: "5 Projects & 1 Capstone",
    bullets: [
      "Engineered high-performance AI backend microservices and intelligent data pipelines for automated search ranking & analytics.",
      "Developed 5 production projects and 1 capstone AI backend system with robust database models and API integrations.",
    ],
    tags: [
      { label: "Python / AI", color: "#3572A5" },
      { label: "5 Projects", color: "#2da44e" },
      { label: "1 Capstone", color: "#8957e5" },
    ],
  },
  {
    id: "horsemen",
    role: "Project Lead & Full Stack",
    company: "The Horsemen",
    date: "May 2026 - Present",
    logoType: "text",
    logoText: "HF",
    badgeText: "4+ Hackathons",
    bullets: [
      "Led the development of 5+ web applications as project lead, contributing as a full-stack on production across industries including research, education, and healthcare.",
      "Architected full-stack solutions using Next.js (TypeScript, Tailwind) and Supabase.",
      "Competed in 5+ hackathons, earning finalist placements and securing wins in several events.",
    ],
    tags: [
      { label: "Next.js", color: "#3178c6" },
      { label: "TypeScript", color: "#3178c6" },
      { label: "Supabase", color: "#3ecf8e" },
      { label: "4+ Hackathons", color: "#e34c26" },
    ],
  },
  {
    id: "gdg",
    role: "Junior Project Manager",
    company: "GDG UP Manila",
    date: "August 2025 - May 2026",
    logoType: "img",
    logoSrc: "/logo/gdg_logo.png",
    badgeText: "2 Tech Events",
    bullets: [
      "Oversees the end-to-end execution of technical programs, ensuring timely delivery and effective coordination across teams.",
      "Co-organized 2 tech events, Info Session 2026: Beyond the Terminal and Unlocking the Black Box: From Theory to Industry Practice, each attracting 50+ participants.",
      "Hosted Info Session 2026: Beyond the Terminal, leading a two-hour thesis-sharing event.",
    ],
    tags: [
      { label: "Technical Management", color: "#f1e05a" },
      { label: "2 Tech Events", color: "#e34c26" },
      { label: "50+ Participants", color: "#2da44e" },
    ],
  },
];

export default function ExperiencesSection() {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({
    flyrank: true,
    horsemen: true,
    gdg: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="experiences"
      className="max-w-[1280px] mx-auto px-4 md:px-8 pt-10 pb-40 flex flex-col justify-center scroll-mt-[112px]"
      style={{ minHeight: "calc(100vh - 112px)", backgroundColor: "var(--bg)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* ── Left Column: Experience Activity Timeline (8 cols) ── */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
              Experience
            </h2>
            <span className="text-xs font-mono px-3 py-1 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              Click items to expand / collapse
            </span>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative pl-8 flex flex-col gap-10 border-l-2 ml-4" style={{ borderColor: "var(--border)" }}>
            {EXPERIENCES_DATA.map((item) => {
              const isExpanded = !!expandedMap[item.id];
              return (
                <div key={item.id} className="relative flex flex-col gap-3">
                  {/* Timeline Node Icon (Logo in Circle) */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="absolute -left-[53px] top-0 w-11 h-11 rounded-full flex items-center justify-center border-2 shadow-sm cursor-pointer transition-transform hover:scale-110 shrink-0 overflow-hidden"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                    title={`Click to ${isExpanded ? "collapse" : "expand"} ${item.company}`}
                  >
                    {item.logoType === "img" && item.logoSrc ? (
                      <img src={item.logoSrc} alt={item.company} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-extrabold text-sm tracking-wider" style={{ color: "var(--text)" }}>
                        {item.logoText}
                      </span>
                    )}
                  </button>

                  {/* Header Row */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold group-hover:underline" style={{ color: "var(--text)" }}>
                        {item.role}
                      </h3>
                      <span className="text-base font-semibold px-2.5 py-0.5 rounded-md" style={{ backgroundColor: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}>
                        {item.company}
                      </span>
                      {item.badgeText && (
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                          {item.badgeText}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
                        {item.date}
                      </span>
                      <button type="button" className="p-1 rounded cursor-pointer" style={{ color: "var(--muted)" }}>
                        {isExpanded ? <FoldIcon size={16} /> : <UnfoldIcon size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Container */}
                  {isExpanded && (
                    <div className="flex flex-col gap-4 text-base pt-2 pl-1 animate-fadeIn">
                      <ul className="flex flex-col gap-2 list-disc list-inside" style={{ color: "var(--text)" }}>
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed text-sm md:text-base">
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Tech & Milestone Tags */}
                      <div className="flex items-center gap-3 flex-wrap pt-1">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border"
                            style={{
                              backgroundColor: "var(--surface)",
                              borderColor: "var(--border)",
                              color: "var(--text)",
                            }}
                          >
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tag.color }} />
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Column: Education Feed (4 cols) ── */}
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
