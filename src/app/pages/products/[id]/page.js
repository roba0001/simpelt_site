import Meny from "@/app/components/Meny";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();

  return (
    <div>
      <Meny />
      <Link className="flex gap-3 items-center" href={"/pages/products"}>
        <MdArrowBack />
        <p>Back</p>
      </Link>
      <div className="grid grid-cols-2 place-items-center">
        <div>
          <Image src={product.thumbnail} width={500} height={500} alt="Product thumbnail" />
          <div className="flex justify-between">
            {product.images.map((image) => (
              <Image src={image} width={75} height={75} alt="Product image" />
            ))}
          </div>
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>

      <h1>Reviews:</h1>
      <div className="flex gap-5 justify-between">
        {product.reviews.map((review) => (
          <div>
            {/* spørg omkring stjerner */}
            <h2>
              {review.rating} - {review.comment}
            </h2>

            <h2>{review.reviewerEmail}</h2>
            <h2>{review.reviewerName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
