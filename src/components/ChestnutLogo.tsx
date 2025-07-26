import React from 'react';

interface ChestnutLogoProps {
  size?: number;
  className?: string;
}

const ChestnutLogo: React.FC<ChestnutLogoProps> = ({
  size = 32,
  className = ""
}) => {
  return (
    <img 
      src="/lovable-uploads/50ada35c-1a7f-452e-85d6-33e5a850a6c2.png"
      alt="Solus Logo"
      className={className}
      style={{ width: size, height: size }}
    />
  );
};
export default ChestnutLogo;