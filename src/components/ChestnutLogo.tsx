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
      src="https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Solus%20black.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvU29sdXMgYmxhY2sucG5nIiwiaWF0IjoxNzUyODcxMTI3LCJleHAiOjE5MTA1NTExMjd9.Oesqr37Nn4zc8itcgr1YNRV9fbViVbaFxCS-AqIih5Q"
      alt="Solus Logo"
      className={className}
      style={{ width: size, height: size }}
    />
  );
};
export default ChestnutLogo;