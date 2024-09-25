import Dashboard from "@components/Dashboard/Dashboard";
import Sidebar from "@components/Sidebar/Sidebar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={`${inter.className} grid h-screen grid-cols-[220px,_1fr] gap-4 p-4 bg-stone-100 text-stone-950`}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};
export default Home;
