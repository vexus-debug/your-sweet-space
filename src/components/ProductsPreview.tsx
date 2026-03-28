import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsPreview = memo(() => {
  const navigate = useNavigate();
  const featuredProducts = [
    { name: "Luxury Body Cream", price: "From ₦40,000", description: "Deep moisturizing formula for 24-hour hydration" },
    { name: "Radiance Face Cream", price: "From ₦4,000", description: "Reduces fine lines and brightens skin tone" },
    { name: "Anti-Aging Shower Cream", price: "₦45,000", description: "Firms and rejuvenates skin with every shower" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-gold/5 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"><div className="absolute top-10 right-10 w-72 h-72 bg-gold rounded-full blur-3xl" /><div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" /></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4"><ShoppingBag className="w-4 h-4 text-gold" /><span className="text-sm font-medium">Shop Our Products</span></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-primary-deep via-primary to-gold bg-clip-text text-transparent">Premium Beauty Products</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Extend your wellness journey at home with our curated selection of premium beauty and skincare products, carefully chosen to complement your spa treatments.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative group cursor-pointer" onClick={() => navigate('/products')}>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img src="https://placehold.co/800x1000/e8d4b8/8b6f47?text=Beauty+Products" alt="Faridaz Beauty Products" className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6"><span className="badge-popular"><Sparkles className="w-4 h-4" />Premium Quality</span></div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><div className="text-white text-center"><ShoppingBag className="w-12 h-12 mx-auto mb-2" /><p className="text-lg font-semibold">View Products</p></div></div>
              </div>
            </div>
            <div className="space-y-6">
              {featuredProducts.map((product, index) => (
                <div key={index} className="card-service cursor-pointer group" onClick={() => navigate('/products')}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"><ShoppingBag className="w-6 h-6 text-white" /></div>
                    <div className="flex-1"><h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{product.name}</h3><p className="text-gold font-semibold mb-2">{product.price}</p><p className="text-sm text-muted-foreground">{product.description}</p></div>
                  </div>
                </div>
              ))}
              <div className="pt-4"><Button onClick={() => navigate('/products')} className="btn-hero group w-full sm:w-auto" size="lg">Shop All Products<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
ProductsPreview.displayName = "ProductsPreview";
export default ProductsPreview;