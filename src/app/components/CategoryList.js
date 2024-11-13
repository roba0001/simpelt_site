export default async function Page() {
  // let response =  if (chosenCategory===0){
  //   await fetch ("https://dummyjson.com/products/categories")
  // } else {
  //   await fetch (`https://dummyjson.com/products/${chosenCategory}`)
  // }

  let response = await fetch("https://dummyjson.com/products/categories");
  let data = await response.json();

  return (
    <div>
      <form>
        <label htmlFor="categories">Categories: </label>
        <select name="categories" id="categories">
          {data.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
