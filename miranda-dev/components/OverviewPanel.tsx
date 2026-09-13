"use client";
import React from "react";
import {
  SmileyIcon,
  PeopleIcon,
  MailIcon,
  PencilIcon,
} from "@primer/octicons-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function OverviewPanel() {
  return (
    <div
      className="max-w-[1280px] mx-auto px-4 md:px-8 py-18"
      style={{ backgroundColor: "var(--bg)", minHeight: "calc(100vh - 112px)" }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* ── Left Column: Profile Sidebar ── */}
        <div className="w-full md:w-[296px] shrink-0 flex flex-col justify-between">
          <div>
            {/* Profile Picture — fills full sidebar width, circular */}
            <div className="relative" style={{ width: "100%", aspectRatio: "1 / 1" }}>
              <div
                className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "2px solid var(--border)",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Julius Noel Miranda"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Show fallback icon if image file isn't in public folder yet
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }
                  }}
                />
                <div
                  className="items-center justify-center text-4xl font-bold"
                  style={{ display: "none", color: "var(--muted)" }}
                >
                  JNM
                </div>
              </div>
              {/* Smiley status button — overlapping bottom-right */}
              <button
                type="button"
                aria-label="Set status"
                className="absolute flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  width: 36,
                  height: 36,
                  bottom: "4%",
                  right: "4%",
                  backgroundColor: "var(--surface)",
                  border: "2px solid var(--bg)",
                  boxShadow: "0 0 0 1px var(--border)",
                }}
              >
                <SmileyIcon size={18} fill="var(--muted)" />
              </button>
            </div>

            {/* Display Name & Username */}
            <div className="mt-4">
              <h1
                className="font-semibold leading-tight"
                style={{ fontSize: 26, color: "var(--text)" }}
              >
                Julius Noel Miranda
              </h1>
              <p
                className="font-light leading-snug"
                style={{ fontSize: 20, color: "var(--muted)" }}
              >
                AI Backend Engineer Intern
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="block w-full font-medium py-[5px] px-4 rounded-md border text-center text-sm cursor-pointer"
                style={{
                  color: "var(--button-text)",
                  backgroundColor: "var(--button-bg)",
                  borderColor: "var(--border)",
                }}
              >
                Download resume
              </a>
            </div>

            {/* Followers & Following */}
            <div
              className="mt-4 flex items-center gap-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <PeopleIcon size={16} fill="var(--muted)" />
              <span>
                <span className="font-semibold" style={{ color: "var(--text)" }}>
                  3
                </span>{" "}
                followers ·{" "}
                <span className="font-semibold" style={{ color: "var(--text)" }}>
                  1
                </span>{" "}
                following
              </span>
            </div>

            {/* Divider */}
            <div className="my-4" style={{ borderTop: "1px solid var(--border)" }} />

            {/* Metadata Links */}
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text)" }}>
              {/* GitHub */}
              <div className="flex items-center gap-2.5">
                <FaGithub size={16} className="shrink-0" style={{ color: "var(--muted)" }} />
                <a
                  href="https://github.com/JuliusNoelMiranda18"
                  target="_blank"
                  rel="noreferrer"
                  className="truncate"
                  style={{ color: "var(--text)" }}
                >
                  JuliusNoelMiranda18
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <MailIcon size={16} fill="var(--muted)" className="shrink-0" />
                <a
                  href="mailto:jvmiranda@up.edu.ph"
                  className="truncate"
                  style={{ color: "var(--text)" }}
                >
                  jvmiranda@up.edu.ph
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-2.5">
                <FaLinkedin size={16} className="shrink-0" style={{ color: "var(--muted)" }} />
                <a
                  href="https://linkedin.com/in/julius-noel-miranda-b96a9832a"
                  target="_blank"
                  rel="noreferrer"
                  className="truncate"
                  style={{ color: "var(--text)" }}
                >
                  in/julius-noel-miranda-b96a9832a
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: README ── */}
        <div className="flex-1 w-full flex flex-col">
          <div className="rounded-md overflow-hidden flex-1 flex flex-col justify-between" style={{ border: "1px solid var(--border)" }}>
            <div>
              {/* README Header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)" }}
              >
                <span className="font-mono text-xs font-medium" style={{ color: "var(--text)" }}>
                  JuliusNoelMiranda18 / README.md
                </span>
                <button
                  type="button"
                  aria-label="Edit README"
                  className="cursor-pointer"
                  style={{ color: "var(--muted)" }}
                >
                  <PencilIcon size={16} fill="var(--muted)" />
                </button>
              </div>

              {/* README Body */}
              <div
                className="px-6 pt-10 pb-6"
                style={{ backgroundColor: "var(--bg)" }}
              >
                {/* Greeting */}
                <h2
                  style={{
                    fontSize: 50,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 10,
                    marginTop: 0,
                  }}
                >
                  Hi, I&apos;m Joules
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: 25,
                    lineHeight: 1.6,
                    color: "var(--text)",
                    marginTop: 0,
                    marginBottom: 20,
                    textAlign: "justify",
                  }}
                >
                  Engineering AI-driven solutions where efficiency meets robust
                  architecture. Academically driven, relentless in hackathons, and
                  unafraid to push the boundaries of where AI can go.
                </p>

                {/* Quote */}
                <p
                  style={{
                    fontSize: 25,
                    fontStyle: "italic",
                    color: "var(--muted)",
                    marginTop: 20,
                    marginBottom: 36,
                  }}
                >
                  &ldquo;Always have the capacity to do work&rdquo;
                </p>
              </div>
            </div>

            {/* Stats Row — pinned at bottom to match alignment */}
            <div className="px-6 pb-10" style={{ backgroundColor: "var(--bg)" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                {[
                  { value: "2yrs+", label: "EXPERIENCE" },
                  { value: "5x", label: "HACKATHONS" },
                  { value: "10+", label: "PROJECTS" },
                ].map((stat, idx) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "24px 28px",
                      borderRight:
                        idx < 2 ? "1px solid var(--border)" : undefined,
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 15,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        color: "var(--muted)",
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
