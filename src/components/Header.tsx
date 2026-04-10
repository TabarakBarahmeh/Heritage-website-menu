import logo from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="bg-primary py-6 px-4 text-center">
      <img
        src={logo}
        alt="Heritage | إرث"
        className="mx-auto h-28 md:h-36 object-contain"
      />
    </header>
  );
};

export default Header;
