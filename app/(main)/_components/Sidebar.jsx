"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SideBarData } from "@/services/Constants";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function AppSidebar() {
  const router = useRouter();
  const path = usePathname();

  return (
    <Sidebar className="bg-green-50 w-64 h-screen shadow-lg">
      {/* Header */}
      <SidebarHeader className="flex flex-col items-center justify-center p-4 border-b border-green-200">
        <h1 className="mt-5 text-2xl font-bold text-green-600">
          AI Interviewer
        </h1>
        <Button className="w-full mt-4 flex items-center space-x-2 bg-green-500 cursor-pointer hover:bg-green-600 text-white">
          <Plus className="w-5 h-5" />
          <Link
            href="/dashboard/create-new-interview"
            className="flex items-center space-x-2 cursor-pointer text-white"
          >
            Create New Interview
          </Link>
        </Button>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarMenu>
            {SideBarData.map((item, index) => (
              <SidebarMenuItem key={index} className="mb-2">
                <SidebarMenuButton
                  asChild
                  className={`${path == item.path && "bg-green-100"}`}
                >
                  <Link
                    href={item.path}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-green-500 hover:text-green-800 transition-colors duration-200"
                  >
                    <item.icon
                      className={`text-sm font-medium ${
                        path == item.path && "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        path == item.path && "text-primary"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 text-center text-sm text-green-600 border-t border-green-200">
        © 2025 AI Interviewer
      </SidebarFooter>
    </Sidebar>
  );
}
