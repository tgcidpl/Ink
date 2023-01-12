import React from "react";

function Banner() {
  return (
    <div className="container flex flex-wrap justify-center bg-primaryColor">
      <div className="w-6/12 sm:w-4/12 py-4">
        <img
          src="../../src/assets/bannerProto.png"
          alt="banner"
          className="shadow rounded max-w-full h-auto align-middle border-none"
        />
      </div>
      <div className="my-auto">
        <p className="text-2xl p-8">Wyborne Tatuaze no kufaaaa</p>
      </div>
    </div>
  );
}

export default Banner;
