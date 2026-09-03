const results = [
    {
        code: "CSC 401",
        title: "Compiler Construction",
        score: 82,
        date: "Sep 5, 2026",
    },
    {
        code: "CSC 305",
        title: "Data Structures",
        score: 78,
        date: "Aug 28, 2026",
    },
    {
        code: "CSC 405",
        title: "Computer Networks",
        score: 76,
        date: "Aug 20, 2026",
    },
]

export default function StudentResults() {
    return (
        <div className="p-5 md:p-8">
            <h1 className="text-3xl font-bold text-slate-950">
                Results
            </h1>

            <p className="mt-2 text-slate-500">
                View your previous examination performance.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="divide-y divide-slate-100">
                    {results.map((result) => (
                        <div
                            key={`${result.code}-${result.date}`}
                            className="flex items-center justify-between gap-5 p-5"
                        >
                            <div>
                                <p className="text-xs font-semibold text-indigo-600">
                                    {result.code}
                                </p>

                                <h2 className="mt-1 font-semibold text-slate-900">
                                    {result.title}
                                </h2>

                                <p className="mt-1 text-xs text-slate-500">
                                    {result.date}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-2xl font-bold text-slate-950">
                                    {result.score}%
                                </p>

                                <p className="text-xs font-semibold text-green-600">
                                    Passed
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}