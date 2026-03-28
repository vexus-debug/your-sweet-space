import { memo } from "react";
import { Helmet } from "react-helmet";
import { ShoppingBag, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/FooterRevamped";
import { productsData, generateWhatsAppLink } from "@/data/productsData";
import productsImage from "@/assets/products/beauty-products.jpg";

const ProductCard = memo(({ product }: { product: typeof productsData[0] }) => {
  const handleBuyNow = () => {
    window.open(generateWhatsAppLink(product.name, product.price), "_blank");
  };

  return (
    <div className="card-service group">
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img 
          src={productsImage} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="badge-popular text-xs">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              {product.price}
            </span>
            <span className="text-sm text-muted-foreground">• {product.size}</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <div className="space-y-2">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gold" />
            Key Benefits
          </h4>
          <ul className="space-y-1.5">
            {product.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button 
          onClick={handleBuyNow}
          className="w-full btn-hero group/btn"
          size="lg"
        >
          <MessageCircle className="w-4 h-4" />
          Buy Now via WhatsApp
        </Button>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Premium Beauty Products - Faridaz Spa Abuja</title>
        <meta name="description" content="Shop luxury skincare and beauty products at Faridaz Spa. Premium organic products designed for professional treatments. Order via WhatsApp for delivery in Abuja." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-gold/5 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <ShoppingBag className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium">Premium Beauty Products</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-deep via-primary to-gold bg-clip-text text-transparent">
                  Luxury Skincare Collection
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Discover our curated collection of premium beauty products, crafted with the finest ingredients to nourish, protect, and enhance your natural beauty.
              </p>

              {/* Product Video Showcase */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <video 
                    className="w-full h-64 object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/videos/product-demo-1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <video 
                    className="w-full h-64 object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/videos/product-demo-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Skincare Routine?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Shop our premium collection and experience the difference quality makes
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/2347068121733?text=${encodeURIComponent("Hi! I'd like to know more about your products.")}`, "_blank")}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Products;