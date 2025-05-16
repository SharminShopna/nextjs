"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


const page = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3001/api/menus")
        .then((res)=>setData(res.data))
        .catch((e)=>console.log(e.message))
    }, [axios, setData])


    return (
        <div className="pt-32 max-w-7xl mx-auto px-4 pb-12">
            <h1 className="text-4xl mt-24 mb-24 font-extrabold text-center text-[#D2B48C]">----ALL MENU ITEMS----</h1>
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((menu, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-[#D2B48C] border-dashed">
                        <img src={menu.photo} alt={menu.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-[#281818]">{menu.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">{menu.category} | {menu.dateOnly}</p>
                            <p className="text-gray-700 mb-4">{menu.description}</p>
                            <div className="text-sm text-gray-600">
                                <p><span className="font-medium">By:</span> {menu.user}</p>
                                <p><span className="font-medium">Email:</span> {menu.email}</p>
                            </div>
                            <div>
                            <button className="btn bg-red-700 text-white">Delete</button>
                            {/* <Link className="btn bg-[#D2B48C]">Update</Link> */}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    );
};

export default page;