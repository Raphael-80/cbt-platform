import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    Eye,
    EyeOff,
    GraduationCap,
    LockKeyhole,
    Mail,
    User,
} from "lucide-react"
import AuthLayout from "../../layouts/AuthLayout"

export default function Register() {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        studentId: "",
        password: "",
        role: "student",
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log(formData)

        navigate("/login")
    }

    return (
        <AuthLayout
            title="Create your account"
            subtitle="Join CBTPro and start managing or taking examinations."
        >
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Role */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        I am a
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() =>
                                setFormData((previous) => ({
                                    ...previous,
                                    role: "student",
                                }))
                            }
                            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${formData.role === "student"
                                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                                    : "border-slate-200 bg-white text-slate-600"
                                }`}
                        >
                            Student
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setFormData((previous) => ({
                                    ...previous,
                                    role: "lecturer",
                                }))
                            }
                            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${formData.role === "lecturer"
                                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                                    : "border-slate-200 bg-white text-slate-600"
                                }`}
                        >
                            Lecturer
                        </button>
                    </div>
                </div>

                {/* Full Name */}
                <div>
                    <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        Full name
                    </label>

                    <div className="relative">
                        <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />
                    </div>
                </div>

                {/* Student ID */}
                {formData.role === "student" && (
                    <div>
                        <label
                            htmlFor="studentId"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Matric number
                        </label>

                        <div className="relative">
                            <GraduationCap
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                id="studentId"
                                type="text"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleChange}
                                placeholder="e.g. RUN/CMP/22/12345"
                                required
                                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                            />
                        </div>
                    </div>
                )}

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        Email address
                    </label>

                    <div className="relative">
                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        Password
                    </label>

                    <div className="relative">
                        <LockKeyhole
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            minLength={6}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((previous) => !previous)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
                >
                    Create account
                </button>

                <p className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </AuthLayout>
    )
}