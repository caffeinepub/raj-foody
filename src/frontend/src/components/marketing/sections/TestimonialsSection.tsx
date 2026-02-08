import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  quote: string;
}

interface TestimonialsSectionProps {
  title: string;
  items: Testimonial[];
}

export function TestimonialsSection({ title, items }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-2"
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="text-base text-foreground/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-primary">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
