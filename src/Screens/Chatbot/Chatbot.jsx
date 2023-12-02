import React from "react";

export default function Chatbot() {
  return (
    <div className="w-full">
      <div className="w-full fixed top-30 h-14 bg-[#ea580c] flex justify-center items-center">
        <p className="text-lg font-bold text-white">Chatbot</p>
      </div>
      <div className="w-full h-[70%] bg-slate-600 flex justify-center items-center">
        <p>THIS IS CART</p>
      </div>
      <div className="w-full fixed bottom-14 h-20 bg-slate-300 flex justify-start items-center px-4 gap-3">
        <input className="w-[60%] h-12 rounded-lg" />
        <button className=" w-[15%] bg-[#ea580c] h-12 rounded-lg">Send</button>
      </div>
    </div>
  );
}
