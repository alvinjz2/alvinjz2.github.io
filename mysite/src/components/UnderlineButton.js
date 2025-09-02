import React from 'react';

// A reusable button component that provides a smooth, animated underline on hover.
const UnderlineButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        relative 
        inline-block 
        font-light 
        text-slate-700 
        py-2 
        px-4 
        rounded-lg
        transition-all 
        duration-300 
        group 
        focus:outline-none 
        focus:ring-2 
        focus:ring-slate-500 
        focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* This is a pseudo-element that will animate to create the underline effect.
        We've added a group-hover class to trigger the animation.
      */}
      <span
        className="
          absolute 
          bottom-0 
          left-0 
          w-full 
          h-0.5 
          bg-slate-700 
          transform 
          scale-x-0 
          group-hover:scale-x-100 
          transition-transform 
          duration-300 
          ease-out
          origin-left
        "
      ></span>
    </button>
  );
};

export default UnderlineButton;