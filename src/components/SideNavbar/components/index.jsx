// import React from 'react';
import useSidebar from '../hook/useSidebar';
import SidebarItem from './sidebarItem';
import { sidebarData } from '../constants';
import { bars } from '../../../assets/svg';
 

const Sidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();
  return (
    <div className='relative w-10 z-40' >
        <div className={`bg-transparent text-white pl-1 w-30 transition-all duration-300 ${isOpen ? "h-full" : "h-0"} fixed`} >
            <button onClick={toggleSidebar} className='bg-transparent mt-5 p-1 rounded-full mb-0' >
                <img src={bars} alt="bar image" />
            </button>
            <div className={`relative top-0 left-1 w-30 bg-transparent transition-all duration-300 ${isOpen ? "h-full opacity-100 " : "h-0 opacity-0 overflow-hidden"}`} >
                <ul className="mt-10 space-y-4 w-30 bg-transparent" >
                    {
                        sidebarData.map((item) => (
                            <SidebarItem key={item.id} item={item} />
                        ))
                    }
                </ul>
            </div>
            {isOpen && (
                    <div className='fixed inset-0 bg-black opacity-50 md:hidden' onClick={toggleSidebar} > </div>
            )}

        </div>
    </div>
  )
}

export default Sidebar;
