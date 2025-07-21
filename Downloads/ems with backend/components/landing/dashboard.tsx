"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { EmployeeProvider } from "@/context/employee-context"
import Sidebar from "@/components/layout/sidebar"
import Header from "@/components/layout/header"
import DashboardOverview from "@/components/common/dashboard-overview"
import EmployeeList from "@/components/employee/employee-list"
import AttendanceTracker from "@/components/attendance/attendance-tracker"
import LeaveManagement from "@/components/leave/leave-management"
import ProfileView from "@/components/profile/profile-view"
import SalarySlips from "@/components/salaryslip/salary-slips"
import HRTools from "@/components/hr/hr-tools"
import AdminPanel from "@/components/admin/admin-panel"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const { user } = useAuth()

  const getPageTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard"
      case "employees":
        return "Employee Management"
      case "attendance":
        return "Attendance Tracking"
      case "leave":
        return "Leave Management"
      case "profile":
        return "My Profile"
      case "salary":
        return "Salary Slips"
      case "hr":
        return "HR Tools"
      case "admin":
        return "Admin Panel"
      default:
        return "Dashboard"
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "employees":
        return <EmployeeList />
      case "attendance":
        return <AttendanceTracker />
      case "leave":
        return <LeaveManagement />
      case "profile":
        return <ProfileView />
      case "salary":
        return <SalarySlips />
      case "hr":
        return <HRTools />
      case "admin":
        return <AdminPanel />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <EmployeeProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={getPageTitle()} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">{renderContent()}</main>
        </div>
      </div>
    </EmployeeProvider>
  )
}
