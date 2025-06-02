const BackgroundGrid = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1920" 
      height="1080" 
      viewBox="0 0 1920 1080" 
      fill="none" 
      className="-z-50 absolute hidden opacity-25 [mask-image:linear-gradient(to_right,white,transparent,transparent,white)] lg:block"
    >
      <g clipPath="url(#clip0_4_5)">
        <rect width="1920" height="1080"></rect>
        {/* Horizontal lines */}
        {Array.from({ length: 22 }, (_, i) => (
          <line 
            key={`h-${i}`}
            y1={49.5 + i * 50} 
            x2="1920" 
            y2={49.5 + i * 50} 
            className="stroke-muted-foreground"
          />
        ))}
        {/* Vertical lines */}
        <g clipPath="url(#clip1_4_5)">
          {Array.from({ length: 39 }, (_, i) => (
            <line 
              key={`v-${i}`}
              x1={49.6133 + i * 50.114} 
              y1="3.99995" 
              x2={49.7268 + i * 50.114} 
              y2="1084" 
              className="stroke-muted-foreground"
            />
          ))}
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4_5">
          <rect width="1920" height="1080" fill="#000000"></rect>
        </clipPath>
        <clipPath id="clip1_4_5">
          <rect width="1920" height="1080" fill="#000000" transform="translate(-1 4)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackgroundGrid;