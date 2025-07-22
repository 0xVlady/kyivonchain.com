
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'KYIV.ONCHAIN - Web3 Hub in Kyiv',
  description = 'Join Ukraine\'s premier Web3 community hub. Connect with builders, attend events, and shape the future of blockchain in Kyiv.',
  image = '/lovable-uploads/50ada35c-1a7f-452e-85d6-33e5a850a6c2.png',
  url = 'https://kyivonchain.com',
  type = 'website'
}) => {
  // Ensure image URL is absolute for social media sharing
  const absoluteImageUrl = image.startsWith('http') ? image : `https://kyivonchain.com${image}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KYIV.ONCHAIN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;
