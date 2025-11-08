import ColorSwitcher from "./ColorSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a0a]/70 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Nome / Marca */}
        <div className="text-accent text-lg font-semibold tracking-wide select-none">
          {"<Francis />"}
        </div>

        {/* Color switcher à direita */}
        <div className="flex items-center gap-3">
          <ColorSwitcher />
        </div>
      </div>
    </header>
  );
}
