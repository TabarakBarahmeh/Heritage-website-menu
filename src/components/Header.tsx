import logo from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="w-full">
      <img
        src={logo}
        alt="Heritage | إرث"
        className="w-full h-auto object-cover block"
      />
    </header>
  );
};

export default Header;
