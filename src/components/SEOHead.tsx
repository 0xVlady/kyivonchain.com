
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'KYIV.ONCHAIN - Ukraine\'s Solana-Powered Web3 Community Hub',
  description = 'Ukraine\'s permanent home for Web3 builders. Powered by Solana, built by Acropolis, backed by Kumeka. Join our gamified community hub in Kyiv.',
  image = 'https://kyivonchain.com/lovable-uploads/50ada35c-1a7f-452e-85d6-33e5a850a6c2.png',
  url = 'https://kyivonchain.com',
  type = 'website',
  keywords = 'Web3, Blockchain, Solana, Ukraine, Kyiv, Community, Developers, Cryptocurrency, DeFi, NFT',
  canonical
}) => {
  const canonicalUrl = canonical || url;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KYIV.ONCHAIN" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@kyivonchain" />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://passtnsttaxaaauovxnz.supabase.co" />
    </Helmet>
  );
};

export default SEOHead;
