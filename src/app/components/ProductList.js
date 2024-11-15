"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState(undefined);
  const [basketProducts, setBasketProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const selectedProducts = basketProducts.map((basketProduct) => `${basketProduct.id}`).join(",");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const url = selectedCategory
          ? `https://dummyjson.com/products/category/${selectedCategory}`
          : `https://dummyjson.com/products`;

        const response = await fetch(url);
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

    fetchProducts();
  }, [selectedCategory]);

  if (!products) {
    return <div>Loading...</div>;
  }

  function addToBasket(product) {
    // tilføj antal prop
    // hvis den findes, tilføj antal
    const addedProduct = {
      title: product.title,
      price: product.price,
      id: product.id,
      quantity: 0,
    };
    setProductQuantity(productQuantity + 1);

    if (basketProducts.some((basketProduct) => basketProduct.id === product.id)) {
      // her skal den tilføje tal istedet for produktet igen
      addedProduct.quantity++;
      console.log("addedProductQuantity: ", addedProduct.quantity);

      console.log("basket includes this product");
    } else {
      setBasketProducts(basketProducts.concat(addedProduct));
    }

    console.log(basketProducts);
  }

  function removeFromBasket(id) {
    setBasketProducts(basketProducts.filter((product) => product.id !== id));
  }

  return (
    <div className="grid grid-cols-[6fr_2fr] mb-10">
      <div className=" grid grid-cols-3 ">
        {products.map((product) => (
          <div
            className="max-w-auto border-4 border-card m-4 p-5 rounded-2xl flex flex-col justify-between"
            key={product.id}
          >
            <Link className="mb-3" href={`/pages/products/${product.id}`}>
              {" "}
              <Image src={product.thumbnail} width={200} height={200} alt="Product thumbnail" />
            </Link>

            <div className="flex flex-col justify-end gap-7">
              <div className="flex flex-col justify-end gap-1">
                <Link href={`/pages/products/${product.id}`}>
                  <span className="font-bold	">{product.title}</span>
                </Link>
                <h1>Price: {product.price}</h1>
              </div>
              <button
                className="bg-accent rounded-2xl p-2 hover:bg-accenthover"
                onClick={() => addToBasket(product)}
              >
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-card p-5 m-4 rounded-2xl h-min ">
        <div className="  rounded-2xl flex justify-between">
          <h1 className="font-bold	">Basket</h1>

          <h1>{productQuantity}</h1>
        </div>
        <ul>
          {basketProducts.map((basketProduct) => (
            <div antal={basketProduct.id} className="flex justify-between my-4">
              <li>
                <div key={basketProduct.id}>{basketProduct.title}</div>
              </li>
              <button onClick={() => removeFromBasket(basketProduct)}>
                <FaRegTrashCan />
              </button>
            </div>
          ))}
        </ul>
        <button className="bg-accenthover hover:bg-accent rounded-2xl p-2 hover:bg-accenthover mt-10">
          <Link href={`/pages/payment?items=${selectedProducts}`}>Pay now!</Link>
        </button>
      </section>
    </div>
  );
}
