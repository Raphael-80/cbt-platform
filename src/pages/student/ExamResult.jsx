import { Link } from "react-router-dom"
import {
    CheckCircle2,
    Home,
    RotateCcw,
    Trophy,
} from "lucide-react"

export default function ExamResult() {
    const score = 82

    return (
        <div className="min-h-screen bg-slate-50 p-5">
            <div className="mx-auto flex min-h-[90vh] max-w-2xl items-center justify-center">
                <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-10">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                        <Trophy size={36} />
                    </div>

                    <p className="mt-6 text-sm font-semibold text-indigo-600">
                        CSC 401
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-slate-950">
                        Examination Completed
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Your examination has been submitted successfully.
                    </p>

                    <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-green-100">
                        <div>
                            <p className="text-4xl font-bold text-slate-950">
                                {score}%
                            </p>

                            <p className="mt-1 text-xs font-semibold text-green-600">
                                PASSED
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                        <ResultStat
                            label="Correct"
                            value="41"
                        />

                        <ResultStat
                            label="Wrong"
                            value="9"
                        />

                        <ResultStat
                            label="Total"
                            value="50"
                        />
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">
                        <CheckCircle2 size={18} />
                        Result saved successfully
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/student/dashboard"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white"
                        >
                            <Home size={17} />
                            Dashboard
                        </Link>

                        <Link
                            to="/student/results"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600"
                        >
                            <RotateCcw size={17} />
                            View Results
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ResultStat({ label, value }) {
    return (
        <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-400">
                {label}
            </p>

            <p className="mt-1 text-xl font-bold text-slate-900">
                {value}
            </p>
        </div>
    )
}