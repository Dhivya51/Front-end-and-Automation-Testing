import { useState } from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

 function ProductList({
  products,
  title,
  bannerTitle,
  bannerText,
}) {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  const sortedProducts = [...filteredProducts];

if (sortOption === "low-high") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sortOption === "high-low") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

if (sortOption === "name") {
  sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
}

if (sortOption === "rating") {
  sortedProducts.sort((a, b) => b.rating - a.rating);
}

  return (
    <section className="products">

     <div className="banner">
  <h1>{bannerTitle}</h1>
  <p>{bannerText}</p>
</div>

<h2>{title}</h2>

      <input
        type="text"
        placeholder="🔍 Search Candles..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  className="sort-box"
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
>
  <option value="">Sort Products</option>
  <option value="low-high">Price: Low → High</option>
  <option value="high-low">Price: High → Low</option>
  <option value="name">Name (A → Z)</option>
  <option value="rating">Highest Rating</option>
</select>

      <div className="product-grid">
        {sortedProducts.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
      </div>

    </section>
  );
}

export default ProductList;