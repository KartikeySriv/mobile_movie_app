"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { apiService, type Employee, type Department, type Role } from "@/services/api-service"

interface EmployeeContextType {
  employees: Employee[]
  departments: Department[]
  roles: Role[]
  isLoading: boolean
  error: string | null
  fetchEmployees: () => Promise<void>
  fetchDepartments: () => Promise<void>
  fetchRoles: () => Promise<void>
  addEmployee: (employee: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    address?: string
    dateOfBirth?: string
    hireDate: string
    salary: number
    departmentId: number
    roleId: number
  }) => Promise<boolean>
  updateEmployee: (id: number, employee: Partial<Employee>) => Promise<boolean>
  deleteEmployee: (id: number) => Promise<boolean>
  addDepartment: (department: { name: string; description?: string }) => Promise<boolean>
  updateDepartment: (id: number, department: { name: string; description?: string }) => Promise<boolean>
  deleteDepartment: (id: number) => Promise<boolean>
  addRole: (role: { name: string; description?: string }) => Promise<boolean>
  updateRole: (id: number, role: { name: string; description?: string }) => Promise<boolean>
  deleteRole: (id: number) => Promise<boolean>
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined)

export function EmployeeProvider({ children }: { children: React.ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [roles, setRoles] = useState<Role[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEmployees = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await apiService.getEmployees()
      if (response.success) {
        setEmployees(response.data)
      } else {
        setError(response.message || "Failed to fetch employees")
      }
    } catch (error) {
      setError("Failed to fetch employees")
      console.error("Fetch employees error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchDepartments = async () => {
    try {
      const response = await apiService.getDepartments()
      if (response.success) {
        setDepartments(response.data)
      } else {
        setError(response.message || "Failed to fetch departments")
      }
    } catch (error) {
      setError("Failed to fetch departments")
      console.error("Fetch departments error:", error)
    }
  }

  const fetchRoles = async () => {
    try {
      const response = await apiService.getRoles()
      if (response.success) {
        setRoles(response.data)
      } else {
        setError(response.message || "Failed to fetch roles")
      }
    } catch (error) {
      setError("Failed to fetch roles")
      console.error("Fetch roles error:", error)
    }
  }

  const addEmployee = async (employeeData: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    address?: string
    dateOfBirth?: string
    hireDate: string
    salary: number
    departmentId: number
    roleId: number
  }): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await apiService.createEmployee(employeeData)
      if (response.success) {
        await fetchEmployees() // Refresh the list
        return true
      } else {
        setError(response.message || "Failed to add employee")
        return false
      }
    } catch (error) {
      setError("Failed to add employee")
      console.error("Add employee error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const updateEmployee = async (id: number, employeeData: Partial<Employee>): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await apiService.updateEmployee(id, employeeData)
      if (response.success) {
        await fetchEmployees() // Refresh the list
        return true
      } else {
        setError(response.message || "Failed to update employee")
        return false
      }
    } catch (error) {
      setError("Failed to update employee")
      console.error("Update employee error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const deleteEmployee = async (id: number): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await apiService.deleteEmployee(id)
      if (response.success) {
        await fetchEmployees() // Refresh the list
        return true
      } else {
        setError(response.message || "Failed to delete employee")
        return false
      }
    } catch (error) {
      setError("Failed to delete employee")
      console.error("Delete employee error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const addDepartment = async (departmentData: { name: string; description?: string }): Promise<boolean> => {
    try {
      const response = await apiService.createDepartment(departmentData)
      if (response.success) {
        await fetchDepartments()
        return true
      } else {
        setError(response.message || "Failed to add department")
        return false
      }
    } catch (error) {
      setError("Failed to add department")
      console.error("Add department error:", error)
      return false
    }
  }

  const updateDepartment = async (
    id: number,
    departmentData: { name: string; description?: string },
  ): Promise<boolean> => {
    try {
      const response = await apiService.updateDepartment(id, departmentData)
      if (response.success) {
        await fetchDepartments()
        return true
      } else {
        setError(response.message || "Failed to update department")
        return false
      }
    } catch (error) {
      setError("Failed to update department")
      console.error("Update department error:", error)
      return false
    }
  }

  const deleteDepartment = async (id: number): Promise<boolean> => {
    try {
      const response = await apiService.deleteDepartment(id)
      if (response.success) {
        await fetchDepartments()
        return true
      } else {
        setError(response.message || "Failed to delete department")
        return false
      }
    } catch (error) {
      setError("Failed to delete department")
      console.error("Delete department error:", error)
      return false
    }
  }

  const addRole = async (roleData: { name: string; description?: string }): Promise<boolean> => {
    try {
      const response = await apiService.createRole(roleData)
      if (response.success) {
        await fetchRoles()
        return true
      } else {
        setError(response.message || "Failed to add role")
        return false
      }
    } catch (error) {
      setError("Failed to add role")
      console.error("Add role error:", error)
      return false
    }
  }

  const updateRole = async (id: number, roleData: { name: string; description?: string }): Promise<boolean> => {
    try {
      const response = await apiService.updateRole(id, roleData)
      if (response.success) {
        await fetchRoles()
        return true
      } else {
        setError(response.message || "Failed to update role")
        return false
      }
    } catch (error) {
      setError("Failed to update role")
      console.error("Update role error:", error)
      return false
    }
  }

  const deleteRole = async (id: number): Promise<boolean> => {
    try {
      const response = await apiService.deleteRole(id)
      if (response.success) {
        await fetchRoles()
        return true
      } else {
        setError(response.message || "Failed to delete role")
        return false
      }
    } catch (error) {
      setError("Failed to delete role")
      console.error("Delete role error:", error)
      return false
    }
  }

  // Fetch initial data when component mounts
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      fetchEmployees()
      fetchDepartments()
      fetchRoles()
    }
  }, [])

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        departments,
        roles,
        isLoading,
        error,
        fetchEmployees,
        fetchDepartments,
        fetchRoles,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        addDepartment,
        updateDepartment,
        deleteDepartment,
        addRole,
        updateRole,
        deleteRole,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  )
}

export function useEmployee() {
  const context = useContext(EmployeeContext)
  if (context === undefined) {
    throw new Error("useEmployee must be used within an EmployeeProvider")
  }
  return context
}
