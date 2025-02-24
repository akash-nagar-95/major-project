// import React from 'react';

const sidebarItem = ({item}) => (
    <li>
        <a href={item.path}>
            <img src={item.icon}  alt="icons" className="bg-transparent rounded-full" />
        </a>
    </li>

);


export default sidebarItem;
