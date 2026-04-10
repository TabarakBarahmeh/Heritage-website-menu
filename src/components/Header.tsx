import logo from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="bg-primary">
      <img
        src={logo}
        alt="Heritage | إرث"
        className="w-full h-full object-cover"
      />
    </header>
  );
};

export default Header;
