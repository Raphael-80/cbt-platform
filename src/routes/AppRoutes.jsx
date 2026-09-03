import { Routes, Route } from "react-router-dom"

import Landing from "../pages/Landing"

import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

import StudentDashboard from "../pages/student/StudentDashboard"

import LecturerLayout from "../layouts/LecturerLayout"
import LecturerDashboard from "../pages/lecturer/LecturerDashboard"

import CreateExam from "../pages/lecturer/CreateExam"
import QuestionBuilder from "../pages/lecturer/QuestionBuilder"

import Exams from "../pages/lecturer/Exams"
import ReviewExam from "../pages/lecturer/ReviewExam"

import StudentLayout from "../layouts/StudentLayout"
import AvailableExams from "../pages/student/AvailableExams"
import ExamInstructions from "../pages/student/ExamInstructions"
import TakeExam from "../pages/student/TakeExam"
import ExamResult from "../pages/student/ExamResult"
import StudentResults from "../pages/student/StudentResults"

function Placeholder({ title }) {
  return (
    <div className="p-5 md:p-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <h1 className="text-2xl font-bold text-slate-950">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          This section will be built next.
        </p>
      </div>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Student */}
      <Route element={<StudentLayout />}>
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student/exams"
          element={<AvailableExams />}
        />

        <Route
          path="/student/exams/:examId"
          element={<ExamInstructions />}
        />

        <Route
          path="/student/results"
          element={<StudentResults />}
        />
      </Route>

      <Route
        path="/student/exam/:examId"
        element={<TakeExam />}
      />

      <Route
        path="/student/result/:examId"
        element={<ExamResult />}
      />

      {/* Lecturer */}
      <Route element={<LecturerLayout />}>
        <Route
          path="/lecturer/dashboard"
          element={<LecturerDashboard />}
        />

        <Route
          path="/lecturer/exams"
          element={<Exams />}
        />

        <Route
          path="/lecturer/exams/create"
          element={<CreateExam />}
        />

        <Route
          path="/lecturer/exams/questions"
          element={<QuestionBuilder />}
        />

        <Route
          path="/lecturer/exams/review"
          element={<ReviewExam />}
        />

        <Route
          path="/lecturer/questions"
          element={<Placeholder title="Questions" />}
        />

        <Route
          path="/lecturer/students"
          element={<Placeholder title="Students" />}
        />

        <Route
          path="/lecturer/results"
          element={<Placeholder title="Results" />}
        />

        <Route
          path="/lecturer/settings"
          element={<Placeholder title="Settings" />}
        />
      </Route>
    </Routes>
  )
}