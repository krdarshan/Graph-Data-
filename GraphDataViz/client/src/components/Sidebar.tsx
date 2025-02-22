import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Fuel, 
  Clock, 
  Settings, 
  History,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Fuel, label: "Fuel Consumption", href: "/fuel" },
    { icon: Clock, label: "Operating Hours", href: "/hours" },
    { icon: History, label: "History", href: "/history" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside className={cn(
      "h-[calc(100vh-3.5rem)] border-r bg-background transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-1 p-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={item.href === "/" ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  collapsed && "justify-center px-2"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </Button>
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          className="m-2"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </aside>
  );
}
