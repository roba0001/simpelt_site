"use client";
import React, { useState } from "react";

export default async function Page() {
  let response = await fetch("https://dummyjson.com/products/categories");
  let data = await response.json();

  return (
    <div>
      <form>
        <label for="categories">Categories: </label>
        <select name="categories" id="categories">
          {data.map((category) => (
            <option value={category.name}>{category.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
