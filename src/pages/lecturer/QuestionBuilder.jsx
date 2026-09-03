import { useState } from "react"
import { Link } from "react-router-dom"
import {
    ArrowLeft,
    Check,
    ChevronDown,
    GripVertical,
    Plus,
    Trash2,
} from "lucide-react"

const initialQuestions = [
    {
        id: 1,
        question: "",
        type: "multiple-choice",
        marks: 1,
        options: ["", "", "", ""],
        correctAnswer: 0,
    },
]

export default function QuestionBuilder() {
    const [questions, setQuestions] = useState(initialQuestions)

    function addQuestion() {
        setQuestions((previous) => [
            ...previous,
            {
                id: Date.now(),
                question: "",
                type: "multiple-choice",
                marks: 1,
                options: ["", "", "", ""],
                correctAnswer: 0,
            },
        ])
    }

    function deleteQuestion(id) {
        setQuestions((previous) =>
            previous.filter((question) => question.id !== id),
        )
    }

    function updateQuestion(id, field, value) {
        setQuestions((previous) =>
            previous.map((question) =>
                question.id === id
                    ? {
                        ...question,
                        [field]: value,
                    }
                    : question,
            ),
        )
    }

    function updateOption(questionId, optionIndex, value) {
        setQuestions((previous) =>
            previous.map((question) => {
                if (question.id !== questionId) {
                    return question
                }

                const updatedOptions = [...question.options]
                updatedOptions[optionIndex] = value

                return {
                    ...question,
                    options: updatedOptions,
                }
            }),
        )
    }

    function setCorrectAnswer(questionId, optionIndex) {
        setQuestions((previous) =>
            previous.map((question) =>
                question.id === questionId
                    ? {
                        ...question,
                        correctAnswer: optionIndex,
                    }
                    : question,
            ),
        )
    }

    function handleSave() {
        console.log("Questions:", questions)

        window.location.href = "/lecturer/exams/review"
    }

    return (
        <div className="p-5 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <Link
                    to="/lecturer/exams/create"
                    className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600"
                >
                    <ArrowLeft size={17} />
                    Back to Exam Details
                </Link>

                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                                STEP 2 OF 3
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                            Question Builder
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Add and configure the questions students will answer.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                        <span className="text-sm text-slate-500">
                            Questions
                        </span>

                        <span className="ml-2 font-bold text-slate-900">
                            {questions.length}
                        </span>
                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className="space-y-5">
                {questions.map((question, index) => (
                    <QuestionCard
                        key={question.id}
                        question={question}
                        index={index}
                        onUpdate={updateQuestion}
                        onUpdateOption={updateOption}
                        onCorrectAnswer={setCorrectAnswer}
                        onDelete={deleteQuestion}
                        canDelete={questions.length > 1}
                    />
                ))}
            </div>

            {/* Add */}
            <button
                type="button"
                onClick={addQuestion}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 bg-white py-5 text-sm font-semibold text-slate-500 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
            >
                <Plus size={18} />
                Add Another Question
            </button>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
                <Link
                    to="/lecturer/exams/create"
                    className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                    Previous
                </Link>

                <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                    Review Exam
                    <Check size={17} />
                </button>
            </div>
        </div>
    )
}

function QuestionCard({
    question,
    index,
    onUpdate,
    onUpdateOption,
    onCorrectAnswer,
    onDelete,
    canDelete,
}) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-3">
                    <GripVertical
                        size={19}
                        className="cursor-grab text-slate-300"
                    />

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
                        {index + 1}
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                        Question {index + 1}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select
                            value={question.marks}
                            onChange={(event) =>
                                onUpdate(
                                    question.id,
                                    "marks",
                                    Number(event.target.value),
                                )
                            }
                            className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs font-semibold text-slate-600 outline-none focus:border-indigo-500"
                        >
                            <option value={1}>1 mark</option>
                            <option value={2}>2 marks</option>
                            <option value={3}>3 marks</option>
                            <option value={5}>5 marks</option>
                            <option value={10}>10 marks</option>
                        </select>

                        <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => onDelete(question.id)}
                        disabled={!canDelete}
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <Trash2 size={17} />
                    </button>
                </div>
            </div>

            {/* Question Body */}
            <div className="p-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Question
                </label>

                <textarea
                    value={question.question}
                    onChange={(event) =>
                        onUpdate(
                            question.id,
                            "question",
                            event.target.value,
                        )
                    }
                    rows="3"
                    placeholder="Enter your question here..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

                <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between">
                        <label className="text-sm font-semibold text-slate-700">
                            Answer Options
                        </label>

                        <span className="text-xs text-slate-400">
                            Select the correct answer
                        </span>
                    </div>

                    <div className="space-y-3">
                        {question.options.map((option, optionIndex) => (
                            <div
                                key={optionIndex}
                                className={`flex items-center gap-3 rounded-xl border p-3 transition ${question.correctAnswer === optionIndex
                                    ? "border-green-300 bg-green-50"
                                    : "border-slate-200"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        onCorrectAnswer(
                                            question.id,
                                            optionIndex,
                                        )
                                    }
                                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition ${question.correctAnswer === optionIndex
                                        ? "border-green-500 bg-green-500 text-white"
                                        : "border-slate-300 text-slate-400 hover:border-indigo-400"
                                        }`}
                                >
                                    {question.correctAnswer === optionIndex ? (
                                        <Check size={14} />
                                    ) : (
                                        String.fromCharCode(65 + optionIndex)
                                    )}
                                </button>

                                <input
                                    value={option}
                                    onChange={(event) =>
                                        onUpdateOption(
                                            question.id,
                                            optionIndex,
                                            event.target.value,
                                        )
                                    }
                                    placeholder={`Option ${String.fromCharCode(
                                        65 + optionIndex,
                                    )}`}
                                    className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}