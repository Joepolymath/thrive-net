import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <Image className="h-10 w-10 m-3" alt="logo" src={Logo} />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={UserIcon} title="SignIn" />
    </div>
  );
};

export default Sidebar;
