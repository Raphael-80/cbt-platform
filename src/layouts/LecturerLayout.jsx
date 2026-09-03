import { useState } from "react"
import { Menu, Bell } from "lucide-react"
import { Outlet } from "react-router-dom"
import LecturerSidebar from "../components/lecturer/LecturerSideBar"

export default function LecturerLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="flex min-h-screen">
                <LecturerSidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <div className="min-w-0 flex-1">
                    {/* Topbar */}
                    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur md:px-8">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                        >
                            <Menu size={22} />
                        </button>

                        <div className="hidden lg:block">
                            <p className="text-sm text-slate-500">
                                Lecturer Portal
                            </p>
                        </div>

                        <div className="ml-auto flex items-center gap-3">
                            <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
                                <Bell size={20} />

                                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
                            </button>

                            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                            <div className="hidden text-right sm:block">
                                <p className="text-sm font-semibold text-slate-800">
                                    Dr. Raphael
                                </p>

                                <p className="text-xs text-slate-500">
                                    Lecturer
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                                DR
                            </div>
                        </div>
                    </header>

                    {/* Page */}
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}