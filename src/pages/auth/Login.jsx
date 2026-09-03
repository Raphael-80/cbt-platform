import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react"
import AuthLayout from "../../layouts/AuthLayout"

export default function Login() {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
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

        // Temporary navigation until backend authentication is added.
        if (formData.role === "lecturer") {
            navigate("/lecturer/dashboard")
        } else {
            navigate("/student/dashboard")
        }
    }

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Enter your details to access your CBT account."
        >
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Role */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Login as
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
                                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
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
                                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            Lecturer
                        </button>
                    </div>
                </div>

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
                    <div className="mb-2 flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="text-sm font-semibold text-slate-700"
                        >
                            Password
                        </label>

                        <button
                            type="button"
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                            Forgot password?
                        </button>
                    </div>

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
                            placeholder="Enter your password"
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
                    Login
                </button>

                <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        Create account
                    </Link>
                </p>
            </form>
        </AuthLayout>
    )
}