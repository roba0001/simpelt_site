import Link from "next/link";
import Image from "next/image";
import { BsFillBasket3Fill } from "react-icons/bs";

export default async function Page() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  let basketArray = [];
  return (
    <div className="flex justify-between">
      <section className="grid grid-cols-3 ">
        {data.products.map((product) => (
          <div>
            <Link href={`/pages/products/${product.id}`}>
              {" "}
              <Image src={product.thumbnail} width={250} height={250} alt="Product thumbnail" />
            </Link>

            <div className="flex justify-around">
              <div>
                <Link href={`/pages/products/${product.id}`}>{product.title}</Link>
                <h1>Price: {product.price}</h1>
              </div>

              <Link href={`#`}>
                <BsFillBasket3Fill size={30} onClick={addToBasket} />
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h1 className="bg-lime-500">Basket</h1>
      </section>
    </div>
  );

  function addToBasket(product) {
    basketArray.concat(product);
    console.log(basketArray);
  }
}
