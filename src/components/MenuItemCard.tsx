import { Plus, Minus } from "lucide-react";
import type { MenuItem } from "@/data/menuData";

interface MenuItemCardProps {
  item: MenuItem;
  price: number;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const MenuItemCard = ({ item, price, quantity, onAdd, onRemove }: MenuItemCardProps) => {
  return (
    <div className="ornament-border rounded-lg bg-cream overflow-hidden menu-card-hover animate-fade-in">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.nameAr}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover"
        />
        {quantity > 0 && (
          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-tajawal font-bold text-accent-foreground text-sm">
            {quantity}
          </div>
        )}
      </div>
      <div className="p-3 text-center">
        <h3 className="font-amiri text-lg font-bold text-foreground leading-tight">{item.nameAr}</h3>
        <p className="text-muted-foreground text-xs mt-0.5">{item.nameEn}</p>
        <p className="text-accent font-bold text-sm mt-1">{price} شيكل</p>
        <div className="flex items-center justify-center gap-3 mt-2">
          {quantity > 0 && (
            <button
              onClick={onRemove}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
            >
              <Minus size={16} />
            </button>
          )}
          <button
            onClick={onAdd}
            className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
