import React from 'react';

const CustomTextSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          Your custom text goes here. This is a placeholder for editable content that can be customized 
          to tell your story, share your mission, or communicate any important message to your community.
        </p>
      </div>
    </section>
  );
};

export default CustomTextSection;