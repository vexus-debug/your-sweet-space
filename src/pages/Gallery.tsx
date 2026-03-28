import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

import galleryBracesPink from "@/assets/gallery-braces-pink.jpg";
import galleryScaling from "@/assets/gallery-scaling-before-after.jpg";
import galleryWhitening1 from "@/assets/gallery-whitening-1.jpg";
import galleryBracesMetal from "@/assets/gallery-braces-metal.jpg";
import galleryTreatmentRoom from "@/assets/gallery-treatment-room.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryWaitingArea from "@/assets/gallery-waiting-area.jpg";
import galleryWhitening2 from "@/assets/gallery-whitening-2.webp";
import galleryCleaning from "@/assets/gallery-cleaning-before-after.webp";
import galleryWhitening3 from "@/assets/gallery-whitening-3.webp";

const images = [
  { src: galleryTreatmentRoom, alt: "Our modern treatment room with advanced dental equipment", category: "Clinic" },
  { src: galleryReception, alt: "Bridge Dental Clinic reception area", category: "Clinic" },
  { src: galleryWaitingArea, alt: "Comfortable patient waiting area", category: "Clinic" },
  { src: galleryScaling, alt: "Before and after scaling & polishing treatment", category: "Treatment" },
  { src: galleryCleaning, alt: "Before and after dental cleaning", category: "Treatment" },
  { src: galleryWhitening1, alt: "Professional teeth whitening procedure", category: "Whitening" },
  { src: galleryWhitening2, alt: "Teeth whitening treatment in progress", category: "Whitening" },
  { src: galleryWhitening3, alt: "Teeth whitening session", category: "Whitening" },
  { src: galleryBracesPink, alt: "Orthodontic braces with pink bands", category: "Orthodontics" },
  { src: galleryBracesMetal, alt: "Metal orthodontic braces treatment", category: "Orthodontics" },
];

const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      <section className="relative py-24 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore our clinic facilities, treatment results, and the quality of care we deliver every day at Bridge Dental Clinic.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
