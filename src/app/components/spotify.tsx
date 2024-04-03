"use client";

import { useEffect, useState } from "react";
import { MySongType } from "../api/get-current-song/route";
import Image from "next/image";

export const Spotify = () => {
    const [data, setData] = useState<MySongType | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/get-current-song");
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);
    return (
        <section className="border-t-gray-600 border-b-gray-600 border-t-2 border-b-2 py-4">
            <div className="flex gap-4">
                <h3 className="font-bold text-md mb-4">Spotify</h3>
                <p className="text-gray-400">current song</p>
            </div>

            {/* <a href="https://accounts.spotify.com/en/authorize?client_id=de6639a10c114561a57008b21f0075fc&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
"> Get code </a>
            {title && <p>{title}</p>} */}
            {data && <div className="flex gap-8">
                <Image
                    src={data.picture}
                    height={300}
                    width={300}
                    className="h-40 w-40"
                    alt=""
                    priority={false}
                />

                <div className="flex flex-col justify-center">
                    <h2 className="font-bold">{data.name}</h2>
                    <p>{data.artist_name}</p>
                </div>


            </div>}
        </section>
    );
}