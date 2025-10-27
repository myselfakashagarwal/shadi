import React from "react";
import { Home, Package, DollarSign, Mail, LogIn, UserPlus } from "lucide-react";
import ScrambledText from "@/components/ScrambledText";

function App() {
  return (
    <div className="min-h-screen bg-black relative" style={{ width: '100vw', maxWidth: '100%', overflow: 'hidden' }}>

      {/* Navigation Bar */}
      <header className="w-full px-8 py-8 relative z-20">
        <div className="flex items-center justify-between">
          {/* Left side: Logo and main navigation */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors cursor-pointer">
              hackctl
            </a>
            
            <nav className="flex items-center gap-6">
              <a href="/services" className="text-white hover:text-gray-300 transition-colors">
                Services
              </a>
              <a href="/products" className="text-white hover:text-gray-300 transition-colors">
                Products
              </a>
              <a href="/pricing" className="text-white hover:text-gray-300 transition-colors">
                Pricing
              </a>
            </nav>
          </div>
          
          {/* Right side: Contact, Sign In, and Sign Up */}
          <div className="flex items-center gap-4">
            <a href="/contact" className="flex items-center gap-2 px-5 py-2 border border-white/40 rounded-lg text-white   hover:border-white/60 hover:bg-white/15 shadow-lg shadow-black/20 transition-all">
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a href="/sign-in" className="flex items-center gap-2 px-5 py-2 border border-white/40 rounded-lg text-white  hover:border-white/60 hover:bg-white/15 shadow-lg shadow-black/20 transition-all">
              <LogIn className="h-4 w-4" />
              Sign In
            </a>
            <a href="/sign-up" className="flex items-center gap-2 px-5 py-2 border border-white rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-all">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </a>
          </div>
        </div>
      </header>
      
      {/* Center Message with ScrambledText */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <ScrambledText
          radius={100}
          duration={1}
          speed={1}
          scrambleChars=".:"
        >
          Get simple yet functional <br></br>solutions for your infra.
        </ScrambledText>
      </div>
    </div>
  );
}

export default App;
