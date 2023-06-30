import Navbar from "@/components/UI/Navbar";
import Sidebar from "@/app/user-panel/[components]/Sidebar";

export default async function Layout({ children }: any) {

    return (
      <>
        <Navbar/>
        <div style={{display: "flex", flexDirection: "row"}}>
            <Sidebar/>
            {children}
        </div>
      </>
    )
  }