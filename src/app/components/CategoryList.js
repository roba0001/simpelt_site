// "use client";
// import React, { useState } from "react";

export default async function Page() {
  let response = await fetch("https://dummyjson.com/products/categories");
  let data = await response.json();

  //   indsæt use state her

  return (
    <div>
      <form>
        <label for="categories">Categories: </label>
        <select name="categories" id="categories">
          {data.map((category) => (
            <option key={data.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
