import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="grid grid-cols-9 mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </main>
  );
}
