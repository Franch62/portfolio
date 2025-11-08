import Link from "next/link";
import ColorSwitcher from "./ColorSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a0a]/70 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Nome / Marca */}
        <Link
          href="/"
          className="text-accent text-xl font-semibold tracking-wide select-none hover:opacity-80 transition-opacity"
        >
          {"<Francis />"}
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/interest-areas"
            className="
    text-white text-base lg:text-lg  font-semibold tracking-wide select-none
    relative
    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px]
    after:bg-[var(--accent-color)]
    after:transition-all after:duration-300
    hover:after:w-full
    hover:opacity-90
  "
          >
            {"Interesses/Projetos"}
          </Link>

          {/* Color switcher à direita */}
          <div className="flex items-center gap-3">
            <ColorSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
