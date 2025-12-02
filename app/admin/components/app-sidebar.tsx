"use client"

import * as React from "react"
import Link from "next/link"
import {
  Bot,
  BookOpen,
  Frame,
  Map,
  PieChart,
  Settings2,
  ChevronRight,
  ChevronsUpDown,
  GalleryVerticalEnd,
  LayoutDashboard,
  ShoppingCart,
  NotepadText
} from "lucide-react"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Maer Doa",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },

  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Product",
      url: "/admin/product/list",
      icon: ShoppingCart,
      items: [
        { title: "List", url: "/admin/product/list" },
        { title: "Add", url: "/admin/product/add" },
      ],
    },
    {
      title: "Order",
      url: "/admin/order/list",
      icon: NotepadText,
      items: [
        { title: "List", url: "/admin/order/list" },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ isCollapsed }: { isCollapsed: boolean }) {
  const [activeTeam, setActiveTeam] = React.useState(data.teams[0])
  const [openSections, setOpenSections] = React.useState<string[]>([])

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  // Update data to reflect user requests
  const updatedNavMain = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
      items: [], // No sub-items
    },
    ...data.navMain.slice(1), // Keep other items
  ];

  return (
    <div
      className={`bg-bg-zinc-950 text-sidebar-foreground flex flex-col h-screen border-r border-none transition-all duration-300 ${isCollapsed ? 'w-[64px]' : 'w-[250px]'}`}
    >
      {/* Header / Team Switcher */}
      <div className="p-2">
        <div className={`flex items-center gap-2 p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shrink-0">
            <activeTeam.logo className="size-4" />
          </div>
          {!isCollapsed && (
            <>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeTeam.name}</span>
                <span className="truncate text-xs text-muted-foreground">{activeTeam.plan}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex-1 overflow-auto py-2">
        <div className="px-2 mb-6">
          {!isCollapsed && <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground">Platform</h3>}
          <div className="space-y-0.5">
            {updatedNavMain.map((item) => (
              <div key={item.title}>
                {item.items && item.items.length > 0 ? (
                  <>
                    <button
                      onClick={() => !isCollapsed && toggleSection(item.title)}
                      className={`group flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors ${isCollapsed ? 'justify-center' : 'justify-between'}`}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </div>
                      {!isCollapsed && <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openSections.includes(item.title) ? "rotate-90" : ""}`} />}
                    </button>
                    {!isCollapsed && openSections.includes(item.title) && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l border-sidebar-border pl-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.url}
                            className="block rounded-md px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className={`group flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? item.title : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / User */}
      <div className="p-2 border-t border-sidebar-border">
        <div className={`flex items-center gap-2 p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="h-8 w-8 rounded-lg overflow-hidden shrink-0">
            <img src={`/images/beluga.jpg`} alt={data.user.name} className="h-full w-full object-cover" />
          </div>
          {!isCollapsed && (
            <>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{data.user.name}</span>
                <span className="truncate text-xs text-muted-foreground">{data.user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
