
import {FaXTwitter} from 'react-icons/fa6';
import {BiHomeHeart, BiListUl, BiSearch, BiSolidBell, BiSolidBookmark, BiUser} from 'react-icons/bi';
import {GoMail} from 'react-icons/go';
import { Inter } from 'next/font/google';
import FeedCard from '@/components/FeedCard/page';

const inter= Inter({subsets: ["latin"]});
interface TwitterSideBarButton{
  title:string;
  icon:React.ReactNode;
}
const sideBarItems: TwitterSideBarButton[] = [{
  title: 'Home',
  icon: <BiHomeHeart/>
},
{
  title: 'Explore',
  icon: <BiSearch/>
},
{
  title: 'Notifications',
  icon: <BiSolidBell/>
},
{
  title: 'Messages',
  icon: <GoMail/>
},
{
  title: 'Bookmarks',
  icon: <BiSolidBookmark/>
},
{
  title: 'Profile',
  icon: <BiUser/>
}]

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-1 ml-2 ">
        <div className="text-2xl hover:bg-gray-800 rounded-full p-4 h-fit w-fit cursor-pointer transition-all">
        <FaXTwitter/>
        </div>
        <div className="mt-2 text-xl pr-4">
          <ul>
          {sideBarItems.map(item => <li className="flex justify-start gap-4 items-center hover:bg-gray-800 rounded-full cursor-pointer transition-all mt-2
            p-4 w-fit" key={item.title}>
            <span className="text-2xl">{item.icon}</span>
            <span>{item.title}</span>
            </li>)}
        </ul> 
        <div className="mt-5 px-4">
        <button className="bg-[#1C9BEF] rounded-full items-center w-full py-2 px-4 text-lg">Twitter</button>
        </div>  
        </div>
        </div>
      <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-400 ">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        
      </div>
      <div className="col-span-3"></div>
      </div>
      </div>
    
  );  
}
