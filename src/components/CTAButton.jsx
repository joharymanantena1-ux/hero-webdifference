import { FaCalendar, FaArrowDown } from 'react-icons/fa';

export default function CTAButton({ variant = 'primary', children, icon = 'calendar', onClick }) {
  const isPrimary = variant === 'primary';
  
  const baseClasses = "cta-button px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center gap-2 md:gap-3";
  const primaryClasses = "cta-button-primary bg-[#32d689] text-black hover:bg-[#2bc578] shadow-lg";
  const secondaryClasses = "cta-button-secondary bg-transparent border-2 border-[#32d689] text-[#32d689] hover:bg-[#32d689]/10";
  
  const iconComponent = icon === 'calendar' ? (
    <FaCalendar className={`cta-button-icon text-lg md:text-xl ${isPrimary ? 'text-black' : 'text-[#32d689]'}`} />
  ) : icon === 'arrow' ? (
    <FaArrowDown className={`cta-button-icon text-lg md:text-xl ${isPrimary ? 'text-black' : 'text-[#32d689]'}`} />
  ) : null;

  return (
    <button 
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
      onClick={onClick}
    >
      {isPrimary && iconComponent}
      <span>{children}</span>
      {!isPrimary && iconComponent}
    </button>
  );
}