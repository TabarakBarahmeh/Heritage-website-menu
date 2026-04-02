import { useState, useCallback } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import CartDrawer from "@/components/CartDrawer";
import CategoryPage from "@/pages/CategoryPage";

const ActiveCategoryWrapper = ({
  quantities,
  onAdd,
  onRemove,
}: {
  quantities: Record<string, number>;
  onAdd: (itemId: string) => void;
  onRemove: (itemId: string) => void;
}) => {
  const { categoryId } = useParams<{ categoryId: string }>();

  return (
    <>
      <CategoryNav activeCategory={categoryId || "main"} />
      <CategoryPage quantities={quantities} onAdd={onAdd} onRemove={onRemove} />
    </>
  );
};

const Index = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const handleAdd = useCallback((itemId: string) => {
    setQuantities((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }, []);

  const handleRemove = useCallback((itemId: string) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return { ...prev, [itemId]: current - 1 };
    });
  }, []);

  const totalItems = Object.values(quantities).reduce((s, q) => s + q, 0);

  const handleSubmit = () => {
    toast.success("تم تأكيد طلبك بنجاح! سيتم تحضيره قريباً", {
      duration: 4000,
    });
    setQuantities({});
    setCartOpen(false);
  };

  const cartItems = Object.entries(quantities).map(([itemId, quantity]) => ({
    itemId,
    quantity,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Routes>
        <Route
          path="menu/:categoryId"
          element={
            <ActiveCategoryWrapper
              quantities={quantities}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          }
        />
        <Route path="*" element={<Navigate to="/menu/main" replace />} />
      </Routes>

      {totalItems > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 gold-gradient text-primary-foreground px-8 py-4 rounded-2xl shadow-lg flex items-center gap-3 font-bold text-lg hover:opacity-90 transition-all animate-slide-up z-30"
        >
          <ShoppingBag size={22} />
          <span>عرض السلة ({totalItems})</span>
        </button>
      )}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
