import React from "react";
import { Link } from "react-router-dom";

//components
import ProductCard from "../Products/ProductCard";

//data
import { products } from "../../data";

//swiper js compooent
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const MostPopular = () => {
  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2>محبوب ترین</h2>
        <Link to="/">مشاهده همه</Link>
      </div>

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
          {products
            .filter((product) => product.popular)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MostPopular;
