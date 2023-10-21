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
        h-19
        w-19
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-green-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <FaReact size={48} color="red" />
    </div>
  );
};

export default SidebarLogo;
