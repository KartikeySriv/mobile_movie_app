"use client"

import { useState } from "react"
import { useEmployee } from "@/context/employee-context"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function AttendanceTracker() {
  const { employees, attendance, markAttendance } = useEmployee()
  const { user } = useAuth()
  const [currentTime, setCurrentTime] = useState(new Date())

  const handleCheckIn = () => {
    if (user) {
      const time = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
      markAttendance(user.id, time)
    }
  }

  const handleCheckOut = () => {
    if (user) {
      const time = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
      // In a real app, you'd update the existing attendance record
      markAttendance(user.id, "09:00", time)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "absent":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "late":
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800"
      case "absent":
        return "bg-red-100 text-red-800"
      case "late":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Attendance Tracking</h2>
        <p className="text-muted-foreground">Monitor and manage employee attendance</p>
      </div>

      {/* Quick Check-in/out */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Current time: {currentTime.toLocaleTimeString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button onClick={handleCheckIn} className="bg-green-600 hover:bg-green-700">
              Check In
            </Button>
            <Button onClick={handleCheckOut} variant="outline">
              Check Out
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Attendance</CardTitle>
          <CardDescription>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {employees.map((employee) => {
              const todayAttendance = attendance.find(
                (a) => a.employeeId === employee.id && a.date === new Date().toISOString().split("T")[0],
              )

              return (
                <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-gray-600">{employee.department}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {todayAttendance ? (
                      <>
                        <div className="text-sm">
                          <span className="font-medium">In:</span> {todayAttendance.checkIn}
                          {todayAttendance.checkOut && (
                            <span className="ml-2">
                              <span className="font-medium">Out:</span> {todayAttendance.checkOut}
                            </span>
                          )}
                        </div>
                        <Badge className={getStatusColor(todayAttendance.status)}>
                          {getStatusIcon(todayAttendance.status)}
                          <span className="ml-1 capitalize">{todayAttendance.status}</span>
                        </Badge>
                      </>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">
                        <Clock className="h-4 w-4 mr-1" />
                        Not marked
                      </Badge>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Attendance Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {attendance.filter((a) => a.status === "present").length}
            </div>
            <p className="text-xs text-muted-foreground">Out of {employees.length} employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {attendance.filter((a) => a.status === "late").length}
            </div>
            <p className="text-xs text-muted-foreground">Arrived after 9:00 AM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {employees.length - attendance.filter((a) => a.status === "present" || a.status === "late").length}
            </div>
            <p className="text-xs text-muted-foreground">Not marked attendance</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
