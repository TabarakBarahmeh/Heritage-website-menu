import { useNavigate } from "react-router-dom";
import { menuCategories } from "@/data/menuData";

interface CategoryNavProps {
  activeCategory: string;
}

const CategoryNav = ({ activeCategory }: CategoryNavProps) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex gap-1 px-4 py-2 overflow-x-auto scrollbar-hidden">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/menu/${cat.id}`)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-tajawal font-medium transition-all ${
              activeCategory === cat.id
                ? "gold-gradient text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat.titleAr}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
