
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

const Card = (props) => {
  const { title = "", image = "", endTime = "", btntext = "", backContent = "" } = props || {};
  const timeLeft = useTimeout(endTime);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative min-w-[246px] h-[260px] background flex-shrink-0 " >

      <div className={`w-[246px] h-[330px] transition-transform duration-500 transform card-background ${flipped ? "rotate-y-180" : ""}`} style={{ transformStyle:"preserve-3d" }} >

        <div
          className="absolute w-full h-full bg-[#2F264E] rounded-2xl p-6 text-center shadow-lg flex flex-col items-center justify-between transition-all duration-300 hover:bg-[#3B2A67] hover:scale-105"
          style={{ backfaceVisibility: "hidden" }} >

            <img src={image} alt={title} className="mx-auto h-20 w-25  " />
            <p className="text-whitening whitespace-pre-wrap mt-1">{title}</p>

            <div className="bg-[#0177DB] text-white rounded-lg px-4 py-2 mt-6 mb-2 text-sm font-semibold hover:bg-blue-600">
              {
                btntext !== "" ? btntext : timeLeft
              }
            </div>

            <button onClick={() => setFlipped(!flipped)} className="absolute bottom-2 right-2 bg-transparent text-white p-1 rounded-full text-xs shadow-md " >🔄</button>
        </div>

        <div className="absolute w-full h-full bg-[#1E1B36] rounded-2xl p-6 text-white flex items-center justify-center text-center transform rotate-y-180" style={{ backfaceVisibility: "hidden" }}>
          <p className="whitespace-pre-wrap">{backContent}</p>

          <button onClick={() => setFlipped(!flipped)} className="absolute bottom-2 right-2 bg-white p-1 rounded-full text-xs shadow-md hover:bg-gray-200"> 🔄 </button>
        </div>
      </div>
    </div>
  );
};

export default Card;


