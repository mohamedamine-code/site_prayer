import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Screenshots } from "./components/Screenshots";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Download } from "./components/Download";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-night-900 text-slate-100 antialiased">
      <a
        href="#top"
        className="sr-only rounded-lg bg-mint-500 px-4 py-2 font-semibold text-night-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Screenshots />
        <Features />
        <HowItWorks />
        <Download />
      </main>

      <Footer />
    </div>
  );
}
