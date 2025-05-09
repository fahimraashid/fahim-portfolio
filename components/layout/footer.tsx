import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Fahim Raashid</h3>
            <p className="text-muted-foreground max-w-xs">
              Strategic Sales Leadership & Technology Growth Expertise for 
              the Middle East and Africa Region.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#track-record" className="text-muted-foreground hover:text-primary transition-colors">Track Record</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </Link>
              <Link 
                href="mailto:contact@example.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </Link>
              <Link 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>Phone</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Fahim Raashid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;