import React from "react";
import { logo } from "../assets";
import { favicon } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex flex-row items-center gap-2">
          <img src={favicon} alt="" className="w-8 h-8 object-contain" />
          <h2 className="w-28 text-white text-2xl font-extrabold leading-[1.15]">
            Digest
          </h2>
        </div>

        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://x.com/abdulahjalaly")}
        >
          Follow on X
        </button>
      </nav>
      <h1 className="head_text">
        Digest any article in a snap! with <br className="max-md:hidden" />
        <span className="orange_gradient">
          Power of GPT-4o at Your Fingertips.
        </span>
      </h1>
      <h2 className="desc">
        Transform any URL into a concise, insightful summary with our advanced
        GPT-4o model.{" "}
        <span className="orange_gradient">
          Unlock the Essence of Every Article for FREE.
        </span>
      </h2>
    </header>
  );
};

export default Hero;
