import { useParams, Navigate } from "react-router-dom";
import { menuCategories } from "@/data/menuData";
import MenuSection from "@/components/MenuSection";

interface CategoryPageProps {
  quantities: Record<string, number>;
  onAdd: (itemId: string) => void;
  onRemove: (itemId: string) => void;
}

const CategoryPage = ({ quantities, onAdd, onRemove }: CategoryPageProps) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = menuCategories.find((c) => c.id === categoryId);

  if (!category) return <Navigate to="/menu/main" replace />;

  return (
    <main className="max-w-5xl mx-auto px-4 py-6 pb-24">
      <MenuSection
        category={category}
        quantities={quantities}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </main>
  );
};

export default CategoryPage;
