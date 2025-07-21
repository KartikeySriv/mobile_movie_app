"use client"

import { useAuth } from "@/context/auth-context"
import { useEmployee } from "@/context/employee-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, DollarSign, CheckCircle, Loader2 } from "lucide-react"

export default function DashboardOverview() {
  const { user } = useAuth()
  const { employees, departments, roles, isLoading } = useEmployee()

  const stats = [
    {
      title: "Total Employees",
      value: employees.length,
      icon: Users,
      description: "Active employees",
      color: "text-blue-600",
    },
    {
      title: "Departments",
      value: departments.length,
      icon: CheckCircle,
      description: "Active departments",
      color: "text-green-600",
    },
    {
      title: "Roles",
      value: roles.length,
      icon: Calendar,
      description: "Available roles",
      color: "text-orange-600",
    },
    {
      title: "Average Salary",
      value:
        employees.length > 0
          ? `$${Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length).toLocaleString()}`
          : "$0",
      icon: DollarSign,
      description: "Monthly average",
      color: "text-purple-600",
    },
  ]

  const recentActivities = [
    { action: "Employee data loaded from backend", time: "Just now" },
    { action: "Connected to Render API successfully", time: "1 minute ago" },
    { action: "Dashboard initialized", time: "2 minutes ago" },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}!</h2>
        <p className="text-muted-foreground">Here's what's happening with your team today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates from your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Add New Employee</div>
              <div className="text-sm text-muted-foreground">Create a new employee record</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Manage Departments</div>
              <div className="text-sm text-muted-foreground">Add or edit departments</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">View Reports</div>
              <div className="text-sm text-muted-foreground">Generate employee reports</div>
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Department Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Department Overview</CardTitle>
          <CardDescription>Employee distribution across departments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => {
              const employeeCount = employees.filter((emp) => emp.departmentId === dept.id).length
              return (
                <div key={dept.id} className="p-4 border rounded-lg">
                  <h3 className="font-medium">{dept.name}</h3>
                  <p className="text-sm text-gray-600">{dept.description}</p>
                  <p className="text-lg font-bold mt-2">{employeeCount} employees</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
