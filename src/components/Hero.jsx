import SearchBanner from './SearchBanner';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import CTASection from './CTASection';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <SearchBanner />
      <HeroTitle />
      <HeroSubtitle />
      <CTASection />
    </section>
  );
}
