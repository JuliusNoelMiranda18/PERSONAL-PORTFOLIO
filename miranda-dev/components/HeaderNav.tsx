"use client";
import React, { useState, useEffect } from "react";
import {
  MarkGithubIcon,
  ThreeBarsIcon,
  BookIcon,
  GlobeIcon,
  TableIcon,
  StarIcon,
  AccessibilityIcon,
  MoonIcon,
  MuteIcon,
  PersonIcon,
} from "@primer/octicons-react";
import { createClient } from "@/utils/supabase/client";

// ── CHANGE THEME TRANSITION DURATION HERE (in milliseconds) ───────────────────
// To make the transition faster or slower, change this value (e.g. 500 = 0.5s, 800 = 0.8s, 1000 = 1.0s).
// Also update `--theme-transition-time` in app/globals.css to match (e.g. 0.5s).
const TRANSITION_DURATION_MS = 500;
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_IMAGES = [
  "/viewers/gh1.jpeg",
  "/viewers/gh2.jpeg",
  "/viewers/gh3.jpeg",
  "/viewers/gh4.jpeg",
  "/viewers/gh5.jpeg",
];

export default function HeaderNav() {
  const [viewerCount, setViewerCount] = useState<number>(2);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // ── Synchronized Radial Wave & Simultaneous Color Transition ──
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const nextDark = !isDarkMode;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Instantly switch theme class so all component colors transition simultaneously
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Calculate maximum radius to screen corners
    const maxRadius = Math.max(
      Math.hypot(x, y),
      Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y),
      Math.hypot(window.innerWidth - x, window.innerHeight - y)
    );
    const endRadius = maxRadius * 1.1;

    // Create translucent wave ring radiating from dark mode button
    const wave = document.createElement("div");
    wave.style.position = "fixed";
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wave.style.width = "0px";
    wave.style.height = "0px";
    wave.style.borderRadius = "50%";
    wave.style.transform = "translate(-50%, -50%)";
    wave.style.backgroundColor = nextDark ? "rgba(13, 17, 23, 0.35)" : "rgba(245, 235, 208, 0.35)";
    wave.style.border = `2px solid ${nextDark ? "#30363d" : "#7f011f"}`;
    wave.style.boxShadow = `0 0 30px ${nextDark ? "rgba(48, 54, 61, 0.4)" : "rgba(127, 1, 31, 0.25)"}`;
    wave.style.zIndex = "9999";
    wave.style.pointerEvents = "none";
    wave.style.transition = `width ${TRANSITION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), height ${TRANSITION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${TRANSITION_DURATION_MS}ms ease`;

    document.body.appendChild(wave);

    requestAnimationFrame(() => {
      wave.style.width = `${endRadius * 2}px`;
      wave.style.height = `${endRadius * 2}px`;
      wave.style.opacity = "0";
    });

    setTimeout(() => {
      if (wave.parentNode) {
        wave.parentNode.removeChild(wave);
      }
    }, TRANSITION_DURATION_MS);
  };

  // ── Supabase Realtime Presence Tracking ──
  useEffect(() => {
    if (typeof window === "undefined") return;

    const supabase = createClient();
    const sessionId = crypto.randomUUID();

    const channel = supabase.channel("site-viewers", {
      config: {
        presence: {
          key: sessionId,
        },
      },
    });

    const syncPresenceState = () => {
      const state = channel.presenceState();
      const count = Object.keys(state).length;
      setViewerCount(Math.max(1, count));
    };

    channel
      .on("presence", { event: "sync" }, syncPresenceState)
      .on("presence", { event: "join" }, syncPresenceState)
      .on("presence", { event: "leave" }, syncPresenceState)
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            id: sessionId,
            joined_at: Date.now(),
          });
        }
      });

    return () => {
      channel.untrack();
      supabase.removeChannel(channel);
    };
  }, []);

  const visibleAvatarsCount = Math.min(viewerCount, 5);
  const isOverFive = viewerCount > 5;

  return (
    <header style={{ backgroundColor: "var(--bg)" }}>
      {/* ── Top Bar ── */}
      <div
        className="flex items-center justify-between px-4 md:px-8"
        style={{ height: 64 }}
      >
        {/* Left: Hamburger + GitHub Logo + Username */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation"
            className="flex items-center justify-center rounded-lg cursor-pointer"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
          >
            <ThreeBarsIcon size={18} />
          </button>

          <MarkGithubIcon size={32} fill="var(--border)" />

          <span
            className="font-semibold select-none"
            style={{ fontSize: 16, color: "var(--text)" }}
          >
            JoulesMirandaDev
          </span>
        </div>

        {/* Right: Four Rounded Box Containers in specified order */}
        {/* Slot 1: Viewer Count | Slot 2: Dark Mode | Slot 3: Sounds | Slot 4: Profile */}
        <div className="flex items-center gap-2.5">
          {/* Slot 1: Viewer Count (Supabase Realtime Presence) */}
          <div
            className="flex items-center gap-2 px-3 rounded-[14px] select-none"
            style={{
              height: 38,
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--border)",
              color: "var(--text)",
            }}
          >
            {/* Stacked Overlapping Circular Avatars */}
            <div className="flex items-center">
              {AVATAR_IMAGES.slice(0, visibleAvatarsCount).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Viewer ${idx + 1}`}
                  className="w-6 h-6 rounded-full object-cover shrink-0"
                  style={{
                    border: "1.5px solid var(--border)",
                    backgroundColor: "var(--bg)",
                    marginLeft: idx === 0 ? 0 : -8,
                  }}
                />
              ))}

              {/* Plus Badge if viewerCount > 5 */}
              {isOverFive && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 -ml-2 select-none"
                  style={{
                    backgroundColor: "var(--border)",
                    color: "var(--accent)",
                    border: "1.5px solid var(--border)",
                  }}
                >
                  +
                </div>
              )}
            </div>

            {/* Viewer Count Text */}
            <span
              className="text-sm font-semibold whitespace-nowrap ml-1"
              style={{ color: "var(--text)" }}
            >
              {viewerCount} {viewerCount === 1 ? "viewer" : "viewers"}
            </span>
          </div>

          {/* Slot 2: Dark Mode (Synchronized Spreading Radial Wave) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="flex items-center justify-center rounded-[10px] cursor-pointer"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--border)",
              color: "var(--muted)",
            }}
            title="Toggle Dark / Light Mode"
          >
            <MoonIcon size={18} fill="var(--border)" />
          </button>

          {/* Slot 3: Sounds (Static) */}
          <div
            className="flex items-center justify-center rounded-[10px]"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--border)",
              color: "var(--muted)",
            }}
            title="Sounds (Static)"
          >
            <MuteIcon size={18} fill="var(--border)" />
          </div>

          {/* Slot 4: Profile (Static) */}
          <div
            className="flex items-center justify-center rounded-[10px]"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--border)",
              color: "var(--muted)",
            }}
            title="Profile (Static)"
          >
            <PersonIcon size={18} fill="var(--border)" />
          </div>
        </div>
      </div>

      {/* ── Sub-nav / Tabs ── */}
      <div
        className="px-4 md:px-8 flex items-end overflow-x-auto"
        style={{
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Overview — active */}
        <a
          href="#overview"
          className="flex items-center gap-2 px-3 pt-3 pb-2 whitespace-nowrap font-semibold"
          style={{
            fontSize: 14,
            color: "var(--text)",
            borderBottom: "2px solid var(--border)",
          }}
        >
          <BookIcon size={16} fill="var(--border)" />
          Overview
        </a>

        {/* Experiences */}
        <a
          href="#experiences"
          className="flex items-center gap-2 px-3 pt-3 pb-2 whitespace-nowrap"
          style={{
            fontSize: 14,
            color: "var(--muted)",
            borderBottom: "2px solid transparent",
          }}
        >
          <GlobeIcon size={16} fill="var(--muted)" />
          Experiences
        </a>

        {/* Projects */}
        <a
          href="#projects"
          className="flex items-center gap-2 px-3 pt-3 pb-2 whitespace-nowrap"
          style={{
            fontSize: 14,
            color: "var(--muted)",
            borderBottom: "2px solid transparent",
          }}
        >
          <TableIcon size={16} fill="var(--muted)" />
          Projects
        </a>

        {/* Achievements */}
        <a
          href="#achievements"
          className="flex items-center gap-2 px-3 pt-3 pb-2 whitespace-nowrap"
          style={{
            fontSize: 14,
            color: "var(--muted)",
            borderBottom: "2px solid transparent",
          }}
        >
          <StarIcon size={16} fill="var(--muted)" />
          Achievements
        </a>

        {/* Connect */}
        <a
          href="#connect"
          className="flex items-center gap-2 px-3 pt-3 pb-2 whitespace-nowrap"
          style={{
            fontSize: 14,
            color: "var(--muted)",
            borderBottom: "2px solid transparent",
          }}
        >
          <AccessibilityIcon size={16} fill="var(--muted)" />
          Connect
        </a>
      </div>
    </header>
  );
}
