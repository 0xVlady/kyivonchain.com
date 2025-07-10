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
    <div className={className} style={{ width: size, height: size }}>
      {/* Placeholder for chestnut logo */}
    </div>
  );
};
export default ChestnutLogo;