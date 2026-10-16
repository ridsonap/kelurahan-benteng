import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatistikCarousel from "@/components/StatistikCarousel";
import StatistikChart from "@/components/StatistikChart";
import TentangSection from "@/components/TentangSection";
import APBDSection from "@/components/APBDSection";
import BeritaSection from "@/components/BeritaSection";
import AgendaSection from "@/components/AgendaSection";
import UMKMSection from "@/components/UMKMSection";
import GaleriSection from "@/components/GaleriSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatistikCarousel />
        <StatistikChart />
        <TentangSection />
        <APBDSection />
        <BeritaSection />
        <AgendaSection />
        <UMKMSection />
        <GaleriSection />
      </main>
      <Footer />
    </div>
  );
}
