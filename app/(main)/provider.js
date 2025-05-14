import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./_components/Sidebar";

function Provider({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div>{children}</div>
    </SidebarProvider>
  );
}

export default Provider;
