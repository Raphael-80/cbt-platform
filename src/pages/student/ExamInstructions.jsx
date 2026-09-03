import { Link, useNavigate } from "react-router-dom"
import {
    AlertTriangle,
    ArrowLeft,
    BookOpen,
    CheckCircle2,
    Clock3,
    FileQuestion,
} from "lucide-react"

export default function ExamInstructions() {
    const navigate = useNavigate()

    return (
        <div className="p-5 md:p-8">
            <Link
                to="/student/exams"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500"
            >
                <ArrowLeft size={16} />
                Back to Exams
            </Link>

            <div className="mx-auto mt-8 max-w-3xl">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                    <p className="text-sm font-semibold text-indigo-600">
                        CSC 401
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-slate-950">
                        Compiler Construction
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Mid-Semester Examination
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        <Info
                            icon={FileQuestion}
                            label="Questions"
                            value="50"
                        />

                        <Info
                            icon={Clock3}
                            label="Duration"
                            value="60 mins"
                        />

                        <Info
                            icon={BookOpen}
                            label="Total Marks"
                            value="50"
                        />
                    </div>

                    <div className="mt-8 border-t border-slate-100 pt-7">
                        <h2 className="font-bold text-slate-950">
                            Instructions
                        </h2>

                        <div className="mt-4 space-y-3">
                            {[
                                "You have 60 minutes to complete this examination.",
                                "Select only one answer for each question.",
                                "You may move between questions before submitting.",
                                "Your answers are automatically saved.",
                                "The exam will automatically submit when the timer reaches zero.",
                                "Do not refresh or close the browser during the examination.",
                            ].map((instruction) => (
                                <div
                                    key={instruction}
                                    className="flex gap-3 text-sm leading-6 text-slate-600"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="mt-1 shrink-0 text-green-500"
                                    />

                                    {instruction}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                        <AlertTriangle
                            size={20}
                            className="shrink-0 text-amber-600"
                        />

                        <p className="text-sm leading-6 text-amber-800">
                            Once you start the examination, the timer begins immediately.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/student/exam/1")}
                        className="mt-8 w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white hover:bg-indigo-700"
                    >
                        Start Examination
                    </button>
                </section>
            </div>
        </div>
    )
}

function Info({ icon: Icon, label, value }) {
    return (
        <div className="rounded-xl bg-slate-50 p-4">
            <Icon size={18} className="text-indigo-600" />

            <p className="mt-3 text-xs text-slate-400">
                {label}
            </p>

            <p className="mt-1 font-bold text-slate-900">
                {value}
            </p>
        </div>
    )
}