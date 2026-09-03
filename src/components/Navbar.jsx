import { Link } from "react-router-dom"
// import { GraduationCap } from "react-icons/fi"
import { GraduationCap } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <GraduationCap size={20} />
          </div>

          <span className="text-lg font-bold text-slate-900">
            CBT<span className="text-indigo-600">Pro</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  )
}