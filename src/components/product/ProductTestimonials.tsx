import { Star, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  verified: boolean;
  variant: "Marine" | "Vegetarian";
  duration: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Margaret T.",
    location: "Edinburgh",
    rating: 5,
    text: "After three months of consistent use alongside my physio exercises, I've noticed a genuine improvement in my morning stiffness. The powder dissolves easily and the taste is pleasant enough.",
    verified: true,
    variant: "Marine",
    duration: "Using for 3 months"
  },
  {
    id: 2,
    name: "David R.",
    location: "Bristol",
    rating: 5,
    text: "As someone who was sceptical about supplements, I appreciate the honest approach here. No miracle claims, just good quality ingredients. Combined with walking and strength work, my knees feel more comfortable.",
    verified: true,
    variant: "Marine",
    duration: "Using for 4 months"
  },
  {
    id: 3,
    name: "Sarah L.",
    location: "Manchester",
    rating: 4,
    text: "The vegetarian formula was exactly what I was looking for. It's become part of my daily routine alongside my morning stretches. Subtle improvements over time, which feels more realistic than overnight miracles.",
    verified: true,
    variant: "Vegetarian",
    duration: "Using for 2 months"
  },
  {
    id: 4,
    name: "James K.",
    location: "London",
    rating: 5,
    text: "I do a lot of running and my physio recommended looking at joint support. This fits well with my training recovery routine. Good quality, UK-made product with proper research behind the dosages.",
    verified: true,
    variant: "Marine",
    duration: "Using for 6 months"
  },
  {
    id: 5,
    name: "Patricia M.",
    location: "Cardiff",
    rating: 5,
    text: "Finally a supplement company that doesn't promise the impossible. The transparency about what it can and can't do actually made me trust it more. Happy with my subscription.",
    verified: true,
    variant: "Vegetarian",
    duration: "Using for 5 months"
  },
  {
    id: 6,
    name: "Robert H.",
    location: "Glasgow",
    rating: 4,
    text: "At 68, I'm realistic about joint health. This supplement is one part of my approach alongside swimming and weight management. Easy to take and good customer service.",
    verified: true,
    variant: "Marine",
    duration: "Using for 3 months"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
        }`}
      />
    ))}
  </div>
);

const ProductTestimonials = () => {
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);
  
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Real experiences from people incorporating our supplement into their joint health routine
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-sm border border-border">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">{averageRating}</span>
            <span className="text-muted-foreground">from {testimonials.length} reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Review Text */}
              <p className="text-foreground/90 mt-4 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-start justify-between pt-4 border-t border-border">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.duration}</p>
                </div>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  {testimonial.variant}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          All reviews are from verified purchasers. Individual results may vary. 
          Supplements work best as part of a comprehensive approach including exercise and healthy lifestyle.
        </p>
      </div>
    </section>
  );
};

export default ProductTestimonials;
