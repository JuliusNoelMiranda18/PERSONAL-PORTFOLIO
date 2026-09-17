"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MarkGithubIcon,
  ThreeBarsIcon,
  BookIcon,
  GlobeIcon,
  TableIcon,
  StarIcon,
  AccessibilityIcon,
  MoonIcon,
  SunIcon,
  MuteIcon,
  UnmuteIcon,
} from "@primer/octicons-react";
import { createClient } from "@/utils/supabase/client";


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
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // ── Web Audio: click sound ──
  const playClick = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(900, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  };

  // ── Web Audio: keystroke sound ──
  const playKey = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const bufSize = Math.floor(ctx.sampleRate * 0.04);
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    src.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  };

  // ── Keydown listener for typing sounds ──
  useEffect(() => {
    if (!isSoundOn) return;
    const onKey = () => playKey();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSoundOn]);

  // ── Toggle sound on/off ──
  const toggleSound = () => {
    if (!isSoundOn) {
      // Create AudioContext on first user gesture
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
    }
    setIsSoundOn((prev) => !prev);
  };

  // ── Sync Dark Mode state with html class ──
  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // ── Instant Theme Toggle ──
  const toggleTheme = () => {
    if (isSoundOn) playClick();
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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

          <img
            src={isDarkMode ? "/logo/black_logo.png" : "/logo/red_logo.png"}
            alt="JoulesMiranda logo"
            className="w-8 h-8 object-contain shrink-0"
            style={{
              width: 32,
              height: 32,
              filter: isDarkMode ? "invert(1)" : "none",
            }}
          />

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

          {/* Slot 2: Dark Mode / Light Mode toggle */}
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
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          {/* Slot 3: Sound toggle */}
          <button
            type="button"
            onClick={() => { if (isSoundOn) playClick(); toggleSound(); }}
            aria-label={isSoundOn ? "Mute sounds" : "Unmute sounds"}
            className="flex items-center justify-center rounded-[10px] cursor-pointer"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "var(--surface)",
              border: "1.5px solid var(--border)",
              color: "var(--muted)",
            }}
            title={isSoundOn ? "Mute" : "Unmute"}
          >
            {isSoundOn ? <UnmuteIcon size={18} /> : <MuteIcon size={18} />}
          </button>

          {/* Slot 4: Profile photo (no surrounding box) */}
          <img
            src={isDarkMode ? "/profile/1-dithered.jpg" : "/profile/profile-red/1-dithered.jpg"}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover shrink-0 cursor-pointer"
            title="Profile"
          />
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
        {/* Overview */}
        <a
          href="#overview"
          className="flex items-center gap-2 px-3 pt-3 pb-2 whitespace-nowrap font-semibold"
          style={{
            fontSize: 14,
            color: "var(--text)",
            borderBottom: "2px solid var(--border)",
          }}
        >
          <BookIcon size={16} />
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
          <GlobeIcon size={16} />
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
          <TableIcon size={16} />
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
          <StarIcon size={16} />
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
          <AccessibilityIcon size={16} />
          Connect
        </a>
      </div>
    </header>
  );
}
