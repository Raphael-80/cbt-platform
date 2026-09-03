import { Link } from "react-router-dom"
import { GraduationCap } from "lucide-react"

export default function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="grid min-h-screen lg:grid-cols-2">
                {/* Left Side */}
                <div className="hidden bg-indigo-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600">
                            <GraduationCap size={22} />
                        </div>

                        <span className="text-xl font-bold">
                            CBTPro
                        </span>
                    </Link>

                    <div className="max-w-xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                            Smart Examination Platform
                        </p>

                        <h1 className="text-5xl font-bold leading-tight">
                            Examinations made simpler for everyone.
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-indigo-100">
                            Create tests, manage students, take secure exams and receive
                            results instantly.
                        </p>
                    </div>

                    <p className="text-sm text-indigo-200">
                        © 2026 CBTPro
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-6 py-12">
                    <div className="w-full max-w-md">
                        <Link
                            to="/"
                            className="mb-10 flex items-center gap-2 lg:hidden"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                <GraduationCap size={20} />
                            </div>

                            <span className="text-lg font-bold text-slate-900">
                                CBT<span className="text-indigo-600">Pro</span>
                            </span>
                        </Link>

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                {title}
                            </h2>

                            <p className="mt-2 text-slate-500">
                                {subtitle}
                            </p>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}