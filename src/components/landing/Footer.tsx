import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-gradient-brand">ProctorAI</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              AI-powered exam proctoring for schools and colleges. Fair exams,
              trusted results.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Product</h4>
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Company</h4>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ProctorAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}