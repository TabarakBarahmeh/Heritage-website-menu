import logo from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="bg-primary py-6 px-4 text-center">
      <img
        src={logo}
        alt="Heritage | إرث"
        width={120}
        height={120}
        className="mx-auto w-24 h-24 md:w-28 md:h-28 object-contain rounded-full"
      />
      <h1 className="font-amiri text-2xl md:text-3xl font-bold text-primary-foreground mt-3">
        إرث | Heritage
      </h1>
      <p className="text-primary-foreground/80 text-sm mt-1 font-tajawal">Taste Our Tradition</p>
    </header>
  );
};

export default Header;
