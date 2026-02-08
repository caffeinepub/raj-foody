import { TopNav } from './components/marketing/TopNav';
import { HeroSection } from './components/marketing/sections/HeroSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { MenuSection } from './components/marketing/sections/MenuSection';
import { WhyChooseUsSection } from './components/marketing/sections/WhyChooseUsSection';
import { GallerySection } from './components/marketing/sections/GallerySection';
import { TestimonialsSection } from './components/marketing/sections/TestimonialsSection';
import { ContactSection } from './components/marketing/sections/ContactSection';
import { Footer } from './components/marketing/Footer';
import { rajFoodyContent } from './content/rajFoodyContent';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav businessName={rajFoodyContent.businessName} />
      
      <main>
        <HeroSection
          businessName={rajFoodyContent.businessName}
          ownerName={rajFoodyContent.ownerName}
          tagline={rajFoodyContent.tagline}
          heroImage={rajFoodyContent.heroImage}
        />
        
        <AboutSection
          title={rajFoodyContent.about.title}
          description={rajFoodyContent.about.description}
        />
        
        <MenuSection
          title={rajFoodyContent.menu.title}
          items={rajFoodyContent.menu.items}
        />
        
        <WhyChooseUsSection
          title={rajFoodyContent.whyChooseUs.title}
          highlights={rajFoodyContent.whyChooseUs.highlights}
        />
        
        <GallerySection
          title={rajFoodyContent.gallery.title}
          images={rajFoodyContent.gallery.images}
        />
        
        <TestimonialsSection
          title={rajFoodyContent.testimonials.title}
          items={rajFoodyContent.testimonials.items}
        />
        
        <ContactSection
          title={rajFoodyContent.contact.title}
          phone={rajFoodyContent.contact.phone}
          email={rajFoodyContent.contact.email}
          address={rajFoodyContent.contact.address}
          hours={rajFoodyContent.contact.hours}
        />
      </main>
      
      <Footer
        businessName={rajFoodyContent.businessName}
        ownerName={rajFoodyContent.ownerName}
      />
    </div>
  );
}

export default App;
