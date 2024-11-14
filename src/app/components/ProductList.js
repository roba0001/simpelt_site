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
    setBasketProducts(basketProducts.concat(product));
    setProductQuantity(productQuantity + 1);

    if (basketProducts.some((basketProduct) => basketProduct.id === product.id)) {
      // her skal den tilføje tal istedet for produktet igen
      addedProduct.quantity++;
      console.log("addedProductQuantity: ", addedProduct.quantity);

      console.log("basket includes this product");
    }

    // if (basketProducts.id)
    // if (newTask.id === product && productQuantity === 1) {
    // } else {
    //   console.log("flere end 1");
    // }

    // console.log("basketproducts: ", basketProducts);
    // console.log(product.id);
  }

  function removeFromBasket(id) {
    setBasketProducts(basketProducts.filter((product) => product.id !== id));
  }

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-3 ">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/pages/products/${product.id}`}>
              {" "}
              <Image src={product.thumbnail} width={250} height={250} alt="Product thumbnail" />
            </Link>

            <div className="flex justify-around">
              <div>
                <Link href={`/pages/products/${product.id}`}>{product.title}</Link>
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
        <div className=" bg-blue-200 flex justify-between">
          <h1>Basket</h1>
          <h1>{productQuantity}</h1>
        </div>
        <ul>
          {basketProducts.map((basketProduct) => (
            <div antal={basketProduct.id} className="flex justify-between">
              <li>
                <div key={basketProduct.id}>{basketProduct.title}</div>
              </li>
              <button onClick={() => removeFromBasket(basketProduct)}>
                <FaRegTrashCan />
              </button>
            </div>
          ))}
        </ul>
        <button>
          <Link href={`/pages/payment?items=${selectedProducts}`}>Pay now!</Link>
        </button>
      </section>
    </div>
  );
}
