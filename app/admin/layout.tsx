"use client";

import "./admin.css";
import { AppSidebar } from "./components/app-sidebar";
import { PanelLeft } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden dark bg-neutral-900 text-foreground font-sans">
      <AppSidebar isCollapsed={isCollapsed} />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4 text-foreground">
          <button
            className="p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <PanelLeft className="h-4 w-4" />
          </button>
          <div className="h-4 w-[1px] bg-border mx-2"></div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Building Your Application</span>
            <span className="text-muted-foreground">&gt;</span>
            <span className="text-foreground">Data Fetching</span>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 text-foreground">
          {children}
        </div>
      </main>
    </div>
  );
}
