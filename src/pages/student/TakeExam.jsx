import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    AlertTriangle,
    ChevronLeft,
    ChevronRight,
    Clock3,
    Flag,
    Send,
    X,
} from "lucide-react"

const questions = [
    {
        id: 1,
        text: "Which phase of a compiler converts a stream of characters into tokens?",
        options: [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation",
        ],
    },
    {
        id: 2,
        text: "Which data structure is commonly used for a symbol table?",
        options: [
            "Hash Table",
            "Queue",
            "Stack",
            "Array only",
        ],
    },
    {
        id: 3,
        text: "What does LL(1) mean in compiler design?",
        options: [
            "Left-to-right scan, leftmost derivation, one lookahead symbol",
            "Left-to-right scan, rightmost derivation",
            "One lexical layer",
            "Linear language parser",
        ],
    },
    {
        id: 4,
        text: "Which compiler phase checks whether expressions and statements are semantically valid?",
        options: [
            "Semantic Analysis",
            "Lexical Analysis",
            "Code Generation",
            "Linking",
        ],
    },
    {
        id: 5,
        text: "Which structure usually represents the grammatical structure of source code?",
        options: [
            "Parse Tree",
            "Hash Table",
            "Queue",
            "Register Table",
        ],
    },
]

export default function TakeExam() {
    const navigate = useNavigate()

    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const [flagged, setFlagged] = useState([])
    const [secondsLeft, setSecondsLeft] = useState(60 * 60)
    const [showSubmit, setShowSubmit] = useState(false)

    const currentQuestion = questions[currentIndex]

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft((previous) => {
                if (previous <= 1) {
                    clearInterval(interval)
                    navigate("/student/result/1")
                    return 0
                }

                return previous - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [navigate])

    function selectAnswer(optionIndex) {
        setAnswers((previous) => ({
            ...previous,
            [currentQuestion.id]: optionIndex,
        }))
    }

    function toggleFlag() {
        setFlagged((previous) =>
            previous.includes(currentQuestion.id)
                ? previous.filter((id) => id !== currentQuestion.id)
                : [...previous, currentQuestion.id],
        )
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return [hours, minutes, secs]
            .map((value) => String(value).padStart(2, "0"))
            .join(":")
    }

    const answeredCount = Object.keys(answers).length

    return (
        <div className="min-h-screen bg-slate-100">
            <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
                    <div>
                        <p className="text-xs font-semibold text-indigo-600">
                            CSC 401
                        </p>

                        <h1 className="font-bold text-slate-900">
                            Compiler Construction
                        </h1>
                    </div>

                    <div
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-sm font-bold ${secondsLeft < 600
                                ? "bg-red-50 text-red-600"
                                : "bg-slate-100 text-slate-700"
                            }`}
                    >
                        <Clock3 size={17} />
                        {formatTime(secondsLeft)}
                    </div>
                </div>
            </header>

            <div className="mx-auto grid max-w-7xl gap-6 p-5 lg:grid-cols-[1fr_300px]">
                <main className="rounded-2xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between border-b border-slate-100 p-5">
                        <div>
                            <p className="text-sm font-semibold text-slate-800">
                                Question {currentIndex + 1} of {questions.length}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                Select the best answer.
                            </p>
                        </div>

                        <button
                            onClick={toggleFlag}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${flagged.includes(currentQuestion.id)
                                    ? "bg-amber-50 text-amber-700"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                        >
                            <Flag size={16} />
                            Flag
                        </button>
                    </div>

                    <div className="p-5 md:p-8">
                        <h2 className="text-lg font-semibold leading-8 text-slate-900 md:text-xl">
                            {currentQuestion.text}
                        </h2>

                        <div className="mt-7 space-y-3">
                            {currentQuestion.options.map((option, index) => {
                                const selected =
                                    answers[currentQuestion.id] === index

                                return (
                                    <button
                                        key={option}
                                        onClick={() => selectAnswer(index)}
                                        className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${selected
                                                ? "border-indigo-500 bg-indigo-50"
                                                : "border-slate-200 hover:border-indigo-200 hover:bg-slate-50"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${selected
                                                    ? "border-indigo-600 bg-indigo-600 text-white"
                                                    : "border-slate-300 text-slate-500"
                                                }`}
                                        >
                                            {String.fromCharCode(65 + index)}
                                        </span>

                                        <span className="text-sm font-medium text-slate-700">
                                            {option}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 p-5">
                        <button
                            disabled={currentIndex === 0}
                            onClick={() =>
                                setCurrentIndex((previous) => previous - 1)
                            }
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 disabled:opacity-40"
                        >
                            <ChevronLeft size={17} />
                            Previous
                        </button>

                        {currentIndex < questions.length - 1 ? (
                            <button
                                onClick={() =>
                                    setCurrentIndex((previous) => previous + 1)
                                }
                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
                            >
                                Next
                                <ChevronRight size={17} />
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowSubmit(true)}
                                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white"
                            >
                                Submit
                                <Send size={16} />
                            </button>
                        )}
                    </div>
                </main>

                <aside className="space-y-5">
                    <section className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h2 className="font-bold text-slate-900">
                            Question Navigator
                        </h2>

                        <div className="mt-5 grid grid-cols-5 gap-2">
                            {questions.map((question, index) => {
                                const isAnswered =
                                    answers[question.id] !== undefined

                                const isFlagged = flagged.includes(question.id)

                                const isCurrent = currentIndex === index

                                return (
                                    <button
                                        key={question.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-10 rounded-lg text-sm font-semibold ${isCurrent
                                                ? "bg-indigo-600 text-white"
                                                : isFlagged
                                                    ? "bg-amber-100 text-amber-700"
                                                    : isAnswered
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-slate-100 text-slate-500"
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                )
                            })}
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h2 className="font-bold text-slate-900">
                            Progress
                        </h2>

                        <div className="mt-5 flex items-center justify-between text-sm">
                            <span className="text-slate-500">
                                Answered
                            </span>

                            <span className="font-bold text-slate-900">
                                {answeredCount}/{questions.length}
                            </span>
                        </div>

                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full bg-indigo-600 transition-all"
                                style={{
                                    width: `${(answeredCount / questions.length) * 100
                                        }%`,
                                }}
                            />
                        </div>

                        <button
                            onClick={() => setShowSubmit(true)}
                            className="mt-5 w-full rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                        >
                            Submit Examination
                        </button>
                    </section>
                </aside>
            </div>

            {showSubmit && (
                <SubmitModal
                    answered={answeredCount}
                    total={questions.length}
                    onClose={() => setShowSubmit(false)}
                    onSubmit={() => navigate("/student/result/1")}
                />
            )}
        </div>
    )
}

function SubmitModal({
    answered,
    total,
    onClose,
    onSubmit,
}) {
    const unanswered = total - answered

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-5">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <AlertTriangle size={21} />
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                    >
                        <X size={18} />
                    </button>
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-950">
                    Submit examination?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    You will not be able to change your answers after submitting.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-green-50 p-4">
                        <p className="text-xs text-green-600">
                            Answered
                        </p>

                        <p className="mt-1 text-xl font-bold text-green-700">
                            {answered}
                        </p>
                    </div>

                    <div className="rounded-xl bg-red-50 p-4">
                        <p className="text-xs text-red-600">
                            Unanswered
                        </p>

                        <p className="mt-1 text-xl font-bold text-red-700">
                            {unanswered}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600"
                    >
                        Continue Exam
                    </button>

                    <button
                        onClick={onSubmit}
                        className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}