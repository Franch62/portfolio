export const TechIcons = () => {
  const icons = [
      "go",
      "mysql",
      "react",
      "nodejs",
      "typescript",
      "next",
      "vite",
    "mongodb",
    "tailwind",
    "photoshop",
    "premiere",
    "aftereffects",
  ];

  return (
    <div className="w-full flex flex-wrap justify-center md:justify-center gap-4 py-6">
      {icons.map((icon) => (
        <img
          key={icon}
          src={`https://skillicons.dev/icons?i=${icon}`}
          alt={icon}
          width={48}
          height={48}
          className="
            transition-transform duration-300
            hover:scale-110
            hover:drop-shadow-[0_0_6px_var(--accent-color)]
          "
        />
      ))}
    </div>
  );
};
