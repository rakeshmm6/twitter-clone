import React from 'react';
import Image from 'next/image';
import { BiHeart, BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa6';

const FeedCard: React.FC = () => {
    return (
        <div className="border border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer border-l-0 border-r-0 border-b-0">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1 rounded-full">
                    <Image
                        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                        alt="user-image"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="col-span-11">
                    <h2>rakesh</h2>
                    <p>Is it just me or everyone else?Do you fell the code quality decrease as the project size increases? Just refactored a lot of bad code.</p>
                    <div className="flex justify-between mt-5 text-xl items-center pr-2 w-[90%]">
                        <div><BiMessageRounded/></div>
                        <div><FaRetweet/></div>
                        <div><BiHeart/></div>
                        <div><BiUpload/></div>
                        

                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default FeedCard;
