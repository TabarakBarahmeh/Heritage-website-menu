import type { MenuCategory } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

interface MenuSectionProps {
  category: MenuCategory;
  quantities: Record<string, number>;
  onAdd: (itemId: string) => void;
  onRemove: (itemId: string) => void;
}

const MenuSection = ({ category, quantities, onAdd, onRemove }: MenuSectionProps) => {
  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="category-header rounded-xl px-6 py-4 mb-6">
        <div className="text-center">
          <h2 className="font-amiri text-2xl md:text-3xl font-bold text-primary-foreground">
            {category.titleAr}
          </h2>
          <p className="text-primary-foreground/80 text-sm mt-1">{category.titleEn}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
        {category.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            price={category.price}
            quantity={quantities[item.id] || 0}
            onAdd={() => onAdd(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>

      <p className="text-center text-muted-foreground font-tajawal text-sm mb-8">
        {category.priceLabel}
      </p>
    </section>
  );
};

export default MenuSection;
