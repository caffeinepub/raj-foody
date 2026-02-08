import { Heart } from 'lucide-react';

interface FooterProps {
  businessName: string;
  ownerName: string;
}

export function Footer({ businessName, ownerName }: FooterProps) {
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <img
                src="/assets/generated/raj-foody-logo.dim_512x512.png"
                alt={businessName}
                className="h-16 w-16 object-contain"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary">{businessName}</h3>
                <p className="text-sm text-foreground/60">by {ownerName}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center space-y-2">
            <p className="text-sm text-foreground/60">
              © 2026. Built with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
