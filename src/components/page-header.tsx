type PageHeaderProps = {
    title: string;
    subtitle: string;
    className?: string;
  };
  
  export default function PageHeader({ title, subtitle, className }: PageHeaderProps) {
    return (
      <header className={className}>
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-neon-gold sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      </header>
    );
  }
