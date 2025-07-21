"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEmployee } from "@/context/employee-context"
import { Settings, Shield, Database, Users, Activity, Server, Lock, AlertTriangle, CheckCircle } from "lucide-react"

export default function AdminPanel() {
  const { employees } = useEmployee()

  const systemStats = [
    {
      title: "System Status",
      value: "Online",
      icon: CheckCircle,
      description: "All systems operational",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Users",
      value: employees.length,
      icon: Users,
      description: "Currently logged in",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Server Load",
      value: "23%",
      icon: Server,
      description: "CPU utilization",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "Security Alerts",
      value: "0",
      icon: Shield,
      description: "No active threats",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  const adminTools = [
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: Users,
      action: "Manage Users",
      status: "active",
    },
    {
      title: "System Settings",
      description: "Configure system parameters",
      icon: Settings,
      action: "Open Settings",
      status: "active",
    },
    {
      title: "Database Management",
      description: "Backup and restore database",
      icon: Database,
      action: "Manage DB",
      status: "active",
    },
    {
      title: "Security Center",
      description: "Monitor security and access logs",
      icon: Lock,
      action: "View Security",
      status: "active",
    },
    {
      title: "System Logs",
      description: "View application and error logs",
      icon: Activity,
      action: "View Logs",
      status: "active",
    },
    {
      title: "Backup & Recovery",
      description: "Manage system backups",
      icon: Database,
      action: "Manage Backups",
      status: "maintenance",
    },
  ]

  const recentLogs = [
    {
      type: "info",
      message: "User login: john.doe@company.com",
      timestamp: "2024-01-15 09:15:23",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      type: "warning",
      message: "Failed login attempt from IP 192.168.1.100",
      timestamp: "2024-01-15 08:45:12",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      type: "info",
      message: "Database backup completed successfully",
      timestamp: "2024-01-15 02:00:00",
      icon: Database,
      color: "text-blue-600",
    },
    {
      type: "info",
      message: "System maintenance completed",
      timestamp: "2024-01-14 23:30:00",
      icon: Settings,
      color: "text-green-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Admin Panel</h2>
        <p className="text-muted-foreground">System administration and management tools</p>
      </div>

      {/* System Status */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Admin Tools */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {adminTools.map((tool, index) => {
          const Icon = tool.icon
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </div>
                  <Badge variant={tool.status === "active" ? "default" : "secondary"}>{tool.status}</Badge>
                </div>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" disabled={tool.status === "maintenance"}>
                  {tool.action}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* System Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent System Logs</CardTitle>
            <CardDescription>Latest system activities and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLogs.map((log, index) => {
                const Icon = log.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon className={`h-4 w-4 mt-0.5 ${log.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{log.message}</p>
                      <p className="text-xs text-muted-foreground">{log.timestamp}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Database className="mr-2 h-4 w-4" />
              Create Database Backup
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Export User Report
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Activity className="mr-2 h-4 w-4" />
              Generate System Report
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              System Maintenance Mode
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              Security Audit
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
          <CardDescription>Current system configuration and status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="font-medium mb-2">Application</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Version: 2.1.0</p>
                <p>Environment: Production</p>
                <p>Uptime: 15 days, 4 hours</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Database</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Type: PostgreSQL</p>
                <p>Version: 14.2</p>
                <p>Size: 2.3 GB</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Server</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>OS: Ubuntu 20.04</p>
                <p>Memory: 8 GB</p>
                <p>Storage: 500 GB SSD</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Security</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>SSL: Enabled</p>
                <p>2FA: Required</p>
                <p>Last Audit: Jan 10, 2024</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
