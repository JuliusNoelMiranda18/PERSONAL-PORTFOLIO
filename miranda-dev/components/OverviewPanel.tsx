"use client";
import React from "react";
import {
  SmileyIcon,
  PeopleIcon,
  OrganizationIcon,
  MailIcon,
  PencilIcon,
} from "@primer/octicons-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function OverviewPanel() {
  return (
    <div
      className="max-w-[1280px] mx-auto px-4 md:px-8 py-8"
      style={{ backgroundColor: "var(--bg)", minHeight: "calc(100vh - 112px)" }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* ── Left Column: Profile Sidebar ── */}
        <div className="w-full md:w-[296px] shrink-0">

          {/* Profile Picture — fills full sidebar width, circular */}
          <div className="relative" style={{ width: "100%", aspectRatio: "1 / 1" }}>
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: "var(--surface)",
                border: "2px solid var(--border)",
                boxSizing: "border-box",
              }}
            />
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

          {/* Edit Profile Button */}
          <div className="mt-4">
            <button
              type="button"
              className="w-full font-medium py-[5px] px-4 rounded-md border text-center text-sm cursor-pointer"
              style={{
                color: "var(--button-text)",
                backgroundColor: "var(--button-bg)",
                borderColor: "var(--border)",
              }}
            >
              Edit profile
            </button>
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
            {/* Organization */}
            <div className="flex items-center gap-2.5">
              <OrganizationIcon size={16} fill="var(--muted)" className="shrink-0" />
              <span className="truncate" style={{ color: "var(--text)" }}>
                University of the Philippines - Manila
              </span>
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

            {/* Facebook */}
            <div className="flex items-center gap-2.5">
              <FaFacebook size={16} className="shrink-0" style={{ color: "var(--muted)" }} />
              <a
                href="https://facebook.com/joule.used"
                target="_blank"
                rel="noreferrer"
                className="truncate"
                style={{ color: "var(--text)" }}
              >
                joule.used
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-2.5">
              <FaInstagram size={16} className="shrink-0" style={{ color: "var(--muted)" }} />
              <a
                href="https://instagram.com/jouleused.mrnd"
                target="_blank"
                rel="noreferrer"
                className="truncate"
                style={{ color: "var(--text)" }}
              >
                jouleused.mrnd
              </a>
            </div>
          </div>
        </div>

        {/* ── Right Column: README (Blank) ── */}
        <div className="flex-1 w-full">
          <div className="rounded-md overflow-hidden" style={{ border: "1px solid var(--border)" }}>
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

            {/* README Body — blank as requested */}
            <div
              className="min-h-[450px]"
              style={{ backgroundColor: "var(--bg)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
