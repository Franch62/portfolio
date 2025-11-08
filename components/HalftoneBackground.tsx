export default function HalftoneBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#111111]overflow-hidden">
      {/* <div className="absolute inset-0 [background-image:radial-gradient(gray_1px,transparent_0)] [background-size:24px_24px] [background-position:-19px_-19px]" /> */}
      <div className="relative">{children}</div>
    </div>
  );
}
