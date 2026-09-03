import { Link, useNavigate } from "react-router-dom"
import {
    AlertTriangle,
    ArrowLeft,
    CalendarDays,
    Check,
    CheckCircle2,
    Clock3,
    FileQuestion,
    Globe2,
    Pencil,
    Shuffle,
    Users,
} from "lucide-react"

const questions = [
    {
        number: 1,
        question:
            "Which phase of a compiler converts the source program into tokens?",
        options: [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation",
        ],
        answer: 0,
        marks: 1,
    },
    {
        number: 2,
        question:
            "Which data structure is commonly used to implement a symbol table?",
        options: [
            "Hash Table",
            "Stack",
            "Queue",
            "Linked List only",
        ],
        answer: 0,
        marks: 1,
    },
    {
        number: 3,
        question:
            "What does an LL(1) parser use to make parsing decisions?",
        options: [
            "One token of lookahead",
            "Two tokens of lookahead",
            "No lookahead",
            "The entire source code",
        ],
        answer: 0,
        marks: 1,
    },
]

export default function ReviewExam() {
    const navigate = useNavigate()

    function handlePublish() {
        // Temporary until backend integration.
        console.log("Exam published")

        navigate("/lecturer/exams")
    }

    return (
        <div className="p-5 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <Link
                    to="/lecturer/exams/questions"
                    className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600"
                >
                    <ArrowLeft size={17} />
                    Back to Questions
                </Link>

                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                            STEP 3 OF 3
                        </span>

                        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                            Review & Publish
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Review everything before making the exam available to students.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                        <CheckCircle2 size={18} />
                        Ready to publish
                    </div>
                </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
                {/* Main */}
                <div className="space-y-6">
                    {/* Exam Details */}
                    <section className="rounded-2xl border border-slate-200 bg-white">
                        <div className="flex items-center justify-between border-b border-slate-100 p-5">
                            <div>
                                <h2 className="font-bold text-slate-950">
                                    Exam Details
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Basic information about this examination.
                                </p>
                            </div>

                            <Link
                                to="/lecturer/exams/create"
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
                            >
                                <Pencil size={15} />
                                Edit
                            </Link>
                        </div>

                        <div className="p-5">
                            <div className="rounded-2xl bg-slate-50 p-5">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                                        <FileQuestion size={25} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                                            CSC 401
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold text-slate-950">
                                            Compiler Construction
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Mid-Semester Examination
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <InfoItem
                                    icon={FileQuestion}
                                    label="Questions"
                                    value="50"
                                />

                                <InfoItem
                                    icon={Clock3}
                                    label="Duration"
                                    value="60 minutes"
                                />

                                <InfoItem
                                    icon={CheckCircle2}
                                    label="Total Marks"
                                    value="50"
                                />

                                <InfoItem
                                    icon={Users}
                                    label="Students"
                                    value="86"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Questions */}
                    <section className="rounded-2xl border border-slate-200 bg-white">
                        <div className="flex items-center justify-between border-b border-slate-100 p-5">
                            <div>
                                <h2 className="font-bold text-slate-950">
                                    Questions
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Preview the questions in this examination.
                                </p>
                            </div>

                            <Link
                                to="/lecturer/exams/questions"
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
                            >
                                <Pencil size={15} />
                                Edit
                            </Link>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {questions.map((question) => (
                                <QuestionPreview
                                    key={question.number}
                                    question={question}
                                />
                            ))}

                            <div className="p-5 text-center">
                                <p className="text-sm text-slate-400">
                                    Showing 3 of 50 questions
                                </p>

                                <Link
                                    to="/lecturer/exams/questions"
                                    className="mt-2 inline-block text-sm font-semibold text-indigo-600"
                                >
                                    View all questions
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    {/* Schedule */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 className="font-bold text-slate-950">
                            Schedule
                        </h2>

                        <div className="mt-5 space-y-5">
                            <ScheduleItem
                                icon={CalendarDays}
                                label="Starts"
                                value="September 5, 2026"
                                time="10:00 AM"
                            />

                            <ScheduleItem
                                icon={CalendarDays}
                                label="Ends"
                                value="September 5, 2026"
                                time="11:30 AM"
                            />
                        </div>
                    </section>

                    {/* Behaviour */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 className="font-bold text-slate-950">
                            Exam Behaviour
                        </h2>

                        <div className="mt-5 space-y-4">
                            <Behaviour
                                icon={Shuffle}
                                title="Questions shuffled"
                                enabled
                            />

                            <Behaviour
                                icon={Shuffle}
                                title="Options shuffled"
                                enabled
                            />

                            <Behaviour
                                icon={CheckCircle2}
                                title="Review enabled"
                                enabled
                            />

                            <Behaviour
                                icon={Globe2}
                                title="Results shown immediately"
                                enabled
                            />
                        </div>
                    </section>

                    {/* Warning */}
                    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                        <div className="flex gap-3">
                            <AlertTriangle
                                size={20}
                                className="shrink-0 text-amber-600"
                            />

                            <div>
                                <h3 className="text-sm font-bold text-amber-900">
                                    Before publishing
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-amber-800">
                                    Once students begin taking the exam, important settings
                                    and questions should not be changed.
                                </p>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>

            {/* Publish Footer */}
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-semibold text-slate-800">
                        Ready to publish?
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Students will be able to access the exam according to its schedule.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="/lecturer/exams/questions"
                        className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    >
                        Previous
                    </Link>

                    <button
                        onClick={handlePublish}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                    >
                        <Check size={17} />
                        Publish Exam
                    </button>
                </div>
            </div>
        </div>
    )
}

function InfoItem({ icon: Icon, label, value }) {
    return (
        <div className="rounded-xl border border-slate-100 p-4">
            <Icon size={18} className="text-indigo-600" />

            <p className="mt-3 text-xs text-slate-400">
                {label}
            </p>

            <p className="mt-1 text-sm font-bold text-slate-800">
                {value}
            </p>
        </div>
    )
}

function ScheduleItem({ icon: Icon, label, value, time }) {
    return (
        <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={18} />
            </div>

            <div>
                <p className="text-xs text-slate-400">
                    {label}
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                    {value}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                    {time}
                </p>
            </div>
        </div>
    )
}

function Behaviour({ icon: Icon, title, enabled }) {
    return (
        <div className="flex items-center gap-3">
            <Icon
                size={17}
                className={enabled ? "text-green-500" : "text-slate-300"}
            />

            <span className="text-sm text-slate-600">
                {title}
            </span>

            {enabled && (
                <Check
                    size={15}
                    className="ml-auto text-green-500"
                />
            )}
        </div>
    )
}

function QuestionPreview({ question }) {
    return (
        <div className="p-5">
            <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600">
                    {question.number}
                </span>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-semibold leading-6 text-slate-800">
                            {question.question}
                        </p>

                        <span className="shrink-0 text-xs font-medium text-slate-400">
                            {question.marks} mark
                        </span>
                    </div>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {question.options.map((option, index) => (
                            <div
                                key={option}
                                className={`rounded-lg border px-3 py-2.5 text-xs ${index === question.answer
                                        ? "border-green-200 bg-green-50 font-semibold text-green-700"
                                        : "border-slate-100 bg-slate-50 text-slate-500"
                                    }`}
                            >
                                {String.fromCharCode(65 + index)}. {option}

                                {index === question.answer && (
                                    <span className="ml-2">
                                        ✓
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}