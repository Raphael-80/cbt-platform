import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Check,
    Clock3,
    FileText,
    Shuffle,
    Users,
} from "lucide-react"

export default function CreateExam() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        courseCode: "",
        description: "",
        instructions: "",
        duration: 60,
        questions: 30,
        marksPerQuestion: 1,
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        shuffleQuestions: true,
        shuffleOptions: true,
        showResult: true,
        allowReview: true,
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log("Exam:", formData)

        navigate("/lecturer/exams/questions")
    }

    return (
        <div className="p-5 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <Link
                    to="/lecturer/exams"
                    className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600"
                >
                    <ArrowLeft size={17} />
                    Back to Exams
                </Link>

                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                        Create New Exam
                    </h1>

                    <p className="mt-2 text-sm text-slate-500 md:text-base">
                        Configure your examination before adding questions.
                    </p>
                </div>
            </div>

            {/* Progress */}
            <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center">
                    <Step number="1" title="Exam Details" active />

                    <div className="h-px flex-1 bg-slate-200" />

                    <Step number="2" title="Questions" />

                    <div className="h-px flex-1 bg-slate-200" />

                    <Step number="3" title="Review & Publish" />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
                    {/* Main Form */}
                    <div className="space-y-6">
                        {/* Basic Information */}
                        <section className="rounded-2xl border border-slate-200 bg-white p-6">
                            <SectionHeader
                                icon={BookOpen}
                                title="Basic Information"
                                description="Enter the basic details of your examination."
                            />

                            <div className="mt-6 grid gap-5 md:grid-cols-2">
                                <Input
                                    label="Exam Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Compiler Construction Mid-Semester Test"
                                    required
                                />

                                <Input
                                    label="Course Code"
                                    name="courseCode"
                                    value={formData.courseCode}
                                    onChange={handleChange}
                                    placeholder="e.g. CSC 401"
                                    required
                                />

                                <div className="md:col-span-2">
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Description
                                    </label>

                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Briefly describe this examination..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Exam Instructions
                                    </label>

                                    <textarea
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Enter instructions students should read before starting..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Exam Settings */}
                        <section className="rounded-2xl border border-slate-200 bg-white p-6">
                            <SectionHeader
                                icon={Clock3}
                                title="Exam Settings"
                                description="Configure the structure and duration of your exam."
                            />

                            <div className="mt-6 grid gap-5 sm:grid-cols-3">
                                <Input
                                    label="Duration (minutes)"
                                    name="duration"
                                    type="number"
                                    min="1"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="Number of Questions"
                                    name="questions"
                                    type="number"
                                    min="1"
                                    value={formData.questions}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="Marks per Question"
                                    name="marksPerQuestion"
                                    type="number"
                                    min="1"
                                    value={formData.marksPerQuestion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mt-5 rounded-xl bg-slate-50 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-600">
                                        Total Marks
                                    </span>

                                    <span className="text-lg font-bold text-slate-950">
                                        {Number(formData.questions || 0) *
                                            Number(formData.marksPerQuestion || 0)}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Schedule */}
                        <section className="rounded-2xl border border-slate-200 bg-white p-6">
                            <SectionHeader
                                icon={Clock3}
                                title="Exam Schedule"
                                description="Choose when students can access this exam."
                            />

                            <div className="mt-6 grid gap-5 md:grid-cols-2">
                                <Input
                                    label="Start Date"
                                    name="startDate"
                                    type="date"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="Start Time"
                                    name="startTime"
                                    type="time"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="End Date"
                                    name="endDate"
                                    type="date"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="End Time"
                                    name="endTime"
                                    type="time"
                                    value={formData.endTime}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </section>

                        {/* Exam Behaviour */}
                        <section className="rounded-2xl border border-slate-200 bg-white p-6">
                            <SectionHeader
                                icon={Shuffle}
                                title="Exam Behaviour"
                                description="Control how questions and results are presented."
                            />

                            <div className="mt-6 space-y-4">
                                <Toggle
                                    name="shuffleQuestions"
                                    checked={formData.shuffleQuestions}
                                    onChange={handleChange}
                                    title="Shuffle Questions"
                                    description="Show questions in a different order for each student."
                                />

                                <Toggle
                                    name="shuffleOptions"
                                    checked={formData.shuffleOptions}
                                    onChange={handleChange}
                                    title="Shuffle Answer Options"
                                    description="Randomize the answer choices for every student."
                                />

                                <Toggle
                                    name="allowReview"
                                    checked={formData.allowReview}
                                    onChange={handleChange}
                                    title="Allow Question Review"
                                    description="Allow students to move back and review previous questions."
                                />

                                <Toggle
                                    name="showResult"
                                    checked={formData.showResult}
                                    onChange={handleChange}
                                    title="Show Result Immediately"
                                    description="Display the student's score immediately after submission."
                                />
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Preview */}
                        <section className="rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="font-bold text-slate-950">
                                Exam Summary
                            </h2>

                            <div className="mt-5 space-y-4">
                                <SummaryRow
                                    icon={BookOpen}
                                    label="Course"
                                    value={formData.courseCode || "Not specified"}
                                />

                                <SummaryRow
                                    icon={FileText}
                                    label="Questions"
                                    value={`${formData.questions || 0} questions`}
                                />

                                <SummaryRow
                                    icon={Clock3}
                                    label="Duration"
                                    value={`${formData.duration || 0} minutes`}
                                />

                                <SummaryRow
                                    icon={Check}
                                    label="Total Marks"
                                    value={
                                        Number(formData.questions || 0) *
                                        Number(formData.marksPerQuestion || 0)
                                    }
                                />

                                <SummaryRow
                                    icon={Users}
                                    label="Access"
                                    value="Scheduled"
                                />
                            </div>
                        </section>

                        {/* Tips */}
                        <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
                            <h2 className="font-bold text-indigo-950">
                                Before you continue
                            </h2>

                            <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-900">
                                <li className="flex gap-2">
                                    <Check size={17} className="mt-1 shrink-0" />
                                    Make sure the exam duration is correct.
                                </li>

                                <li className="flex gap-2">
                                    <Check size={17} className="mt-1 shrink-0" />
                                    Add enough questions for the selected number.
                                </li>

                                <li className="flex gap-2">
                                    <Check size={17} className="mt-1 shrink-0" />
                                    Review your questions before publishing.
                                </li>
                            </ul>
                        </section>
                    </aside>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
                    <Link
                        to="/lecturer/exams"
                        className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Continue to Questions
                        <ArrowRight size={17} />
                    </button>
                </div>
            </form>
        </div>
    )
}

/* ---------- Components ---------- */

function Step({ number, title, active }) {
    return (
        <div className="flex items-center gap-3">
            <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${active
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
            >
                {number}
            </div>

            <span
                className={`hidden text-sm font-semibold sm:block ${active ? "text-slate-900" : "text-slate-400"
                    }`}
            >
                {title}
            </span>
        </div>
    )
}

function SectionHeader({ icon: Icon, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={20} />
            </div>

            <div>
                <h2 className="font-bold text-slate-950">
                    {title}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    )
}

function Input({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    required = false,
    min,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={min}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
        </div>
    )
}

function Toggle({
    name,
    checked,
    onChange,
    title,
    description,
}) {
    return (
        <label className="flex cursor-pointer items-start justify-between gap-5 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50">
            <div>
                <p className="text-sm font-semibold text-slate-800">
                    {title}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                </p>
            </div>

            <div className="relative shrink-0">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    className="peer sr-only"
                />

                <div className="h-6 w-11 rounded-full bg-slate-200 transition peer-checked:bg-indigo-600" />

                <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
            </div>
        </label>
    )
}

function SummaryRow({ icon: Icon, label, value }) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <Icon size={17} className="text-slate-400" />

                <span className="text-sm text-slate-500">
                    {label}
                </span>
            </div>

            <span className="text-right text-sm font-semibold text-slate-800">
                {value}
            </span>
        </div>
    )
}