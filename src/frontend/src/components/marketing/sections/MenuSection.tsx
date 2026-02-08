import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-2"
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <span className="text-xl font-bold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
