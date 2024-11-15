"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  //   hele strengen
  const items = searchParams.get("items");

  const parseItems = (items) => {
    return items.split(",").map((item) => {
      const id = item;
      return { id: parseInt(id) };
    });
  };

  const parsedItems = items ? parseItems(items) : [];

  //   har ingen betydning
  //   const parsedItem = parsedItems.map((parsedItem) => ({ parsedItem }));

  //   console.log(Array.from(parsedItem));
  console.log("items:", items);

  return (
    <div>
      <h1>Betaling</h1>
      <p>Du har valgt følgende produkter:</p>
      <ul>
        {parsedItems.map((item) => (
          <li key={item.id}>Produkt ID: {item.id}</li>
        ))}
      </ul>
      <button>
        <Link href={`/pages/payment?items=${items}`}>Betal nu!</Link>
      </button>
    </div>
  );
}
