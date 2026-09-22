import HeaderNav from "@/components/HeaderNav";
import OverviewPanel from "@/components/OverviewPanel";
import ExperiencesSection from "@/components/ExperiencesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Home page component rendering the portfolio layout and main sections.
 */
export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <ScrollToTop />
      <HeaderNav />
      <div id="overview-wrapper" style={{ minHeight: "calc(100vh - 112px)", backgroundColor: "var(--bg)" }}>
        <OverviewPanel />
      </div>
      <ExperiencesSection />
      <AchievementsSection />
    </main>
  );
}
