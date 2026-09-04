import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'compact';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Official Provided Brand Logo */}
      <img
        src="https://res.cloudinary.com/fzobzdco/image/upload/v1788550156/LOGO56560.png"
        alt="Benjamín Alexander Pest Control"
        className="h-10 sm:h-11 w-auto object-contain flex-shrink-0"
        referrerPolicy="no-referrer"
      />

      {/* Company Name */}
      <div className="flex flex-col">
        <span
          className={`font-extrabold text-base sm:text-lg leading-tight tracking-tight ${
            isLight ? 'text-white' : 'text-[#1B4332]'
          }`}
        >
          Benjamín Alexander
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-medium leading-none mt-0.5 ${
              isLight ? 'text-[#B7E4C7]' : 'text-[#52796F]'
            }`}
          >
            Pest Control
          </span>
        )}
      </div>
    </div>
  );
};

