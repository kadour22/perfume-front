
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Bleu de Chanel",
    category: "Men",
    price: 129.99,
    oldPrice: 149.99,
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=85",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Dior Sauvage",
    category: "Men",
    price: 119.99,
    oldPrice: null,
    rating: 4.8,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=85",
    badge: "Popular",
  },
  {
    id: 3,
    name: "YSL Libre",
    category: "Women",
    price: 139.99,
    oldPrice: 159.99,
    rating: 4.9,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=85",
    badge: "New",
  },
  {
    id: 4,
    name: "Creed Aventus",
    category: "Men",
    price: 229.99,
    oldPrice: null,
    rating: 5.0,
    reviews: 72,
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&q=85",
    badge: "Exclusive",
  },
  {
    id: 5,
    name: "Tom Ford Oud Wood",
    category: "Unisex",
    price: 199.99,
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=85",
    badge: null,
  },
  {
    id: 6,
    name: "Miss Dior",
    category: "Women",
    price: 149.99,
    oldPrice: 169.99,
    rating: 4.9,
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=85",
    badge: "Trending",
  },
];

const categories = ["All", "Men", "Women", "Unisex"];

const ProductList = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-[#faf8f4] px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b88938]">
            Discover Our Collection
          </span>

          <h2 className="mt-4 font-serif text-4xl text-[#17130e] sm:text-5xl">
            Our Luxury Perfumes
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
            Explore our exclusive collection of premium fragrances
            crafted to leave a lasting impression.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-16 bg-[#d9a441]" />
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#17130e] text-[#e9bd69]"
                  : "border border-[#ded6c9] text-gray-600 hover:border-[#c39542] hover:text-[#9b702d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULTS */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#17130e]">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          <span className="text-xs uppercase tracking-wider text-gray-400">
            Premium Collection
          </span>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl border border-[#e8e2d9] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden bg-[#f1eee9]">

                {product.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#17130e] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#e9bd69]">
                    {product.badge}
                  </span>
                )}

                {/* WISHLIST */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Toggle wishlist"
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-[#17130e] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={wishlist.includes(product.id) ? "#dc2626" : "none"}
                    stroke={wishlist.includes(product.id) ? "#dc2626" : "currentColor"}
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                  </svg>
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* PRODUCT INFO */}
              <div className="p-5">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b88938]">
                  {product.category} Fragrance
                </p>

                <h3 className="mt-2 font-serif text-xl text-[#17130e]">
                  {product.name}
                </h3>

                {/* RATING */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-[#d9a441]">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                  </div>

                  <span className="text-xs text-gray-400">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xl font-bold text-[#17130e]">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* ADD TO CART */}
                <button
                  onClick={() => onAddToCart?.(product)}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#17130e] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c39542] hover:text-black"
                >
                  <span>+</span>
                  Add to Cart
                </button>

              </div>
            </article>
          ))}

        </div>

        {/* VIEW ALL */}
        <div className="mt-14 text-center">
          <button className="rounded-full border border-[#c39542] px-10 py-3.5 text-sm font-semibold text-[#8e6426] transition hover:bg-[#17130e] hover:text-[#e9bd69]">
            Explore All Products →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductList;
