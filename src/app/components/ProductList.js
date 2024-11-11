import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <div>
      <section className="grid grid-cols-3 place-items-center">
        {data.products.map((product) => (
          <div>
            <div>
              <Link href={`/pages/products/${product.id}`}>
                {" "}
                <Image src={product.thumbnail} width={250} height={250} alt="Product thumbnail" />
              </Link>
              <Link href={`/pages/products/${product.id}`}>{product.title}</Link>
            </div>
            <Link href={`#`}>
              <button>Put in basket</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
