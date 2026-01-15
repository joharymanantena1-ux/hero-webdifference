import Image from 'next/image';

export default function SearchBanner() {
  return (
    <div className="search-banner-container">
      <div className="search-banner-pill">
        <div className="flex-shrink-0">
          <Image 
            src="/2.png" 
            alt="Loupe avec symbole différent" 
            width={56} 
            height={56}
            className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300"
          />
        </div>
        <p className="search-banner-text">
          CRÉER UN SITE WEB{' '}
          <span className="relative inline-block">
            <span className="relative z-10">VRAIMENT</span>
            <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-black"></span>
          </span>
          {' '}UNIQUE
        </p>
      </div>
    </div>
  );
}