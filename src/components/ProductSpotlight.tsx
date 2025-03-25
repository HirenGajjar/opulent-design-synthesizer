
import React, { useEffect, useState } from 'react';

export function ProductSpotlight() {
  const [activeTab, setActiveTab] = useState(0);
  const products = [
    {
      name: "Elysian Console",
      description: "Hand-carved from a single block of Italian marble, the Elysian Console represents the pinnacle of sculptural furniture design.",
      price: "$24,800",
      image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=1780&auto=format&fit=crop"
    },
    {
      name: "Lumière Chandelier",
      description: "A breathtaking masterpiece featuring hand-blown Murano glass and 24-karat gold hardware that transforms spaces with ethereal illumination.",
      price: "$18,500",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1287&auto=format&fit=crop"
    },
    {
      name: "Serene Armchair",
      description: "Upholstered in rare Mongolian cashmere and supported by a bronze frame, this limited edition piece embodies supreme comfort.",
      price: "$12,600",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1158&auto=format&fit=crop"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % products.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [products.length]);
  
  return (
    <section className="py-24 md:py-32 bg-mercana-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1620039496977-44181d9964f5?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4">
            Featured Pieces
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Exceptional Creations
          </h2>
          <div className="h-px w-24 bg-mercana-gold mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative overflow-hidden aspect-square lg:aspect-[4/5]">
              {products.map((product, index) => (
                <div 
                  key={product.name}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="lg:max-w-lg">
              {products.map((product, index) => (
                <div 
                  key={product.name}
                  className={`transition-opacity duration-1000 ${
                    activeTab === index ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  style={{ position: activeTab === index ? 'relative' : 'absolute' }}
                >
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                    {product.name}
                  </h3>
                  <p className="text-white/70 mb-8">
                    {product.description}
                  </p>
                  <p className="text-mercana-gold text-2xl font-serif mb-8">
                    {product.price}
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-mercana-gold text-mercana-charcoal px-8 py-3 uppercase tracking-wider text-sm hover:bg-mercana-gold/90 transition-all duration-300 cursor-pointer">
                      Request Details
                    </a>
                    <a href="#" className="border border-mercana-gold text-mercana-gold px-8 py-3 uppercase tracking-wider text-sm hover:bg-mercana-gold hover:text-mercana-charcoal transition-all duration-300 cursor-pointer">
                      View Piece
                    </a>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-16">
                {products.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full mx-2 cursor-pointer ${
                      activeTab === index ? 'bg-mercana-gold' : 'bg-white/30'
                    }`}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
