import {
  Calendar,
  LayoutDashboard,
  List,
  Settings,
  WalletCards,
} from "lucide-react";

export const SideBarData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Schedule Interviews",
    icon: Calendar,
    path: "/schedule-interviews",
  },
  {
    title: "All Interviews",
    icon: List,
    path: "/all-interviews",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/billing",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
