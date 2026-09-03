import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileQuestion,
  MoreHorizontal,
  Plus,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

const stats = [
    {
        title: "Total Exams",
        value: "12",
        change: "+2",
        description: "from last month",
        icon: BookOpen,
    },
    {
        title: "Total Students",
        value: "348",
        change: "+18",
        description: "from last month",
        icon: Users,
    },
    {
        title: "Questions",
        value: "426",
        change: "+54",
        description: "from last month",
        icon: FileQuestion,
    },
    {
        title: "Average Score",
        value: "78%",
        change: "+4.2%",
        description: "from last month",
        icon: CheckCircle2,
    },
]

const recentExams = [
    {
        name: "Compiler Construction",
        code: "CSC 401",
        questions: 50,
        students: 86,
        status: "Active",
        date: "Today, 10:00 AM",
    },
    {
        name: "Data Structures",
        code: "CSC 305",
        questions: 40,
        students: 74,
        status: "Completed",
        date: "Aug 28, 2026",
    },
    {
        name: "Operating Systems",
        code: "CSC 403",
        questions: 45,
        students: 91,
        status: "Scheduled",
        date: "Sep 5, 2026",
    },
    {
        name: "Database Management",
        code: "CSC 407",
        questions: 35,
        students: 68,
        status: "Draft",
        date: "Not published",
    },
]

function statusStyles(status) {
    const styles = {
        Active: "bg-green-50 text-green-700",
        Completed: "bg-slate-100 text-slate-600",
        Scheduled: "bg-blue-50 text-blue-700",
        Draft: "bg-amber-50 text-amber-700",
    }

    return styles[status] || "bg-slate-100 text-slate-600"
}

export default function LecturerDashboard() {
    return (
        <div className="p-5 md:p-8">
            {/* Heading */}
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-medium text-indigo-600">
                        Tuesday, September 1, 2026
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                        Good morning, Dr. Raphael
                    </h1>

                    <p className="mt-2 text-sm text-slate-500 md:text-base">
                        Here's what's happening with your examinations.
                    </p>
                </div>

                <Link
                    to="/lecturer/exams/create"
                    className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                    <Plus size={18} />
                    Create Exam
                </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon

                    return (
                        <div
                            key={stat.title}
                            className="rounded-2xl border border-slate-200 bg-white p-5"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <Icon size={21} />
                                </div>

                                <button className="rounded-lg p-1 text-slate-400 hover:bg-slate-50">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>

                            <p className="mt-5 text-sm font-medium text-slate-500">
                                {stat.title}
                            </p>

                            <div className="mt-1 flex items-end gap-2">
                                <h2 className="text-2xl font-bold text-slate-950">
                                    {stat.value}
                                </h2>

                                <span className="mb-1 flex items-center text-xs font-semibold text-green-600">
                                    <ArrowUpRight size={13} />
                                    {stat.change}
                                </span>
                            </div>

                            <p className="mt-1 text-xs text-slate-400">
                                {stat.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            {/* Main Grid */}
            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_340px]">
                {/* Exams */}
                <section className="rounded-2xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between border-b border-slate-100 p-5">
                        <div>
                            <h2 className="font-bold text-slate-950">
                                Recent Exams
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Manage your latest examinations.
                            </p>
                        </div>

                        <Link
                            to="/lecturer/exams"
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                            View all
                        </Link>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {recentExams.map((exam) => (
                            <div
                                key={exam.code}
                                className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex min-w-0 items-center gap-4">
                                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 sm:flex">
                                        <BookOpen size={20} />
                                    </div>

                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="truncate font-semibold text-slate-900">
                                                {exam.name}
                                            </h3>

                                            <span
                                                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles(
                                                    exam.status,
                                                )}`}
                                            >
                                                {exam.status}
                                            </span>
                                        </div>

                                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                                            <span>{exam.code}</span>
                                            <span>{exam.questions} questions</span>
                                            <span>{exam.students} students</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-5 sm:justify-end">
                                    <div className="text-left sm:text-right">
                                        <p className="text-xs text-slate-400">
                                            {exam.status === "Active"
                                                ? "Started"
                                                : "Date"}
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-slate-700">
                                            {exam.date}
                                        </p>
                                    </div>

                                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Active Exam */}
                    <section className="overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-600 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                                LIVE EXAM
                            </span>

                            <span className="flex items-center gap-1.5 text-xs text-indigo-100">
                                <span className="h-2 w-2 rounded-full bg-white" />
                                Active
                            </span>
                        </div>

                        <h2 className="mt-6 text-xl font-bold">
                            Compiler Construction
                        </h2>

                        <p className="mt-1 text-sm text-indigo-100">
                            CSC 401
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-xl bg-white/10 p-3">
                                <p className="text-xs text-indigo-100">
                                    Participants
                                </p>

                                <p className="mt-1 text-lg font-bold">
                                    72 / 86
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/10 p-3">
                                <p className="text-xs text-indigo-100">
                                    Time left
                                </p>

                                <p className="mt-1 flex items-center gap-1 text-lg font-bold">
                                    <Clock3 size={16} />
                                    24:18
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/lecturer/exams"
                            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                        >
                            Monitor Exam
                            <ArrowUpRight size={17} />
                        </Link>
                    </section>

                    {/* Quick Actions */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h2 className="font-bold text-slate-950">
                            Quick Actions
                        </h2>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <Link
                                to="/lecturer/exams/create"
                                className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
                            >
                                <BookOpen
                                    size={19}
                                    className="text-indigo-600"
                                />

                                <p className="mt-3 text-sm font-semibold text-slate-800">
                                    New Exam
                                </p>
                            </Link>

                            <Link
                                to="/lecturer/questions"
                                className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
                            >
                                <FileQuestion
                                    size={19}
                                    className="text-indigo-600"
                                />

                                <p className="mt-3 text-sm font-semibold text-slate-800">
                                    Add Questions
                                </p>
                            </Link>

                            <Link
                                to="/lecturer/students"
                                className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
                            >
                                <Users
                                    size={19}
                                    className="text-indigo-600"
                                />

                                <p className="mt-3 text-sm font-semibold text-slate-800">
                                    Students
                                </p>
                            </Link>

                            <Link
                                to="/lecturer/results"
                                className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
                            >
                                <BarChart3
                                    size={19}
                                    className="text-indigo-600"
                                />

                                <p className="mt-3 text-sm font-semibold text-slate-800">
                                    Results
                                </p>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}