export default function HeroTitle() {
  return (
    <h1 className="text-center mb-6 md:mb-10 max-w-6xl mx-auto px-4">
      <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-2 md:mb-3">
        <span className="text-white">Votre </span>
        <span className="text-[#32d689]">site </span>
        <span className="text-white">doit </span>
        <span className="text-[#32d689]">donner envie </span>
        <span className="text-white">de</span>
      </span>

      <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-2 md:mb-3">
        <span className="text-[#32d689]">rester</span>
        <span className="text-white">, pas de </span>
        <span className="relative inline-block">
          <span
            className="absolute top-1/2 left-0 right-0 bg-black h-1.5 z-20"
            style={{ transform: 'translateY(-50%)' }}
            aria-hidden="true"
          />
          <span className="relative z-10">
            <span className="text-[#32d689]">revenir </span>
            <span className="text-white">en </span>
          </span>
        </span>
      </span>

      <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
        <span className="relative inline-block">
          <span
            className="absolute top-1/2 left-0 right-0 bg-black h-1.5 z-20"
            style={{ transform: 'translateY(-50%)' }}
            aria-hidden="true"
          />
          <span className="text-[#32d689] relative z-10">arrière.</span>
        </span>
      </span>
    </h1>
  );
}