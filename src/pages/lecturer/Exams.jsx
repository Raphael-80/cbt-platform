import { useState } from "react"
import { Link } from "react-router-dom"
import {
    BookOpen,
    CalendarDays,
    Clock3,
    Copy,
    Edit3,
    Eye,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
    Users,
} from "lucide-react"

const exams = [
    {
        id: 1,
        title: "Compiler Construction",
        code: "CSC 401",
        questions: 50,
        duration: 60,
        students: 86,
        status: "Active",
        date: "Sep 1, 2026",
    },
    {
        id: 2,
        title: "Data Structures",
        code: "CSC 305",
        questions: 40,
        duration: 50,
        students: 74,
        status: "Completed",
        date: "Aug 28, 2026",
    },
    {
        id: 3,
        title: "Operating Systems",
        code: "CSC 403",
        questions: 45,
        duration: 60,
        students: 91,
        status: "Scheduled",
        date: "Sep 5, 2026",
    },
    {
        id: 4,
        title: "Database Management",
        code: "CSC 407",
        questions: 35,
        duration: 45,
        students: 68,
        status: "Draft",
        date: "Not published",
    },
    {
        id: 5,
        title: "Computer Networks",
        code: "CSC 405",
        questions: 50,
        duration: 60,
        students: 102,
        status: "Completed",
        date: "Aug 20, 2026",
    },
]

export default function Exams() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")

    const filteredExams = exams.filter((exam) => {
        const matchesSearch =
            exam.title.toLowerCase().includes(search.toLowerCase()) ||
            exam.code.toLowerCase().includes(search.toLowerCase())

        const matchesFilter =
            filter === "All" || exam.status === filter

        return matchesSearch && matchesFilter
    })

    return (
        <div className="p-5 md:p-8">
            {/* Header */}
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm font-medium text-indigo-600">
                        Examination Management
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                        Exams
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Create, manage and monitor your examinations.
                    </p>
                </div>

                <Link
                    to="/lecturer/exams/create"
                    className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                    <Plus size={18} />
                    Create Exam
                </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MiniStat
                    label="Total Exams"
                    value="12"
                    icon={BookOpen}
                />

                <MiniStat
                    label="Active"
                    value="1"
                    icon={Clock3}
                />

                <MiniStat
                    label="Scheduled"
                    value="3"
                    icon={CalendarDays}
                />

                <MiniStat
                    label="Completed"
                    value="8"
                    icon={Eye}
                />
            </div>

            {/* Main */}
            <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {/* Toolbar */}
                <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Search */}
                    <div className="relative max-w-md flex-1">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search exams..."
                            className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2 overflow-x-auto">
                        {["All", "Active", "Scheduled", "Completed", "Draft"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => setFilter(item)}
                                    className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${filter === item
                                            ? "bg-indigo-600 text-white"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {item}
                                </button>
                            ),
                        )}
                    </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-x-auto lg:block">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Examination
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Questions
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Duration
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Students
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {filteredExams.map((exam) => (
                                <ExamRow key={exam.id} exam={exam} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile */}
                <div className="divide-y divide-slate-100 lg:hidden">
                    {filteredExams.map((exam) => (
                        <MobileExamCard key={exam.id} exam={exam} />
                    ))}
                </div>

                {filteredExams.length === 0 && (
                    <div className="p-12 text-center">
                        <BookOpen
                            size={30}
                            className="mx-auto text-slate-300"
                        />

                        <p className="mt-3 font-semibold text-slate-700">
                            No exams found
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Try changing your search or filter.
                        </p>
                    </div>
                )}
            </section>
        </div>
    )
}

function MiniStat({ label, value, icon: Icon }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={19} />
            </div>

            <p className="mt-4 text-sm text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-950">
                {value}
            </p>
        </div>
    )
}

function StatusBadge({ status }) {
    const styles = {
        Active: "bg-green-50 text-green-700",
        Scheduled: "bg-blue-50 text-blue-700",
        Completed: "bg-slate-100 text-slate-600",
        Draft: "bg-amber-50 text-amber-700",
    }

    return (
        <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]
                }`}
        >
            {status}
        </span>
    )
}

function ExamRow({ exam }) {
    return (
        <tr className="transition hover:bg-slate-50">
            <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <BookOpen size={18} />
                    </div>

                    <div>
                        <p className="font-semibold text-slate-900">
                            {exam.title}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                            {exam.code} · {exam.date}
                        </p>
                    </div>
                </div>
            </td>

            <td className="px-6 py-5 text-sm text-slate-600">
                {exam.questions}
            </td>

            <td className="px-6 py-5 text-sm text-slate-600">
                {exam.duration} min
            </td>

            <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users size={16} className="text-slate-400" />
                    {exam.students}
                </div>
            </td>

            <td className="px-6 py-5">
                <StatusBadge status={exam.status} />
            </td>

            <td className="px-6 py-5">
                <div className="flex items-center gap-1">
                    <ActionButton icon={Eye} title="View" />

                    <ActionButton icon={Edit3} title="Edit" />

                    <ActionButton icon={Copy} title="Duplicate" />

                    <ActionButton icon={Trash2} title="Delete" danger />

                    <ActionButton
                        icon={MoreHorizontal}
                        title="More"
                    />
                </div>
            </td>
        </tr>
    )
}

function MobileExamCard({ exam }) {
    return (
        <div className="p-5">
            <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <BookOpen size={18} />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-900">
                            {exam.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            {exam.code}
                        </p>
                    </div>
                </div>

                <StatusBadge status={exam.status} />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                        Questions
                    </p>

                    <p className="mt-1 font-semibold">
                        {exam.questions}
                    </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                        Duration
                    </p>

                    <p className="mt-1 font-semibold">
                        {exam.duration}m
                    </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                        Students
                    </p>

                    <p className="mt-1 font-semibold">
                        {exam.students}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600">
                    View
                </button>

                <button className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white">
                    Edit
                </button>
            </div>
        </div>
    )
}

function ActionButton({ icon: Icon, title, danger }) {
    return (
        <button
            title={title}
            className={`rounded-lg p-2 transition ${danger
                    ? "text-slate-400 hover:bg-red-50 hover:text-red-600"
                    : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                }`}
        >
            <Icon size={16} />
        </button>
    )
}