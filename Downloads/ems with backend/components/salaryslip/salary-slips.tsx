"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye, Calendar, DollarSign } from "lucide-react"

export default function SalarySlips() {
  const { user } = useAuth()
  const [selectedMonth, setSelectedMonth] = useState("2024-01")

  // Mock salary data
  const salaryData = {
    basicSalary: 50000,
    allowances: {
      housing: 10000,
      transport: 3000,
      medical: 2000,
    },
    deductions: {
      tax: 8000,
      insurance: 1500,
      providentFund: 2500,
    },
  }

  const totalAllowances = Object.values(salaryData.allowances).reduce((sum, amount) => sum + amount, 0)
  const totalDeductions = Object.values(salaryData.deductions).reduce((sum, amount) => sum + amount, 0)
  const grossSalary = salaryData.basicSalary + totalAllowances
  const netSalary = grossSalary - totalDeductions

  const months = [
    { value: "2024-01", label: "January 2024" },
    { value: "2023-12", label: "December 2023" },
    { value: "2023-11", label: "November 2023" },
    { value: "2023-10", label: "October 2023" },
    { value: "2023-09", label: "September 2023" },
    { value: "2023-08", label: "August 2023" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Salary Slips</h2>
          <p className="text-muted-foreground">View and download your salary statements</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Salary Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Salary Summary
            </CardTitle>
            <CardDescription>{months.find((m) => m.value === selectedMonth)?.label}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Net Salary</span>
              <span className="text-xl font-bold text-green-600">${netSalary.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Gross Salary</span>
                <span className="font-medium">${grossSalary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Total Deductions</span>
                <span className="font-medium text-red-600">-${totalDeductions.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button className="flex-1">
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
              <Button variant="outline" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Salary History */}
        <Card>
          <CardHeader>
            <CardTitle>Salary History</CardTitle>
            <CardDescription>Your recent salary statements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {months.map((month) => (
                <div
                  key={month.value}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{month.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">${netSalary.toLocaleString()}</span>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Salary Breakdown</CardTitle>
          <CardDescription>
            Detailed breakdown for {months.find((m) => m.value === selectedMonth)?.label}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Earnings */}
            <div>
              <h3 className="font-semibold mb-4 text-green-600">Earnings</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Basic Salary</span>
                  <span className="font-medium">${salaryData.basicSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Housing Allowance</span>
                  <span className="font-medium">${salaryData.allowances.housing.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transport Allowance</span>
                  <span className="font-medium">${salaryData.allowances.transport.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medical Allowance</span>
                  <span className="font-medium">${salaryData.allowances.medical.toLocaleString()}</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total Earnings</span>
                  <span>${grossSalary.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div>
              <h3 className="font-semibold mb-4 text-red-600">Deductions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Income Tax</span>
                  <span className="font-medium">${salaryData.deductions.tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Health Insurance</span>
                  <span className="font-medium">${salaryData.deductions.insurance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Provident Fund</span>
                  <span className="font-medium">${salaryData.deductions.providentFund.toLocaleString()}</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total Deductions</span>
                  <span>${totalDeductions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Net Pay</span>
              <span className="text-2xl font-bold text-blue-600">${netSalary.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
