"use client";
import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { ProductData } from "@/type";
import { getProductData } from "@/lib/getData";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const fetchProducts = async () => {
      const data = await getProductData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setShowMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (search.trim()) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products.slice(0, 5));
    }
  }, [search, products]);

  const handleSearch = () => {
    if (!search.trim()) return;

    const matchingProduct = products.find((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (matchingProduct) {
      router.push(`/product/${matchingProduct.slug.current}`);
      setSearch("");
      setShowSuggestions(false);
      setShowMobileSearch(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (product: ProductData) => {
    router.push(`/product/${product.slug.current}`);
    setSearch("");
    setShowSuggestions(false);
    setShowMobileSearch(false);
  };

  const handleMobileSearchToggle = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Desktop Search */}
      <div className="relative hidden sm:inline-flex h-12 text-base items-center gap-2 justify-between">
        <CiSearch className="text-lg absolute left-2.5 mt-.5 text-blue-600" />
        <input
          type="text"
          placeholder="Search courses..."
          className="flex-1 h-10 outline-none bg-transparent bg-white placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 sm:pr-28 pr-12 placeholder:text-sm sm:placeholder:text-md"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowSuggestions(true)}
          value={search}
        />
        {search && (
          <IoMdClose
            className="text-accent/50 hover:text-blue-600 hoverEffect cursor-pointer absolute right-20"
            onClick={() => setSearch("")}
          />
        )}
        <button
          onClick={handleSearch}
          className=" bg-blue-600 text-white px-3.5 py-1.5 mr-1.5 text-sm hover:bg-blue-700 hoverEffect font-medium absolute right-0"
        >
          Search
        </button>
      </div>

      {/* Mobile Search Icon */}
      <div className="sm:hidden">
        <button
          onClick={handleMobileSearchToggle}
          className="p-4 rounded-full hover:bg-white/10 transition-colors"
        >
          <CiSearch className="text-3xl w-16 text-white" />
        </button>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="fixed top-12 left-0 right-0 bg-black border-b border-gray-700 p-4 sm:hidden z-50 w-full">
          <div className="relative w-full">
            <SearchIcon className="text-lg absolute left-2.5 top-1/2 -translate-y-1/2 text-blue-600" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full h-10 outline-none bg-white placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-24 placeholder:text-sm"
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowSuggestions(true)}
              value={search}
              autoFocus
            />
            {search && (
              <IoMdClose
                className="text-accent/50 hover:text-blue-600 hoverEffect cursor-pointer absolute right-16 top-1/2 -translate-y-1/2"
                onClick={() => setSearch("")}
              />
            )}
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 text-sm hover:bg-blue-700 hoverEffect font-medium"
            >
              Search
            </button>
          </div>

          {mounted && showSuggestions && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-[100] max-h-96 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.slug.current}
                    onClick={() => handleSuggestionClick(product)}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <p className="font-medium text-sm">{product.title}</p>
                    <p className="text-xs text-gray-500">{product.level} • {product.hour} hrs</p>
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">No courses found</div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Desktop Suggestions */}
      {mounted && showSuggestions && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-[100] max-h-96 overflow-y-auto hidden sm:block">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.slug.current}
                onClick={() => handleSuggestionClick(product)}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <p className="font-medium text-sm">{product.title}</p>
                <p className="text-xs text-gray-500">{product.level} • {product.hour} hrs</p>
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500 text-sm">No courses found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
