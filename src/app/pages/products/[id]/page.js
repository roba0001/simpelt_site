import Meny from "@/app/components/Meny";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import { IoStarOutline } from "react-icons/io5";

export default async function ProductPage({ params }) {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();

  return (
    <div className=" p-6">
      <Meny />
      <Link className="flex gap-3 items-center mb-4 " href={"/pages/products"}>
        <MdArrowBack />
        <p>Back</p>
      </Link>

      <div className="grid grid-cols-2 place-items-center gap-8 bg-card border border-accent rounded-2xl">
        <div className="flex flex-col items-center">
          <Image
            src={product.thumbnail}
            width={500}
            height={500}
            alt="Product thumbnail"
            className="rounded-lg shadow-lg"
          />

          <div className="flex justify-center gap-2 mt-4 ">
            {product.images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={75}
                height={75}
                alt="Product image"
                className="rounded-md  shadow-sm"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-accent ">
            {product.title}
          </h1>
          <p className="text-lg">Category: {product.category}</p>
          <p>stock: {product.stock}</p>
          <p className=" leading-relaxed mr-3">{product.description}</p>
          <p> Price: {product.price}</p>
          <button className="bg-accent rounded-2xl p-2 hover:bg-accenthover">
            Add to basket
          </button>
        </div>
      </div>

      <h1 className="mt-8 text-xl font-semibold ">Reviews:</h1>
      <div className="flex  gap-5 justify-start mt-4 ">
        {product.reviews?.map((review, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-card p-4  shadow-md border border-accent rounded-2xl"
          >
            <h2 className="flex text-lg font-semibold">
              {[...Array(review.rating)].map((_, index) => (
                <IoStarOutline
                  key={index}
                  className={`text-${
                    review.rating >= 4 ? "yellow-500" : "gray-400"
                  }`}
                />
              ))}{" "}
              - {review.comment}
            </h2>
            <p>{review.reviewerEmail}</p>
            <p>{review.reviewerName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
