export default function Footer() {
  return (
    <footer className="w-full text-zinc-400 border-t border-zinc-800 mt-16 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-2 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Francis. Todos os direitos reservados.
        </p>

        <p className="text-center md:text-right">
          Desenvolvido com ❤️(amor, não lovable) e{" "}
          <span className="text-fuchsia-500 font-semibold">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
