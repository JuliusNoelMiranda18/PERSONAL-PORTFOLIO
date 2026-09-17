"use client";
import React, { useState, useEffect } from "react";
import {
  FilterIcon,
  StarIcon,
  UnfoldIcon,
  FoldIcon,
  GraphIcon,
  RepoIcon,
} from "@primer/octicons-react";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  date: string;
  logoType: "img" | "text";
  logoSrc?: string;
  logoText?: string;
  bullets: string[];
  tags: { label: string; color: string }[];
  sideType: string;
  sideColor: string;
  sidePeriod: string;
}

const EXPERIENCES_DATA: TimelineItem[] = [
  {
    id: "flyrank",
    role: "AI Backend Engineer",
    company: "Flyrank",
    date: "June 2026 - July 2026",
    logoType: "img",
    logoSrc: "/logo/flyrank_logo_black.png",
    sideType: "Internship",
    sideColor: "#3572A5",
    sidePeriod: "Jun - Jul 2026",
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
    sideType: "Hackathon",
    sideColor: "#8957e5",
    sidePeriod: "May 2026 - Pres",
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
    logoSrc: "/logo/gdg_logo_black.png",
    sideType: "Organization",
    sideColor: "#ea4335",
    sidePeriod: "Aug 2025 - May 2026",
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
  // Collapsed by default so descriptions are hidden when page starts (matching Image 3 & Image 5)
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  // Theme listener to switch logos automatically when toggling between dark and light modes
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const getLogoSrc = (item: TimelineItem) => {
    if (item.id === "flyrank") {
      return isDark ? "/logo/flyrank_logo_black.png" : "/logo/flyrank_logo.png";
    }
    if (item.id === "gdg") {
      return isDark ? "/logo/gdg_logo_black.png" : "/logo/gdg_logo.png";
    }
    return item.logoSrc;
  };

  // Accordion: clicking an item opens it and closes all others
  const toggleExpand = (id: string) => {
    setExpandedMap((prev) => ({
      [id]: !prev[id],
    }));
  };

  // Baseline timeline height: Start-to-finish length aligns cleanly with Education
  // Each role has min-h-[80px] and shrink-0 so circular logos (w-16 h-16 = 64px) can NEVER overlap!
  const TIMELINE_HEIGHT = 480;

  return (
    <section
      id="experiences"
      className="max-w-[1280px] mx-auto px-4 md:px-8 pt-15 pb-40 flex flex-col justify-center scroll-mt-0"
      style={{ minHeight: "calc(100vh - 112px)", backgroundColor: "var(--bg)" }}
    >
      {/* ↓ ADJUST GAP HERE: gap-14 controls spacing between Experience and Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        {/* ── Left Column: Experience Activity Timeline (8 cols) ── */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Header row aligned with Education header */}
          <div className="h-10 flex items-center">
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
              Experience
            </h2>
          </div>

          {/* Timeline Wrapper — Baseline height matches Education, items have min-h to prevent logo collision */}
          {/* ↓ Adjust TIMELINE_HEIGHT above to change the baseline length of the line */}
          <div
            className="relative pl-12 flex flex-col justify-between border-l-2 ml-7 mt-10 transition-all duration-300"
            style={{
              minHeight: TIMELINE_HEIGHT,
              borderColor: "var(--border)",
            }}
          >
            {EXPERIENCES_DATA.map((item) => {
              const isExpanded = !!expandedMap[item.id];
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col justify-start shrink-0 min-h-[80px] transition-all duration-300"
                >
                  {/* Header Row: Centered with Logo and text */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="relative min-h-[80px] flex items-center justify-between gap-4 cursor-pointer select-none py-1"
                  >
                    {/* Timeline Node Icon (Logo in Circle) — centered to the text row */}
                    {/* w-16 h-16 (64px). Because header is min-h-[80px] and shrink-0, logos will NEVER touch or overlap! */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      className="absolute -left-[80px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center border-2 shadow-sm cursor-pointer hover:opacity-80 shrink-0 overflow-hidden"
                      style={{
                        backgroundColor: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--text)",
                        transition: "opacity 0.15s ease",
                      }}
                      title={`Click to ${isExpanded ? "collapse" : "expand"} ${item.company}`}
                    >
                      {item.logoType === "img" && item.logoSrc ? (
                        <img src={getLogoSrc(item)} alt={item.company} className="w-full h-full object-cover" />
                      ) : (
                        <span className="font-extrabold text-base tracking-wider" style={{ color: "var(--text)" }}>
                          {item.logoText}
                        </span>
                      )}
                    </button>

                    <div className="flex items-center gap-6 md:gap-8 flex-1 min-w-0">
                      {/* Date — fixed width so all dates align */}
                      <span className="text-sm md:text-base font-medium shrink-0 w-48 md:w-52" style={{ color: "var(--muted)" }}>
                        {item.date}
                      </span>

                      {/* Role Title */}
                      <h3 className="text-base md:text-lg font-bold truncate" style={{ color: "var(--text)" }}>
                        {item.role}
                      </h3>
                    </div>

                    {/* Company + expand icon (fixed width column so all align) */}
                    <div className="flex items-center justify-between gap-3 shrink-0 w-44 md:w-48">
                      <span className="text-sm md:text-base font-semibold" style={{ color: "var(--text)" }}>
                        {item.company}
                      </span>
                      <span style={{ color: "var(--muted)" }}>
                        {isExpanded ? <FoldIcon size={16} /> : <UnfoldIcon size={16} />}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Details — Side-by-side: Description on Left, Clean Label on Right */}
                  {isExpanded && (
                    <div className="flex flex-col md:flex-row items-start justify-between gap-6 pt-1.5 pb-2 pl-1 w-full">
                      {/* Left: Description Bullets */}
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        {item.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span style={{ color: "var(--muted)" }} className="shrink-0 mt-1">
                              <RepoIcon size={16} />
                            </span>
                            <p className="text-sm md:text-base leading-relaxed text-justify" style={{ color: "var(--text)", textAlign: "justify" }}>
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Right: Dot + Type label (no textbox border/bg), right-aligned with the collapse SVG */}
                      <div className="flex items-center justify-end gap-2 shrink-0 self-start mt-1 w-44 md:w-48">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.sideColor }}
                        />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--text)" }}>
                          {item.sideType}
                        </span>
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
            <div className="h-10 flex items-center justify-between">
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
              {/* Card 1: Tertiary Education (UP Manila) */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm font-medium" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center gap-2">
                    <GraphIcon size={16} />
                    <span>Tertiary Education</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* ↓ ADJUST EDUCATION AVATAR SIZE HERE: w-10 h-10 */}
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2" style={{ borderColor: "var(--border)" }}>
                      <img
                        src={isDark ? "/logo/tertiary_black.png" : "/logo/tertiary_red.png"}
                        alt="UP Manila"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-lg md:text-xl truncate" style={{ color: "var(--text)" }} title="University of the Philippines Manila">
                      UP Manila
                    </span>
                  </div>

                  {/* Star Button matching Image 2 */}
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-lg border-2 cursor-pointer shrink-0 transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    <StarIcon size={14} />
                    <span>Star</span>
                  </button>
                </div>

                <p className="text-sm leading-relaxed font-medium text-justify" style={{ color: "var(--muted)", textAlign: "justify" }}>
                  · University Scholar - AY 2024-2026 <br /> · GWA - 1.2007
                </p>

                <div className="flex items-center gap-5 text-sm font-medium pt-1" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3178c6" }} />
                    BS Computer Science
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <StarIcon size={14} />
                    2024-2028
                  </span>
                </div>
              </div>

              {/* Card 2: Secondary Education */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm font-medium" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center gap-2">
                    <GraphIcon size={16} />
                    <span>Secondary Education</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* ↓ ADJUST EDUCATION AVATAR SIZE HERE: w-10 h-10 */}
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2" style={{ borderColor: "var(--border)" }}>
                      <img
                        src={isDark ? "/logo/secondary_black.png" : "/logo/secondary_red.png"}
                        alt="Las Piñas NHS"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-lg md:text-xl truncate" style={{ color: "var(--text)" }} title="Las Piñas National High School">
                      Las Piñas NHS
                    </span>
                  </div>

                  {/* Star Button matching Image 2 */}
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-lg border-2 cursor-pointer shrink-0 transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    <StarIcon size={14} />
                    <span>Star</span>
                  </button>
                </div>

                <div className="text-sm leading-relaxed flex flex-col gap-2 font-medium text-justify" style={{ color: "var(--muted)", textAlign: "justify" }}>
                  <div>
                    <span className="font-bold" style={{ color: "var(--text)" }}>
                      SHS (STEM Strand) - AY 2022 - 2024
                    </span>
                    <p style={{ textAlign: "justify" }}>
                      · Class Valedictorian <br />
                      · With Highest Honors <br />
                      · 5 research competions
                    </p>
                  </div>
                  <div>
                    <span className="font-bold" style={{ color: "var(--text)" }}>
                      JHS (STEM Program) - AY 2018 - 2022
                    </span>
                    <p style={{ textAlign: "justify" }}>
                      With High Honors
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-sm font-medium pt-1" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#74283c" }} />
                    STEM Strand
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <StarIcon size={14} />
                    2018-2024
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
