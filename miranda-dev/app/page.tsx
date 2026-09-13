import HeaderNav from "@/components/HeaderNav";
import OverviewPanel from "@/components/OverviewPanel";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <HeaderNav />
      <OverviewPanel />
    </main>
  );
}
