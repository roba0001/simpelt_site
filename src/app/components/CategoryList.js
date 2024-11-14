// "use client";
// import React, { useState } from "react";

// export default async function Page() {
//   const [chosenCategory, setChosenCategory] = useState(0);

//   let response = await fetch("https://dummyjson.com/products/categories");
//   let data = await response.json();

//   return (
//     <div>
//       <form>
//         <label htmlFor="categories">Categories: </label>
//         <select name="categories" id="categories">
//           {data.map((category) => (
//             <option key={category.name} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductList from "@/app/components/ProductList";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      if (selectedCategory) {
        try {
          const response = await fetch(
            `https://dummyjson.com/products/category/${selectedCategory}`
          );
          const data = await response.json();
          console.log("Products data:", data);

          if (data && Array.isArray(data.products)) {
            setProducts(data.products);
          } else {
            setProducts([]);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          setProducts([]);
        }
      }
    }
    fetchProducts();
  }, [selectedCategory]);

  const categoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
  };

  return (
    <div>
      <form>
        <label htmlFor="categories">Categories: </label>
        <select
          name="categories"
          id="categories"
          onChange={categoryChange}
          value={selectedCategory}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </form>

      <ProductList selectedCategory={selectedCategory} />
      {/*       
      <div className="product-list grid grid-cols-3 gap-4 mt-4">
        {products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              className="product-item border p-4 rounded-md"
            >
              <Link href={`/pages/products/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  width={250}
                  height={250}
                  alt={product.title}
                  className="rounded-md"
                />
                <h3 className="mt-2 text-center">{product.title}</h3>
              </Link>
              <p className="text-center">Price: ${product.price}</p>
            </div>
          ))}
      </div> */}
    </div>
  );
}
