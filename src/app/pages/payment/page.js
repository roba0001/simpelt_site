"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const items = searchParams.get("items");

  const parseItems = (items) => {
    return items.split(",").map((item) => {
      const id = item;
      return { id: parseInt(id) };
    });
  };

  const parsedItems = items ? parseItems(items) : [];
  const parsedItem = parsedItems.map((parsedItem) => ({ parsedItem }));

  console.log(Array.from(parsedItem));

  //   tag fat i array gennem url'en
}
