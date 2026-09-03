import { Link } from "react-router-dom"
import {
    ArrowRight,
    BookOpen,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Trophy,
} from "lucide-react"

const upcomingExams = [
    {
        id: 1,
        title: "Compiler Construction",
        code: "CSC 401",
        questions: 50,
        duration: 60,
        date: "Sep 5, 2026",
        time: "10:00 AM",
    },
    {
        id: 2,
        title: "Operating Systems",
        code: "CSC 403",
        questions: 45,
        duration: 60,
        date: "Sep 8, 2026",
        time: "1:00 PM",
    },
]

const results = [
    {
        course: "CSC 305",
        title: "Data Structures",
        score: 82,
    },
    {
        course: "CSC 405",
        title: "Computer Networks",
        score: 76,
    },
]

export default function StudentDashboard() {
    return (
        <div className="p-5 md:p-8">
            <div>
                <p className="text-sm font-medium text-indigo-600">
                    Student Dashboard
                </p>

                <h1 className="mt-1 text-3xl font-bold text-slate-950">
                    Welcome back, Raphael
                </h1>

                <p className="mt-2 text-slate-500">
                    View your upcoming examinations and recent performance.
                </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Stat
                    icon={BookOpen}
                    label="Upcoming Exams"
                    value="2"
                />

                <Stat
                    icon={CheckCircle2}
                    label="Completed"
                    value="7"
                />

                <Stat
                    icon={Trophy}
                    label="Average Score"
                    value="79%"
                />
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">
                <section className="rounded-2xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between border-b border-slate-100 p-5">
                        <div>
                            <h2 className="font-bold text-slate-950">
                                Upcoming Exams
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Your next scheduled examinations.
                            </p>
                        </div>

                        <Link
                            to="/student/exams"
                            className="text-sm font-semibold text-indigo-600"
                        >
                            View all
                        </Link>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {upcomingExams.map((exam) => (
                            <div
                                key={exam.id}
                                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <p className="text-xs font-semibold text-indigo-600">
                                        {exam.code}
                                    </p>

                                    <h3 className="mt-1 font-bold text-slate-900">
                                        {exam.title}
                                    </h3>

                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <BookOpen size={14} />
                                            {exam.questions} questions
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <Clock3 size={14} />
                                            {exam.duration} minutes
                                        </span>
                                    </div>
                                </div>

                                <div className="sm:text-right">
                                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-700 sm:justify-end">
                                        <CalendarDays size={15} />
                                        {exam.date}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">
                                        {exam.time}
                                    </p>

                                    <Link
                                        to={`/student/exams/${exam.id}`}
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600"
                                    >
                                        View exam
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h2 className="font-bold text-slate-950">
                        Recent Results
                    </h2>

                    <div className="mt-5 space-y-4">
                        {results.map((result) => (
                            <div
                                key={result.course}
                                className="rounded-xl bg-slate-50 p-4"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-semibold text-indigo-600">
                                            {result.course}
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-slate-800">
                                            {result.title}
                                        </p>
                                    </div>

                                    <span className="text-xl font-bold text-slate-950">
                                        {result.score}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/student/results"
                        className="mt-5 block text-center text-sm font-semibold text-indigo-600"
                    >
                        View all results
                    </Link>
                </section>
            </div>
        </div>
    )
}

function Stat({ icon: Icon, label, value }) {
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