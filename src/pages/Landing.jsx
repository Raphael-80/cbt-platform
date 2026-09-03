import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Clock3, BarChart3 } from "lucide-react"
import Navbar from "../components/Navbar"

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Modern Online Examination Platform
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Conduct exams.
              <br />
              <span className="text-indigo-600">
                Grade automatically.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A simple and powerful CBT platform that helps lecturers
              create exams, manage students, and get accurate results
              without the stress of manual grading.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/register"
                className="group flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
              >
                Create an Exam
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Student Login
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Automatic grading
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Real-time results
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-2xl">

              <div className="rounded-xl bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Lecturer Dashboard
                    </p>

                    <h2 className="mt-1 text-xl font-bold">
                      Overview
                    </h2>
                  </div>

                  <div className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600">
                    This Week
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Exams
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      12
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Students
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      348
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Average
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      78%
                    </p>
                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                        <Clock3 size={18} />
                      </div>

                      <div>
                        <p className="font-semibold">
                          CSC 401
                        </p>

                        <p className="text-xs text-slate-500">
                          50 questions
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-medium text-green-600">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                        <BarChart3 size={18} />
                      </div>

                      <div>
                        <p className="font-semibold">
                          CSC 305
                        </p>

                        <p className="text-xs text-slate-500">
                          35 questions
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-medium text-slate-500">
                      Completed
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-slate-100 bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">
              FEATURES
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Everything you need to run a CBT
            </h2>

            <p className="mt-4 text-slate-600">
              From creating questions to analyzing student performance,
              everything stays in one place.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}