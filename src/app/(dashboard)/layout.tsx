import Sidebar from "@components/Sidebar/Sidebar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${inter.className} grid grid-cols-[220px,_1fr] gap-4 bg-stone-100 p-4 text-stone-950`}
    >
      <Sidebar />
      {children}
    </div>
  );
};
export default DashboardLayout;
