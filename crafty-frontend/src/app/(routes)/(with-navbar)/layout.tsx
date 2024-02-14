import Logo from '@assets/svgs/logo.svg';

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="sticky top-0 z-50 flex h-16 w-full flex-row items-center gap-4 bg-ct_brown-200 px-10 max-md:justify-center">
        <Logo className="" height={59} />
        <h1 className="text-2xl">Crafty</h1>
        <h1 className="ml-auto cursor-pointer text-red-500 hover:underline">Logout</h1>
      </div>
      <div className="flex-1 bg-ct_brown-100">{children}</div>
    </div>
  );
}
