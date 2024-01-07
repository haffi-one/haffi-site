const Nav = () => (
  <nav className="w-full sticky top-0 bg-white/90 backdrop-blur-md">
    <div className="max-w-[1100px] mx-auto py-4 md:py-7 px-3 flex flex-row justify-between">
      <a href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="HaffiCal Logo" src="/HAFFI.svg" className="h-[46px] w-auto" />
      </a>
    </div>
  </nav>
);

export default Nav;
