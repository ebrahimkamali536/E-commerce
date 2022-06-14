import React from "react";

//components
import FilterProducts from "./FilterProducts";
import ProductCard from "./ProductCard";

//data
import { products } from "../../data";

//swiper js compooent
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Products = () => {
  return (
    <div className="px-4">
      <h1 className="mb-6 font-bold">سبک خودتو پیدا کن</h1>
      <FilterProducts />
      <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="product-swiper"
      >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
