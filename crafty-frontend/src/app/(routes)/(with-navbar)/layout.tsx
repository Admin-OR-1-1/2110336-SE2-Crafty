export default function NavbarLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-row w-full p-4 items-center h-16 bg-[#ffffff] sticky top-0 z-50">
        <span className="text-xl">Navbar</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
