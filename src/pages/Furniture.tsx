
import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Furniture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("all");

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Furniture</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              Each piece of Mercana furniture represents the pinnacle of craftsmanship, created to elevate the world's most distinguished residences.
            </p>
          </motion.div>

          <div className="mb-16">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-2 md:grid-cols-6 max-w-3xl mx-auto bg-transparent">
                <TabsTrigger value="all" className="data-[state=active]:text-mercana-gold data-[state=active]:border-b-2 data-[state=active]:border-mercana-gold rounded-none bg-transparent">All</TabsTrigger>
                <TabsTrigger value="seating" className="data-[state=active]:text-mercana-gold data-[state=active]:border-b-2 data-[state=active]:border-mercana-gold rounded-none bg-transparent">Seating</TabsTrigger>
                <TabsTrigger value="tables" className="data-[state=active]:text-mercana-gold data-[state=active]:border-b-2 data-[state=active]:border-mercana-gold rounded-none bg-transparent">Tables</TabsTrigger>
                <TabsTrigger value="storage" className="data-[state=active]:text-mercana-gold data-[state=active]:border-b-2 data-[state=active]:border-mercana-gold rounded-none bg-transparent">Storage</TabsTrigger>
                <TabsTrigger value="bedroom" className="data-[state=active]:text-mercana-gold data-[state=active]:border-b-2 data-[state=active]:border-mercana-gold rounded-none bg-transparent">Bedroom</TabsTrigger>
                <TabsTrigger value="office" className="data-[state=active]:text-mercana-gold data-[state=active]:border-b-2 data-[state=active]:border-mercana-gold rounded-none bg-transparent">Office</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {furnitureItems.map((item, index) => (
                    <FurnitureCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="seating" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {furnitureItems.filter(item => item.category === 'seating').map((item, index) => (
                    <FurnitureCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tables" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {furnitureItems.filter(item => item.category === 'tables').map((item, index) => (
                    <FurnitureCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="storage" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {furnitureItems.filter(item => item.category === 'storage').map((item, index) => (
                    <FurnitureCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="bedroom" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {furnitureItems.filter(item => item.category === 'bedroom').map((item, index) => (
                    <FurnitureCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="office" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {furnitureItems.filter(item => item.category === 'office').map((item, index) => (
                    <FurnitureCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

type FurnitureItem = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  collection: string;
  status: 'available' | 'limited' | 'backordered';
};

const furnitureItems: FurnitureItem[] = [
  {
    name: "Escher Sofa",
    description: "A masterful sofa with architectural precision and plush comfort in Italian velvet.",
    price: "$14,800",
    imageUrl: "https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    category: "seating",
    collection: "Metropolitan",
    status: "available"
  },
  {
    name: "Vienna Dining Table",
    description: "Solid walnut dining table with brass inlay details and hand-carved edges.",
    price: "$18,200",
    imageUrl: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "tables",
    collection: "Heritage",
    status: "limited"
  },
  {
    name: "Levant Armchair",
    description: "Handcrafted armchair with silk upholstery and sustainably sourced teak frame.",
    price: "$8,750",
    imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "seating",
    collection: "Artisan",
    status: "available"
  },
  {
    name: "Origin Console",
    description: "Sculptural console in figured maple with honed marble top and brass hardware.",
    price: "$12,300",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "storage",
    collection: "Minimalist",
    status: "available"
  },
  {
    name: "Meridian Bed",
    description: "King-sized platform bed with integrated nightstands and leather headboard.",
    price: "$22,500",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "bedroom",
    collection: "Metropolitan",
    status: "backordered"
  },
  {
    name: "Athena Desk",
    description: "Executive desk in rosewood with integrated charging and cable management system.",
    price: "$16,800",
    imageUrl: "https://images.unsplash.com/photo-1517166357932-d19458b23dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "office",
    collection: "Heritage",
    status: "limited"
  },
  {
    name: "Ostara Coffee Table",
    description: "Sculptural coffee table with rare earth stone inlay and bronze detailing.",
    price: "$9,400",
    imageUrl: "https://images.unsplash.com/photo-1565191880698-929beaf86182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "tables",
    collection: "Artisan",
    status: "available"
  },
  {
    name: "Sienna Bookcase",
    description: "Modular bookcase with adjustable shelving and integrated LED illumination.",
    price: "$13,200",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "storage",
    collection: "Minimalist",
    status: "available"
  },
  {
    name: "Coastal Lounge Chair",
    description: "Indoor-outdoor lounge chair in teak with performance fabric cushions.",
    price: "$7,900",
    imageUrl: "https://images.unsplash.com/photo-1541558869434-2970hedga12a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "seating",
    collection: "Coastal",
    status: "limited"
  }
];

const FurnitureCard = ({ item, index }: { item: FurnitureItem, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.1 + (index * 0.1) % 0.5 // Stagger but reset after every 5 items
      }}
      className="group"
    >
      <div className="overflow-hidden h-[300px] mb-6 image-shine">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-serif text-mercana-charcoal">{item.name}</h3>
        <span className="text-mercana-gold font-medium">{item.price}</span>
      </div>
      <p className="text-mercana-charcoal/60 text-sm mb-3">{item.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xs text-mercana-charcoal/60 mr-2">{item.collection} Collection</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            item.status === 'available' ? 'bg-green-100 text-green-800' : 
            item.status === 'limited' ? 'bg-amber-100 text-amber-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {item.status === 'available' ? 'Available' : 
             item.status === 'limited' ? 'Limited' : 
             'Backordered'}
          </span>
        </div>
        <a href="#" className="text-mercana-charcoal mercana-underline text-sm cursor-pointer">
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default Furniture;
