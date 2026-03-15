import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import OwnerVideo from "@/components/OwnerVideo";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookingProvider from "@/components/BookingProvider";

export default function Home() {
  return (
    <BookingProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <FeaturedPortfolio />
        <OwnerVideo />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </BookingProvider>
  );
}
