import { useState, useRef, memo } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/FooterRevamped";
import FloatingBookButton from "@/components/FloatingBookButton";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Eye, Sparkles } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import facialRingLight from "@/assets/gallery/facial-treatment-ring-light.jpg";
import hairStyling from "@/assets/gallery/hair-styling-treatment.jpg";
import facialDevice from "@/assets/gallery/facial-treatment-device.jpg";
import manicurePedicure from "@/assets/gallery/manicure-pedicure-lounge.jpg";
import facialSteamer from "@/assets/gallery/facial-steamer-treatment.jpg";
import facialProcedure from "@/assets/gallery/facial-treatment-procedure.jpg";
import pedicureService from "@/assets/gallery/pedicure-service.jpg";
import chromotherapyLED from "@/assets/gallery/chromotherapy-led-treatment.jpg";

type Category = "All" | "Spa Suite" | "Lounge";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  title: string;
  gridSize: "hero" | "landscape" | "portrait" | "standard";
}

const galleryImages: GalleryImage[] = [
  { 
    src: facialRingLight, 
    alt: "Professional Facial Treatment with Ring Light at Faridaz Spa Abuja",
    category: "Spa Suite",
    title: "Premium Facial Treatment",
    gridSize: "hero"
  },
  { 
    src: hairStyling, 
    alt: "Expert Hair Styling Service with Professional Equipment at Faridaz Spa",
    category: "Lounge",
    title: "Hair Styling Services",
    gridSize: "landscape"
  },
  { 
    src: facialDevice, 
    alt: "Advanced Facial Treatment with Modern Skincare Technology",
    category: "Spa Suite",
    title: "Advanced Skincare Therapy",
    gridSize: "portrait"
  },
  { 
    src: manicurePedicure, 
    alt: "Luxury Manicure and Pedicure Services at Faridaz Spa Lounge",
    category: "Lounge",
    title: "Nail Care Services",
    gridSize: "standard"
  },
  { 
    src: facialSteamer, 
    alt: "Relaxing Facial Treatment with Steamer at Faridaz Spa",
    category: "Spa Suite",
    title: "Facial Steamer Therapy",
    gridSize: "standard"
  },
  { 
    src: facialProcedure, 
    alt: "Professional Facial Procedure by Certified Therapist at Faridaz Spa",
    category: "Spa Suite",
    title: "Professional Facial Care",
    gridSize: "landscape"
  },
  { 
    src: pedicureService, 
    alt: "Premium Pedicure Service at Faridaz Spa Abuja",
    category: "Lounge",
    title: "Pedicure Experience",
    gridSize: "standard"
  },
  { 
    src: chromotherapyLED, 
    alt: "Chromotherapy LED Light Treatment for Advanced Skincare at Faridaz Spa",
    category: "Spa Suite",
    title: "LED Chromotherapy",
    gridSize: "portrait"
  },
];

const categories: Category[] = ["All", "Spa Suite", "Lounge"];

const GalleryItem = memo(({ 
  image, 
  index, 
  onClick 
}: { 
  image: GalleryImage; 
  index: number; 
  onClick: () => void;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.1 });

  const gridSizeClasses = {
    hero: "md:col-span-2 md:row-span-2",
    landscape: "md:col-span-2",
    portrait: "md:row-span-2",
    standard: ""
  };

  return (
    <div
      ref={itemRef}
      className={`
        relative group aspect-square overflow-hidden rounded-xl
        shadow-soft hover:shadow-elegant transition-all duration-500
        cursor-zoom-in
        ${gridSizeClasses[image.gridSize]}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ 
        transitionDelay: `${index * 50}ms`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease'
      }}
      onClick={onClick}
    >
      {!imageLoaded && (
        <Skeleton className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted" />
      )}
      
      <img
        src={image.src}
        alt={image.alt}
        className={`
          w-full h-full object-cover
          transition-all duration-700 ease-out
          group-hover:scale-110
          ${imageLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Category Badge */}
      <Badge 
        variant="secondary"
        className="absolute top-4 right-4 bg-gold/90 text-background backdrop-blur-sm
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   shadow-lg z-10"
      >
        {image.category}
      </Badge>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-500
                      flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {image.title}
          </h3>
          <Button
            size="sm"
            variant="outline"
            className="bg-background/50 backdrop-blur-sm border-gold/50 hover:bg-gold hover:text-background
                       transition-all duration-300"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Fullscreen
          </Button>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-radial from-gold/20 via-transparent to-transparent blur-2xl" />
    </div>
  );
});

GalleryItem.displayName = "GalleryItem";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getCategoryCount = (category: Category) => {
    if (category === "All") return galleryImages.length;
    return galleryImages.filter(img => img.category === category).length;
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Faridaz Spa Abuja | World-Class Spa Facilities & Treatments</title>
        <meta 
          name="description" 
          content="Explore our stunning gallery showcasing Faridaz Spa's world-class spa facilities in Abuja. View our romantic treatment suites, chromotherapy rooms, and luxury amenities." 
        />
        <meta property="og:title" content="Gallery - Faridaz Spa Abuja" />
        <meta property="og:description" content="Step inside our world of wellness and discover the world-standard facilities that define every corner of Faridaz Spa." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
        <Header />
        
        {/* Decorative Ambient Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-float-particle" />
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        </div>

        <main className="pt-16 relative z-10">
          <section id="gallery" className="py-20">
            <div className="container mx-auto px-4">
              {/* Enhanced Header */}
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full 
                                bg-gradient-to-r from-gold/10 to-primary/10 
                                border border-gold/20">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">
                    {galleryImages.length} Images
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-elegant bg-clip-text text-transparent">
                  A Visual Journey
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Step inside our world of wellness and discover the world-standard facilities 
                  that define every corner of Faridaz Spa
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`
                      relative transition-all duration-300
                      ${selectedCategory === category 
                        ? 'bg-gradient-to-r from-gold to-primary text-background shadow-lg shadow-gold/30' 
                        : 'border-muted-foreground/20 hover:border-gold/50'
                      }
                    `}
                  >
                    {category}
                    <Badge 
                      variant="secondary"
                      className="ml-2 bg-background/20 text-xs"
                    >
                      {getCategoryCount(category)}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Masonry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {filteredImages.map((image, index) => (
                  <GalleryItem
                    key={`${image.src}-${index}`}
                    image={image}
                    index={index}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>

              {/* Empty State */}
              {filteredImages.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">
                    No images found in this category
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
        <FloatingBookButton />

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={filteredImages.map(img => ({
            src: img.src,
            alt: img.alt,
            title: img.title,
            description: img.category
          }))}
          carousel={{ finite: true }}
          render={{
            buttonPrev: filteredImages.length <= 1 ? () => null : undefined,
            buttonNext: filteredImages.length <= 1 ? () => null : undefined,
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
          }}
        />
      </div>
    </>
  );
};

export default Gallery;