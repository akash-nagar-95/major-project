// import React from "react";
import { RankCoin } from "../../../assets/png";

const RankCard = (props) => {
    // const { rank="", progress="", points="" } = props || [];
    const { rank="", points="" } = props || {};
  return (
    <div className="bg-[#0F0F1A] rounded-2xl p-2 w-90 h-[280px] text-white shadow-lg">
      
      <div className="flex justify-between text-sm text-gray-300">
        <span>{rank}</span> 
        <select id="ranks" name="ranks">
          <option value="bronze">See all ranks</option>
          <option value="silver">Bronze</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
          <option value="diamond">Diamond</option>
        </select>
      </div>

      <div className="relative flex justify-center items-center my-4">
        <img
          src={RankCoin}    // it need to be changed (rank ke acccording progress show krni he)
          alt="Coin"
          className="w-30 h-30"
        />
      </div>

      <div className="flex justify-center gap-20 mb-2">
      <div className="flex flex-col text-sm mt-2">
        <span className="text-yellow-400 text-lg font-semibold">{points}</span>
        <span className=" text-gray-400">remaining to rank up</span>
      </div>

      <button className="bg-[#0177DB] text-white w-25 h-10 mt-3 py-2 rounded-lg hover:[#483C6F] hover:scale-105">
        View Chest
      </button>
      </div>
    </div>
  );
};

export default RankCard;