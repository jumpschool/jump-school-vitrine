import React, { useEffect } from 'react';

export default function TitreSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="title-container pt-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl pt-36 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 py-12">
        Bref, première étape : <br />
        <div className="pt-6">
          <span className="text-customPink">
            faisons connaissance !      
          </span>
        </div>
      </h2>
    </div>
  );
}
