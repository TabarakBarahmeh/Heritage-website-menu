import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { menuCategories } from "@/data/menuData";

interface CartItem {
  itemId: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onAdd: (itemId: string) => void;
  onRemove: (itemId: string) => void;
  onSubmit: () => void;
}

const findItem = (itemId: string) => {
  for (const cat of menuCategories) {
    const item = cat.items.find((i) => i.id === itemId);
    if (item) return { item, price: cat.price };
  }
  return null;
};

const CartDrawer = ({ isOpen, onClose, items, onAdd, onRemove, onSubmit }: CartDrawerProps) => {
  const cartItems = items.filter((i) => i.quantity > 0);
  const total = cartItems.reduce((sum, ci) => {
    const found = findItem(ci.itemId);
    return sum + (found ? found.price * ci.quantity : 0);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] bg-background rounded-t-2xl animate-slide-up overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
          <h2 className="font-amiri text-xl font-bold">سلة الطلب</h2>
          <ShoppingBag size={20} className="text-accent" />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">السلة فارغة</p>
          ) : (
            cartItems.map((ci) => {
              const found = findItem(ci.itemId);
              if (!found) return null;
              return (
                <div key={ci.itemId} className="flex items-center gap-3 bg-card rounded-lg p-3 ornament-border">
                  <img
                    src={found.item.image}
                    alt={found.item.nameAr}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{found.item.nameAr}</p>
                    <p className="text-accent text-xs">{found.price} شيكل</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemove(ci.itemId)}
                      className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{ci.quantity}</span>
                    <button
                      onClick={() => onAdd(ci.itemId)}
                      className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-primary-foreground"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex justify-between items-center font-bold text-lg">
              <span className="text-accent">{total} شيكل</span>
              <span>المجموع</span>
            </div>
            <button
              onClick={onSubmit}
              className="w-full gold-gradient text-primary-foreground py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              تأكيد الطلب
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
