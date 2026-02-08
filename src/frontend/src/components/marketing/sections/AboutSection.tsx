interface AboutSectionProps {
  title: string;
  description: string;
}

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
