import { NavLink } from "react-router-dom"
import {
    BarChart3,
    BookOpen,
    FileQuestion,
    GraduationCap,
    LayoutDashboard,
    LogOut,
    Settings,
    Users,
    X,
} from "lucide-react"

const navigation = [
    {
        name: "Dashboard",
        path: "/lecturer/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Exams",
        path: "/lecturer/exams",
        icon: BookOpen,
    },
    {
        name: "Questions",
        path: "/lecturer/questions",
        icon: FileQuestion,
    },
    {
        name: "Students",
        path: "/lecturer/students",
        icon: Users,
    },
    {
        name: "Results",
        path: "/lecturer/results",
        icon: BarChart3,
    },
]

export default function LecturerSidebar({ open, onClose }) {
    return (
        <>
            {/* Mobile Overlay */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
                    <NavLink to="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                            <GraduationCap size={21} />
                        </div>

                        <span className="text-xl font-bold text-slate-900">
                            CBT<span className="text-indigo-600">Pro</span>
                        </span>
                    </NavLink>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Lecturer */}
                <div className="border-b border-slate-100 p-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                            DR
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">
                                Dr. Raphael
                            </p>

                            <p className="truncate text-xs text-slate-500">
                                Lecturer
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 p-4">
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Main Menu
                    </p>

                    {navigation.map((item) => {
                        const Icon = item.icon

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`
                                }
                            >
                                <Icon size={19} />
                                {item.name}
                            </NavLink>
                        )
                    })}

                    <div className="my-5 border-t border-slate-100" />

                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        System
                    </p>

                    <NavLink
                        to="/lecturer/settings"
                        onClick={onClose}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${isActive
                                ? "bg-indigo-50 text-indigo-600"
                                : "text-slate-600 hover:bg-slate-50"
                            }`
                        }
                    >
                        <Settings size={19} />
                        Settings
                    </NavLink>
                </nav>

                {/* Logout */}
                <div className="border-t border-slate-100 p-4">
                    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600">
                        <LogOut size={19} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    )
}