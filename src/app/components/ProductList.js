"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ProductList() {
  const [products, setProducts] = useState(undefined);
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  function addToBasket(product) {
    // tilføj antal prop
    // hvis den findes, tilføj antal
    setBasketProducts(basketProducts.concat(product));
  }

  function removeFromBasket(id) {
    setBasketProducts(basketProducts.filter((product) => product.id !== id));
  }

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-3 ">
        {products.products.map((product) => (
          <div key={product.id}>
            <Link href={`/pages/products/${product.id}`}>
              {" "}
              <Image
                src={product.thumbnail}
                width={250}
                height={250}
                alt="Product thumbnail"
              />
            </Link>

            <div className="flex justify-around">
              <div>
                <Link href={`/pages/products/${product.id}`}>
                  {product.title}
                </Link>
                <h1>Price: {product.price}</h1>
              </div>
              <button onClick={() => addToBasket(product)}>
                <BsFillBasket3Fill size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <section>
        <h1 className="bg-lime-500">Basket</h1>
        <ul>
          {basketProducts.map((basketProduct) => (
            <div className="flex">
              <li key={basketProduct.id}>{basketProduct.title}</li>
              <button onClick={() => removeFromBasket(basketProduct)}>
                <FaRegTrashCan />
              </button>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}
