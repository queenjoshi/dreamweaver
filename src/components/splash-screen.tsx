import AppLogo from "./app-logo";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50 animate-in fade-in-0 duration-500">
      <div className="relative">
        <AppLogo className="w-24 h-24 animate-pulse-glow" />
      </div>
      <h1 className="text-4xl font-bold mt-6 tracking-wider">DreamWeaver</h1>
      <p className="text-muted-foreground mt-2">Weaving the fabric of your subconscious.</p>
    </div>
  );
}
