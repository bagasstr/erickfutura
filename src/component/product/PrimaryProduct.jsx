// Import Module
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import dataProduct from "../../data/dataProduct.json";
import product1 from "../../assets/productImage/product1.jpg";
import { MdLocationOn, MdArrowForward } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// Import Css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PrimaryProduct = () => {
  return (
    <>
      <div className="relative mt-20 w-full">
        <div className="containers">
          <div className="flex justify-between mobile:flex-col">
            <h1 className="font-semibold text-xl text-black/90">
              Property Populer
            </h1>
            <button className="bg-primary py-2 px-4 rounded-md text-white">
              <Link to={"/product"}>Lihat Semua</Link>
            </button>
          </div>
          <Swiper
            modules={[A11y, Navigation, Autoplay, Pagination]}
            spaceBetween={40}
            navigation={{
              prevEl: ".button-prev-slide",
              nextEl: ".button-next-slide",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            autoplay={true}
            className="mobile:w-[280px] desktop:w-full py-4 px-1"
          >
            {dataProduct.map((result, index) => {
              const { title, location, price, desc, desc1 } = result;
              return (
                <SwiperSlide className="flex justify-center">
                  <div
                    key={index}
                    className="bg-white rounded-[10px] w-[300px] shadow-cards"
                  >
                    <img
                      src={product1}
                      alt=""
                      className="w-full h-[250px] rounded-lg p-2"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-black/80">
                          {title}
                        </h1>
                        <h1 className="text-xl font-semibold text-primary">
                          {price}
                        </h1>
                      </div>
                      <div className=" flex items-center gap-x-1">
                        <MdLocationOn className="text-black/80" />
                        <h1 className="text-sm font-medium text-black/80">
                          {location}
                        </h1>
                      </div>
                      <div className="my-3">
                        <h1 className="font-normal  text-sm text-black/60">
                          {desc}
                        </h1>
                      </div>
                      <hr className="bg-black/10 h-[1.5px] my-2" />
                      <div className="text-xs font-medium text-black/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <h1>{desc1.LuasBangunan[0]}</h1>
                          <h1>{desc1.LuasBangunan[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.LuasTanah[0]}</h1>
                          <h1>{desc1.LuasTanah[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.KamarMandi[0]}</h1>
                          <h1>{desc1.KamarMandi[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.KamarTidur[0]}</h1>
                          <h1>{desc1.KamarTidur[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.Lantai[0]}</h1>
                          <h1>{desc1.Lantai[1]}</h1>
                        </div>
                      </div>
                      <Link to={"/"}>
                        <button className="bg-bg text-white px-4 py-2 font-medium rounded-md text-sm mt-8 w-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mobile:hidden">
            <div className="button-prev-slide text-5xl mobile:text-4xl absolute desktop:left-[6rem] text-primary top-[50%]">
              <IoChevronBack />
            </div>
            <div className="button-next-slide text-5xl mobile:text-4xl absolute right-[6rem] text-primary top-[50%]">
              <IoChevronForward />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20 w-full">
        <div className="containers">
          <div className="flex justify-between mobile:flex-col">
            <h1 className="font-semibold text-xl text-black/90">
              Property Terbaru
            </h1>
            <button className="bg-primary py-2 px-4 rounded-md text-white">
              <Link to={"/product"}>Lihat Semua</Link>
            </button>
          </div>
          <Swiper
            modules={[A11y, Navigation, Autoplay, Pagination]}
            spaceBetween={40}
            navigation={{
              prevEl: ".button-prev-slide",
              nextEl: ".button-next-slide",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            autoplay={true}
            className="mobile:w-[280px] desktop:w-full py-4 px-1"
          >
            {dataProduct.map((result, index) => {
              const { title, location, price, desc, desc1 } = result;
              return (
                <SwiperSlide className="flex justify-center">
                  <div
                    key={index}
                    className="bg-white rounded-[10px] w-[300px] shadow-cards"
                  >
                    <img
                      src={product1}
                      alt=""
                      className="w-full h-[250px] rounded-lg p-2"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-black/80">
                          {title}
                        </h1>
                        <h1 className="text-xl font-semibold text-primary">
                          {price}
                        </h1>
                      </div>
                      <div className=" flex items-center gap-x-1">
                        <MdLocationOn className="text-black/80" />
                        <h1 className="text-sm font-medium text-black/80">
                          {location}
                        </h1>
                      </div>
                      <div className="my-3">
                        <h1 className="font-normal  text-sm text-black/60">
                          {desc}
                        </h1>
                      </div>
                      <hr className="bg-black/10 h-[1.5px] my-2" />
                      <div className="text-xs font-medium text-black/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <h1>{desc1.LuasBangunan[0]}</h1>
                          <h1>{desc1.LuasBangunan[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.LuasTanah[0]}</h1>
                          <h1>{desc1.LuasTanah[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.KamarMandi[0]}</h1>
                          <h1>{desc1.KamarMandi[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.KamarTidur[0]}</h1>
                          <h1>{desc1.KamarTidur[1]}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <h1>{desc1.Lantai[0]}</h1>
                          <h1>{desc1.Lantai[1]}</h1>
                        </div>
                      </div>
                      <Link to={"/"}>
                        <button className="bg-bg text-white px-4 py-2 font-medium rounded-md text-sm mt-8 w-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mobile:hidden">
            <div className="button-prev-slide text-5xl mobile:text-4xl absolute desktop:left-[6rem] text-primary top-[50%]">
              <IoChevronBack />
            </div>
            <div className="button-next-slide text-5xl mobile:text-4xl absolute right-[6rem] text-primary top-[50%]">
              <IoChevronForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryProduct;
