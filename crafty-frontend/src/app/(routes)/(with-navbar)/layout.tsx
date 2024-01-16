export default function NavbarLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row p-4 items-center h-16 bg-[#eac696]">
        <span className="text-xl">Navbar</span>
      </div>
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
}
