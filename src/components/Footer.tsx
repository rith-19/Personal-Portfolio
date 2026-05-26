export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-orange-soft py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
        <div className="flex items-center gap-2 font-display font-semibold">
          {/* <span className="w-2 h-2 rounded-full bg-primary glow-orange" /> */}
          <span className="text-primary"> © </span>
          Rithish R · 2026
        </div>
        <nav className="flex gap-6 text-muted-foreground">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        {/* <p className="text-muted-foreground text-xs">
          Built with <span className="text-primary">React</span> + Lovable
        </p> */}
      </div>
    </footer>
  );
}
