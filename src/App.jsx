import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <div className="container mx-auto px-4 py-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
          <NavigationMenuIndicator />
        </NavigationMenu>
      </div>
    </div>
  );
}

export default App;
