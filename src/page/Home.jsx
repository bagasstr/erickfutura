import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full desktop:py-[8rem] mobile:px-4 mobile:py-28"
    >
      <div className="containers">
        <div className="flex justify-between">
          {/* Hero Kiri */}
          <div className="desktop:w-[30rem] mt-10 mobile:mt-0 ">
            <h2 className="text-text/70 text-lg mobile:text-xs font-semibold relative">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <hr className="w-[23rem] mb-3 bg-secc/70 h-[.2rem] rounded-full" />
            <h1 className="text-5xl mb-5 font-bold text-black/90 mobile:text-3xl mobile:w-[250px]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-base text-black/50 leading-6 mobile:text-sm mobile:w-[250px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptate consequuntur impedit doloremque
              temporibus error deserunt esse maxime nostrum recusandae?
            </p>
            <a href="#product">
              <button className="bg-primary mobile:text-base hover:bg-secc px-4 py-2 text-white text-lg font-normal rounded-md mt-9">
                See Product
              </button>
            </a>
            {/* End Hero kiri */}

            {/* recent property */}
            <div className="mt-16 flex gap-x-4">
              <div className="border-l-2 border-black/10 pl-4">
                <h1 className="font-semibold text-lg">100+</h1>
                <h1 className="font-normal text-black/70 mobile:text-sm">
                  Listed Property
                </h1>
              </div>
              <div className="border-l-2 border-black/10 pl-4">
                <h1 className="font-semibold text-lg">100+</h1>
                <h1 className="font-normal text-black/70 mobile:text-sm">
                  Sold Property
                </h1>
              </div>
              <div className="border-l-2 border-black/10 pl-4">
                <h1 className="font-semibold text-lg">100+</h1>
                <h1 className="font-normal text-black/70 mobile:text-sm">
                  Happy Customer
                </h1>
              </div>
            </div>
            {/* end recent property */}
          </div>
          {/* Image Kanan */}
          <div className="w-[350px] relative mobile:hidden">
            <img src="/hero.jpg" alt="" className="rounded-lg" />
          </div>
          <div className="absolute mobile:hidden p-2 rounded-md top-72 text-white left-[47rem] w-[200px] bg-white drop-shadow-xl">
            <img
              src="/pattern_image-kiri.jpg"
              alt=""
              className="w-full rounded-lg"
            />
            <div className="w-full flex flex-wrap gap-x-1 text-xs text-black/40 mt-3 font-normal">
              <p>2 bedroom</p>
              <p>1 bathroom</p>
            </div>
            <h1 className="w-full text-xs font-normal mt-2 text-black/40">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            {/* End Image kanan */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
