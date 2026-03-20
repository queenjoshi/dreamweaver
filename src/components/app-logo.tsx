import { cn } from "@/lib/utils";

const AppLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-accent", className)}
    {...props}
  >
    <defs>
      <filter id="neon-red-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M32 58C17.63 58 6 46.37 6 32C6 20.33 14.48 10.41 25 7.42C23.18 11.23 22 15.98 22 21C22 35.33 34.67 48 49 48C52.12 48 55.05 47.38 57.69 46.28C52.17 53.53 42.84 58 32 58Z"
      stroke="currentColor"
      strokeWidth="2"
      className="drop-shadow-neon-gold"
    />

    <path
      d="M32,22 C36,26 40,30 42,35"
      stroke="url(#weave-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M28,28 C34,30 38,36 39,42"
      stroke="url(#weave-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M36,25 C38,32 36,39 32,44"
      stroke="url(#weave-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />

    <circle cx="46" cy="14" r="3" className="text-primary" fill="currentColor" filter="url(#neon-red-glow)" />
    <circle cx="52" cy="25" r="1.5" className="text-primary/70" fill="currentColor" filter="url(#neon-red-glow)" />

    <defs>
        <linearGradient id="weave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 1}} />
        </linearGradient>
    </defs>
  </svg>
);

export default AppLogo;
