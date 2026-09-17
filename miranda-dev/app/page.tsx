import HeaderNav from "@/components/HeaderNav";
import OverviewPanel from "@/components/OverviewPanel";
import ExperiencesSection from "@/components/ExperiencesSection";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <HeaderNav />
      <OverviewPanel />
      <ExperiencesSection />
    </main>
  );
}
