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
    <div>
      <Meny />
      <Link
        className="flex  gap-3 items-center mb-4 bg-accent rounded-2xl p-2 hover:bg-accenthover"
        href={"/pages/products"}
      >
        <MdArrowBack />
        <p>Back</p>
      </Link>

      <div className="grid grid-cols-2 place-items-center gap-8 bg-[rgb(255, 250, 239)]">
        <div className="flex flex-col items-center">
          <Image
            src={product.thumbnail}
            width={500}
            height={500}
            alt="Product thumbnail"
            className="rounded-lg shadow-lg"
          />

          <div className="flex justify-center gap-2 mt-4">
            {product.images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={75}
                height={75}
                alt="Product image"
                className="rounded-md border border-bfg-[rgb(232, 226, 197)] shadow-sm"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold ">{product.title}</h1>
          <p className="text-lg text-gray-600">Category: {product.category}</p>
          <p className="text-gray-500 leading-relaxed">{product.description}</p>
        </div>
      </div>

      <h1 className="mt-8 text-xl font-semibold ">Reviews:</h1>
      <div className="flex flex-wrap gap-5 justify-start mt-4 ">
        {product.reviews?.map((review, index) => (
          <div
            key={index}
            className="w-full md:w-[32%] bg-card p-4 rounded-lg shadow-md border border-bg-accent pb-0.5"
          >
            <h2 className=" flex text-lg font-semibold">
              {[...Array(review.rating)].map((_, index) => (
                <IoStarOutline key={index} />
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
