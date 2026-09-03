import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import {
    Bell,
    BookOpen,
    GraduationCap,
    LayoutDashboard,
    Menu,
    Trophy,
    X,
} from "lucide-react"

const links = [
    {
        label: "Dashboard",
        path: "/student/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Available Exams",
        path: "/student/exams",
        icon: BookOpen,
    },
    {
        label: "Results",
        path: "/student/results",
        icon: Trophy,
    },
]

export default function StudentLayout() {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50">
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
                />
            )}

            <div className="flex min-h-screen">
                <aside
                    className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                <GraduationCap size={21} />
                            </div>

                            <span className="text-xl font-bold text-slate-900">
                                CBT<span className="text-indigo-600">Pro</span>
                            </span>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="border-b border-slate-100 p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                                RO
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    Raphael Onuoha
                                </p>

                                <p className="text-xs text-slate-500">
                                    Student
                                </p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 space-y-1 p-4">
                        {links.map((item) => {
                            const Icon = item.icon

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive
                                            ? "bg-indigo-50 text-indigo-600"
                                            : "text-slate-600 hover:bg-slate-50"
                                        }`
                                    }
                                >
                                    <Icon size={19} />
                                    {item.label}
                                </NavLink>
                            )
                        })}
                    </nav>
                </aside>

                <div className="min-w-0 flex-1">
                    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
                        <button
                            onClick={() => setOpen(true)}
                            className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                        >
                            <Menu size={22} />
                        </button>

                        <div className="hidden lg:block">
                            <p className="text-sm text-slate-500">
                                Student Portal
                            </p>
                        </div>

                        <button className="ml-auto rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
                            <Bell size={20} />
                        </button>
                    </header>

                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}