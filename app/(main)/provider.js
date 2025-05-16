import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./_components/Sidebar";
import Welcome from "./dashboard/_components/Welcome";

function Provider({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/**<SidebarTrigger />**/}

      <div className="w-full mt-5 p-10 bg-gray-100">
        <Welcome />
        {children}
      </div>
    </SidebarProvider>
  );
}

export default Provider;
