//code for logo in sidebar
import { useRouter } from "next/router";
import {FaReact} from 'react-icons/fa';

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-red-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <FaReact size={38} color="white" />
    </div>
  );
};

export default SidebarLogo;
