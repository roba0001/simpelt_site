import Meny from "@/app/components/Meny";
import CategoryList from "@/app/components/CategoryList";
import ProductList from "@/app/components/ProductList";

export default function ProductsPage() {
  return (
    <div>
      <Meny />
      <CategoryList />
      <ProductList />
    </div>
  );
}
