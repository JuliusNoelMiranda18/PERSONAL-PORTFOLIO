import HeaderNav from "@/components/HeaderNav";
import OverviewPanel from "@/components/OverviewPanel";
import ExperiencesSection from "@/components/ExperiencesSection";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <ScrollToTop />
      <HeaderNav />
      {/* Overview fills the remaining viewport height below the header */}
      <div id="overview-wrapper" style={{ minHeight: "calc(100vh - 112px)", backgroundColor: "var(--bg)" }}>
        <OverviewPanel />
      </div>
      <ExperiencesSection />
    </main>
  );
}
