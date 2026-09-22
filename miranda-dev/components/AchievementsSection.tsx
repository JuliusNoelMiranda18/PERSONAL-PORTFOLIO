"use client";
import React, { useState, useEffect } from "react";
import { RepoIcon, StarIcon, RepoForkedIcon } from "@primer/octicons-react";

interface RepositoryPin {
  id: string;
  name: string;
  url: string;
  visibility: "Public" | "Private";
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  forks?: number;
}

const PINNED_REPOSITORIES: RepositoryPin[] = [
  {
    id: "juliusnoelmiranda18",
    name: "JuliusNoelMiranda18",
    url: "https://github.com/JuliusNoelMiranda18/JuliusNoelMiranda18",
    visibility: "Public",
    description: "Config files and personal profile readme for my GitHub developer account.",
    language: "Markdown",
    languageColor: "#083fa1",
  },
  {
    id: "dsa-mini-exercises",
    name: "Data-Structure-and-Algorithm-Mini-Exercises-",
    url: "https://github.com/JuliusNoelMiranda18/Data-Structure-and-Algorithm-Mini-Exercises-",
    visibility: "Public",
    description:
      "This repository contains my laboratory exercises for CS123 (Data Structures). It includes hands-on implementations of fundamental data structures such as arrays, queues, linked lists, trees, and gr...",
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    id: "saliksi",
    name: "SaLeksi",
    url: "https://github.com/JuliusNoelMiranda18/SaLeksi",
    visibility: "Public",
    description:
      "An AI-powered academic research platform for Filipino scholars — from source discovery and citation generation to AI-assisted writing and thesis defense practice, built on Philippine academic datab...",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    id: "aralkada",
    name: "AralKada",
    url: "https://github.com/JuliusNoelMiranda18/AralKada",
    visibility: "Public",
    description:
      "Interactive collaborative study room app designed for peer-to-peer learning and student productivity.",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    id: "sipsip",
    name: "SIPSIP",
    url: "https://github.com/JuliusNoelMiranda18/SIPSIP",
    visibility: "Public",
    description:
      "SipShop is a web application that serves as a directory and storefront for beverage products. It provides a browsing and shopping interface for items such as smoothies, cold brews, milk teas, and k...",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    id: "lab7",
    name: "lab7",
    url: "https://github.com/JuliusNoelMiranda18/lab7",
    visibility: "Public",
    description:
      "Advanced algorithmic implementations and data structure laboratory coursework.",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
];

/**
 * Achievements section reproducing GitHub's Popular Repositories pinned grid (2 rows x 3 columns).
 */
export default function AchievementsSection() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className="max-w-[1280px] mx-auto px-4 md:px-8 py-10"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-base font-semibold"
          style={{ color: "var(--text)" }}
        >
          Popular repositories
        </h2>
        <button
          type="button"
          className="text-xs font-normal hover:underline cursor-pointer bg-transparent border-0 p-0"
          style={{ color: isDark ? "#4493f8" : "#0969da" }}
        >
          Customize your pins
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PINNED_REPOSITORIES.map((repo) => (
          <div
            key={repo.id}
            className="rounded-md p-4 flex flex-col justify-between transition-colors"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              minHeight: 140,
            }}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <RepoIcon
                    size={16}
                    className="shrink-0"
                    fill="var(--muted)"
                  />
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-sm truncate hover:underline"
                    style={{ color: isDark ? "#4493f8" : "#0969da" }}
                    title={repo.name}
                  >
                    {repo.name}
                  </a>
                </div>
                <span
                  className="px-2 py-0.5 text-xs rounded-full border font-normal shrink-0"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                    fontSize: 12,
                  }}
                >
                  {repo.visibility}
                </span>
              </div>

              {repo.description && (
                <p
                  className="text-xs mt-2.5 mb-3 line-clamp-3 leading-relaxed"
                  style={{ color: "var(--muted)", fontSize: 12 }}
                >
                  {repo.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs mt-auto pt-2" style={{ color: "var(--muted)", fontSize: 12 }}>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full inline-block shrink-0"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <span>{repo.language}</span>
              </div>
              {repo.stars !== undefined && repo.stars > 0 && (
                <div className="flex items-center gap-1">
                  <StarIcon size={14} fill="var(--muted)" />
                  <span>{repo.stars}</span>
                </div>
              )}
              {repo.forks !== undefined && repo.forks > 0 && (
                <div className="flex items-center gap-1">
                  <RepoForkedIcon size={14} fill="var(--muted)" />
                  <span>{repo.forks}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
