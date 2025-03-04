import React from "react";

const Preview = ({ aboutData }) => {
  return (
    <div className="grid grid-cols-3 text-white">
      <div className="bg-teal-900 p-7">
        <div className="mb-8 flex flex-col px-2 items-center">
          <img className=" h-32 w-32 rounded-full object-cover" src />
          <h1 className="text-center mt-8 font-bold text-2xl">
            {aboutData.firstName +
              " " +
              aboutData.middleName +
              "  " +
              aboutData.lastName}
          </h1>
          <div className="mt-4 border border-t border-gray-300 w-12"></div>
          <h2 className="mt-2 font-semibold text-xl">
            {aboutData.designation}
          </h2>
        </div>
        <div className="px-2">
          <h2 className="font-bold text-lg">ABOUT</h2>
          <div className="my-2 border border-t border-teal-950/25 w-full"></div>
          <h3 className="text-sm my-1">{aboutData.phoneNo}</h3>
          <h3 className="text-sm my-1">{aboutData.email}</h3>
          <h3 className="text-sm my-1">{aboutData.address}</h3>
          <h3 className="text-sm my-1">{aboutData.summary}</h3>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Preview;
