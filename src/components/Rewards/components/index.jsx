import {useCallback,useMemo}from 'react';
import { rewardbanner } from '../../../assets/png';
import { chestkeyData } from '../constant/chestKeyData';
import { rewardKeyData } from '../constant/rewardkeyData';
import { rewardCalenderData } from '../constant/rewardCalendarData';
import Card from '../../../common/RewardKeyCard/components';
import RankCard from './RankCard';

function Rewards() {
      const scroll = useCallback((id,direction) => {
        const container = document.getElementById(id);     // need to be changed (useRef() ka use karna he)
        const scrollAmount = direction === "left" ? -300 : 300;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      },[]);

      const chestKeyCards = useMemo(() => {
        return chestkeyData.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} btntext={item.btntext} backContent={item.backContent}/>
        ));
      }, []);
    
      const rewardKeyCards = useMemo(() => {
        return rewardKeyData.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} endTime={item.endDate} backContent={item.backContent} />
        ));
      }, []);
    
      const rewardCalenderCards = useMemo(() => {
        return rewardCalenderData.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} endTime={item.endDate} backContent={item.backContent} />
        ));
      }, []);
      
  return (
    <div className='background w-full h-full overflow-hidden no-scrollbar mt-15' >
        <div className="ml-10 px-10 py-3 ">
            <img className="h-60 w-full" src={rewardbanner}/>  
        </div>
        <div className='w-full pl-10 h-85'>
            <div className='w-full h-5 ml-12 mb-2  flex flex-row'>
                <span className='text-whitening'>Your Current Rank</span>
                <span className='text-whitening ml-64'>Chest Keys</span>
                <div className='ml-225 space-x-4'>
                  <button onClick={() => scroll("chestKey","left")} className=" text-whitening text-lg ">&larr;</button>
                  <button onClick={() => scroll("chestKey","right")} className=" text-whitening text-lg z-10">&rarr;</button>
                </div>
            </div>
            
            <div className='w-full h-85 px-10 flex flex-row '>
                <div className='w-100 h-85 no-scrollbar'>
                  <RankCard rank="unranked" points="10000,00"/>
                </div>
                <div id='chestKey' className='h-85 ml-5 flex flex-row overflow-x-auto no-scrollbar space-x-4'>
                {chestKeyCards}  
                </div>
            </div>
        </div>

        <div className='w-full h-85 pl-10'>
            <div className='w-full h-5 pl-10 mb-2 mt-8 flex flex-row'>
                <h3 className='text-white'>Rewards Keys</h3>
                <div className='ml-319 space-x-4'>
                   <button onClick={() => scroll("rewardKey","left")} className=" text-white text-lg ">&larr;</button>
                   <button onClick={() => scroll("rewardKey","right")} className=" text-white text-lg ">&rarr;</button>
                </div>
            </div>
            <div id="rewardKey"className='h-85 pl-10 flex flex-row overflow-x-auto no-scrollbar space-x-4'>
            {rewardKeyCards}
            </div>
        </div>

        <div className=' w-full h-85 ml-10'>
            <div className='w-full h-5 pl-10 mb-2 mt-8 flex flex-row'>
              <h3 className='text-white'>Rewards Calender</h3>

              <div className='ml-310 space-x-4'>
                <button onClick={() => scroll("rewardCalender","left")} className=" text-white text-lg ">&larr;</button>
                <button onClick={() => scroll("rewardCalender","right")} className=" text-white text-lg z-10">&rarr;</button>
              </div>
          </div>
          <div id="rewardCalender" className=' h-85 pl-10 flex flex-row overflow-x-auto no-scrollbar space-x-4 '>
            {rewardCalenderCards}
          </div>
        </div>

    </div>
  )
}

export default Rewards;