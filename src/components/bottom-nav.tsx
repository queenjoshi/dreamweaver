"use client";

import { cn } from "@/lib/utils";
import { Home, Images, PenSquare, User, Sparkles, Paintbrush, Bot, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/capture", label: "Capture", icon: Sparkles },
  { href: "/horoscope", label: "Horoscope", icon: Star },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-lg border-t border-accent/30 z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors duration-300 group",
                isActive ? "text-primary" : "text-muted-foreground hover:text-accent"
              )}
            >
              <item.icon
                className={cn(
                  "h-7 w-7 transition-all duration-300 drop-shadow-[0_0_4px_hsl(var(--muted-foreground))] group-hover:drop-shadow-neon-gold",
                  isActive ? "drop-shadow-[0_0_8px_hsl(var(--primary))] scale-110" : "group-hover:scale-110"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={cn("text-xs mt-1 font-medium transition-colors", isActive ? "text-primary-foreground" : "text-muted-foreground")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
