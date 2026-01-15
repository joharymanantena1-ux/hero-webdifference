import Image from 'next/image';
import CTAButton from './CTAButton';

export default function CTASection() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center mb-8 relative px-4">
      {/* Bouton Prendre RDV avec annotation */}
      <div className="relative">
        <CTAButton variant="primary" icon="calendar">
          <span className="text-black">Prendre RDV</span>
        </CTAButton>
        
        {/* Annotation "Un ptit click?" */}
        <div className="cta-annotation hidden md:block absolute -bottom-20 -left-12 md:-left-16 z-10 animate-float">
          <Image 
            src="/3.png" 
            alt="Un ptit click?" 
            width={180} 
            height={120}
            className="w-[140px] md:w-[180px] h-auto"
            priority
          />
        </div>
      </div>

      {/* Bouton Découvrir nos projets */}
      <CTAButton variant="secondary" icon="arrow">
        <span className="text-[#32d689]">Découvrir nos projets</span>
      </CTAButton>
    </div>
  );
}