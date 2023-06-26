import Navbar from "@/components/UI/Navbar";
import Sidebar from "@/components/UI/Sidebar";

export default function Layout({ children }: any) {
    return (
      <>
        <Navbar/>
        <div>
            <Sidebar/>
            {children}
        </div>
      </>
    )
  }