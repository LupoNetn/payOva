import React from 'react';

const heroContent = [
  {
    headline: "Streamline Course Manual Sales with PayOva",
    subheading:
      "A secure platform for class representatives to manage manual sales and payments, making student purchases seamless and verifiable.",
  },
];

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center gap-6">
      {heroContent.map((item, index) => (
        <div key={index} className="w-full max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight text-balance">
            {item.headline}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed">
            {item.subheading}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
