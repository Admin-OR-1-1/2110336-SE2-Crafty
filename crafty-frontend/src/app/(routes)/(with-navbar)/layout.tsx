export default function NavbarLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-row p-4 items-center h-16 bg-[#eac696]">
        <span className="text-xl">Navbar</span>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}
