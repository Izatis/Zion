import React from 'react';
import Image from "next/image";

const Card = ({item}) => {
    return (
        <div>
            <Image src={item.img}/>

            <div className="flex flex-col mt-3">
                <p className="text-black text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-700 text-base font-normal tracking-wider">от {item.price}₽</p>
            </div>
        </div>
    );
};

export default Card;