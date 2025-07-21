// API service for connecting to the backend hosted on Render
const BASE_URL = "https://employee-management-system-pahv.onrender.com"

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  role: string
}

export interface Employee {
  id: number
  firstName: string
  lastName: string
  email: string
  phone?: string
  address?: string
  dateOfBirth?: string
  hireDate: string
  salary: number
  status: string
  departmentId: number
  roleId: number
  department?: {
    id: number
    name: string
    description?: string
  }
  role?: {
    id: number
    name: string
    description?: string
  }
}

export interface Department {
  id: number
  name: string
  description?: string
}

export interface Role {
  id: number
  name: string
  description?: string
}

export interface CreateEmployeeRequest {
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
}

class ApiService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem("authToken")
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  // Authentication
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      const response = await fetch(`${BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Login error:", error)
      return {
        data: {} as LoginResponse,
        success: false,
        message: error instanceof Error ? error.message : "Login failed",
      }
    }
  }

  // Employee endpoints
  async getEmployees(): Promise<ApiResponse<Employee[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/employees`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Get employees error:", error)
      return {
        data: [],
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch employees",
      }
    }
  }

  async getEmployee(id: number): Promise<ApiResponse<Employee>> {
    try {
      const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Get employee error:", error)
      return {
        data: {} as Employee,
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch employee",
      }
    }
  }

  async createEmployee(employee: CreateEmployeeRequest): Promise<ApiResponse<Employee>> {
    try {
      const response = await fetch(`${BASE_URL}/api/employees`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(employee),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Create employee error:", error)
      return {
        data: {} as Employee,
        success: false,
        message: error instanceof Error ? error.message : "Failed to create employee",
      }
    }
  }

  async updateEmployee(id: number, employee: Partial<CreateEmployeeRequest>): Promise<ApiResponse<Employee>> {
    try {
      const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
        method: "PUT",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(employee),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Update employee error:", error)
      return {
        data: {} as Employee,
        success: false,
        message: error instanceof Error ? error.message : "Failed to update employee",
      }
    }
  }

  async deleteEmployee(id: number): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
        method: "DELETE",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return {
        data: undefined as void,
        success: true,
      }
    } catch (error) {
      console.error("Delete employee error:", error)
      return {
        data: undefined as void,
        success: false,
        message: error instanceof Error ? error.message : "Failed to delete employee",
      }
    }
  }

  // Department endpoints
  async getDepartments(): Promise<ApiResponse<Department[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/departments`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Get departments error:", error)
      return {
        data: [],
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch departments",
      }
    }
  }

  async createDepartment(department: { name: string; description?: string }): Promise<ApiResponse<Department>> {
    try {
      const response = await fetch(`${BASE_URL}/api/departments`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(department),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Create department error:", error)
      return {
        data: {} as Department,
        success: false,
        message: error instanceof Error ? error.message : "Failed to create department",
      }
    }
  }

  async updateDepartment(
    id: number,
    department: { name: string; description?: string },
  ): Promise<ApiResponse<Department>> {
    try {
      const response = await fetch(`${BASE_URL}/api/departments/${id}`, {
        method: "PUT",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(department),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Update department error:", error)
      return {
        data: {} as Department,
        success: false,
        message: error instanceof Error ? error.message : "Failed to update department",
      }
    }
  }

  async deleteDepartment(id: number): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${BASE_URL}/api/departments/${id}`, {
        method: "DELETE",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return {
        data: undefined as void,
        success: true,
      }
    } catch (error) {
      console.error("Delete department error:", error)
      return {
        data: undefined as void,
        success: false,
        message: error instanceof Error ? error.message : "Failed to delete department",
      }
    }
  }

  // Role endpoints
  async getRoles(): Promise<ApiResponse<Role[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/roles`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Get roles error:", error)
      return {
        data: [],
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch roles",
      }
    }
  }

  async createRole(role: { name: string; description?: string }): Promise<ApiResponse<Role>> {
    try {
      const response = await fetch(`${BASE_URL}/api/roles`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(role),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Create role error:", error)
      return {
        data: {} as Role,
        success: false,
        message: error instanceof Error ? error.message : "Failed to create role",
      }
    }
  }

  async updateRole(id: number, role: { name: string; description?: string }): Promise<ApiResponse<Role>> {
    try {
      const response = await fetch(`${BASE_URL}/api/roles/${id}`, {
        method: "PUT",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(role),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error("Update role error:", error)
      return {
        data: {} as Role,
        success: false,
        message: error instanceof Error ? error.message : "Failed to update role",
      }
    }
  }

  async deleteRole(id: number): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${BASE_URL}/api/roles/${id}`, {
        method: "DELETE",
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return {
        data: undefined as void,
        success: true,
      }
    } catch (error) {
      console.error("Delete role error:", error)
      return {
        data: undefined as void,
        success: false,
        message: error instanceof Error ? error.message : "Failed to delete role",
      }
    }
  }
}

export const apiService = new ApiService()
