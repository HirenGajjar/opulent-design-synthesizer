
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';

const Decor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Décor</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              Exquisite accents that transform environments into expressions of personal style, curated from the world's finest artisans.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <DecorCategory 
              title="Art & Sculptures"
              description="Museum-quality pieces that elevate spaces with cultural significance and artistic excellence."
              imageUrl="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80"
              index={0}
            />
            <DecorCategory 
              title="Textiles & Fabrics"
              description="Rare and luxurious materials crafted into throws, pillows, and wall hangings to add depth and texture."
              imageUrl="https://images.unsplash.com/photo-1616486805547-1c6e69eb4d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              index={1}
            />
            <DecorCategory 
              title="Objects & Accents"
              description="Intriguing conversation pieces and thoughtful details that personalize living environments."
              imageUrl="https://images.unsplash.com/photo-1590428436326-fda2ba136c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              index={2}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal mb-12 text-center">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {decorItems.map((item, index) => (
                <DecorCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

const DecorCategory = ({ title, description, imageUrl, index }: { 
  title: string, 
  description: string, 
  imageUrl: string, 
  index: number 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.2 + (index * 0.15)
      }}
      className="flex flex-col h-full"
    >
      <div className="overflow-hidden h-[300px] mb-6">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-serif text-mercana-charcoal mb-3">{title}</h3>
      <p className="text-mercana-charcoal/60 mb-6 flex-grow">{description}</p>
      <a href="#" className="btn-luxury self-start">Explore</a>
    </motion.div>
  );
};

type DecorItem = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  origin: string;
  status: 'in stock' | 'special order';
};

const decorItems: DecorItem[] = [
  {
    name: "Alabaster Vase",
    description: "Hand-carved alabaster vase with organic form and natural variations.",
    price: "$3,850",
    imageUrl: "https://images.unsplash.com/photo-1611145434336-2aa4568ba071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Objects & Accents",
    origin: "Italy",
    status: "in stock"
  },
  {
    name: "Merino Throw",
    description: "Ultra-soft hand-loomed merino wool throw with delicate fringe detail.",
    price: "$2,200",
    imageUrl: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Textiles & Fabrics",
    origin: "Scotland",
    status: "in stock"
  },
  {
    name: "Bronze Sculpture",
    description: "Limited edition abstract bronze sculpture on marble base.",
    price: "$8,750",
    imageUrl: "https://images.unsplash.com/photo-1655401971868-a1d9bc6b6329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Art & Sculptures",
    origin: "France",
    status: "special order"
  },
  {
    name: "Crystal Decanter",
    description: "Hand-cut crystal decanter with geometric pattern and palladium details.",
    price: "$3,200",
    imageUrl: "https://images.unsplash.com/photo-1616432043562-3e159ba7b89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "Objects & Accents",
    origin: "Czech Republic",
    status: "in stock"
  }
];

const DecorCard = ({ item, index }: { item: DecorItem, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.5 + (index * 0.1)
      }}
      className="group"
    >
      <div className="overflow-hidden h-[250px] mb-4 image-shine">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-serif text-mercana-charcoal">{item.name}</h3>
        <span className="text-mercana-gold font-medium">{item.price}</span>
      </div>
      <p className="text-mercana-charcoal/60 text-sm mb-2">{item.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-mercana-charcoal/60">{item.origin}</span>
          <span className={`text-xs mt-1 ${
            item.status === 'in stock' ? 'text-green-700' : 'text-amber-700'
          }`}>
            {item.status}
          </span>
        </div>
        <a href="#" className="text-mercana-charcoal mercana-underline text-sm cursor-pointer">
          Details
        </a>
      </div>
    </motion.div>
  );
};

export default Decor;
