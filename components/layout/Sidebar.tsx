//code for sidebar
import { signOut } from 'next-auth/react';
import { GiExitDoor } from 'react-icons/gi';
import { MdCircleNotifications } from 'react-icons/md';
import { HiOutlineHome } from 'react-icons/hi';
import { CiUser } from 'react-icons/ci';

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarReactButton from './SidebarReactButton';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: HiOutlineHome,
      label: 'Home',
      href: '/',
    },
    {
      icon: MdCircleNotifications,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: CiUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-3">
        <div className="flex flex-col items-end">
          <div className="lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}   //href is usually unique
                alert={item.alert}
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {currentUser && <SidebarItem onClick={() => signOut()} icon={GiExitDoor} label="Logout" />}
            <SidebarReactButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
