"use client";

import { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import ArtistSection from "@/components/ArtistSection";
import LatestWorkSection from "@/components/LatestWorkSection";
import ArtForSaleSection from "@/components/ArtForSaleSection";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f5f5f5] text-black">
      {/* 1. Left Vertical Sidebar Navigation */}
      <SidebarNav />

      {/* 2. Main Sections Container (Padded left on desktop for vertical sidebar) */}
      <main className="md:pl-16 lg:pl-20 pt-14 md:pt-0 w-full min-h-screen flex flex-col">
        {/* Section 1: [ THE ARTIST ] */}
        <ArtistSection onOpenContact={() => setContactOpen(true)} />

        {/* Section 2: [ LATEST WORK ] */}
        <LatestWorkSection onOpenContact={() => setContactOpen(true)} />

        {/* Section 3: [ ART FOR SALE ] */}
        <ArtForSaleSection onOpenContact={() => setContactOpen(true)} />
      </main>

      {/* 3. Global Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
