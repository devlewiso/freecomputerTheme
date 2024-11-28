import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional workstation setup',
    title: 'Premium Build Quality'
  },
  {
    url: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Detailed display view',
    title: 'Crystal Clear Display'
  },
  {
    url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Keyboard close-up',
    title: 'Ergonomic Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Performance metrics',
    title: 'Unmatched Performance'
  },
  {
    url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Cooling system',
    title: 'Advanced Cooling'
  },
  {
    url: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Port selection',
    title: 'Extensive Connectivity'
  }
];

export function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience Excellence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">{image.title}</h3>
                  <p className="text-white/90 text-sm sm:text-base mt-1 sm:mt-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}