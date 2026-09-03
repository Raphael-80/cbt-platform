import { Link } from "react-router-dom"
import {
    BookOpen,
    CalendarDays,
    Clock3,
    LockKeyhole,
} from "lucide-react"

const exams = [
    {
        id: 1,
        title: "Compiler Construction",
        code: "CSC 401",
        questions: 50,
        duration: 60,
        date: "Sep 5, 2026",
        time: "10:00 AM",
        status: "available",
    },
    {
        id: 2,
        title: "Operating Systems",
        code: "CSC 403",
        questions: 45,
        duration: 60,
        date: "Sep 8, 2026",
        time: "1:00 PM",
        status: "locked",
    },
]

export default function AvailableExams() {
    return (
        <div className="p-5 md:p-8">
            <h1 className="text-3xl font-bold text-slate-950">
                Available Exams
            </h1>

            <p className="mt-2 text-slate-500">
                View your scheduled and currently available examinations.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {exams.map((exam) => (
                    <div
                        key={exam.id}
                        className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <BookOpen size={22} />
                            </div>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${exam.status === "available"
                                        ? "bg-green-50 text-green-700"
                                        : "bg-slate-100 text-slate-500"
                                    }`}
                            >
                                {exam.status === "available"
                                    ? "Available"
                                    : "Scheduled"}
                            </span>
                        </div>

                        <p className="mt-5 text-xs font-semibold text-indigo-600">
                            {exam.code}
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-slate-950">
                            {exam.title}
                        </h2>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <ExamMeta
                                icon={BookOpen}
                                label={`${exam.questions} Questions`}
                            />

                            <ExamMeta
                                icon={Clock3}
                                label={`${exam.duration} Minutes`}
                            />

                            <ExamMeta
                                icon={CalendarDays}
                                label={exam.date}
                            />

                            <ExamMeta
                                icon={Clock3}
                                label={exam.time}
                            />
                        </div>

                        {exam.status === "available" ? (
                            <Link
                                to={`/student/exams/${exam.id}`}
                                className="mt-6 block rounded-xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-700"
                            >
                                View Exam
                            </Link>
                        ) : (
                            <button
                                disabled
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-400"
                            >
                                <LockKeyhole size={16} />
                                Not Yet Available
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

function ExamMeta({ icon: Icon, label }) {
    return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
            <Icon size={16} className="text-slate-400" />
            {label}
        </div>
    )
}