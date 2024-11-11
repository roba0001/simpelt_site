import Meny from "@/app/components/Meny";
import ProductList from "@/app/components/Productlist";
import CategoryList from "@/app/components/CategoryList";

export default function ProductsPage() {
  return (
    <div>
      <Meny />
      <CategoryList />
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}
