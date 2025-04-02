import React, { useState } from 'react';
import { FileText, Users, Clock, BarChart2, Plus, Eye, CheckCircle, XCircle, Upload } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockRequirements = [
  {
    id: 'REQ-001',
    title: 'Real-time Payment Processing System',
    department: 'Financial Operations',
    priority: 'HIGH',
    date: '3/15/2024',
    description: 'Implement a real-time payment processing system with support for multiple payment rails and instant settlement.',
    attachments: ['payment_flows.docx', 'compliance_requirements.pdf'],
    status: 'Processing',
    storyPoints: 13
  },
  {
    id: 'REQ-002',
    title: 'Digital Wallet Integration',
    department: 'Digital Banking',
    priority: 'MEDIUM',
    date: '3/14/2024',
    description: 'Integrate major digital wallet providers and enable seamless fund transfers between accounts.',
    attachments: ['wallet_specs.pdf'],
    status: 'Approved',
    storyPoints: 21
  },
  {
    id: 'REQ-003',
    title: 'KYC/AML Automation Platform',
    department: 'Compliance',
    priority: 'LOW',
    date: '3/13/2024',
    description: 'Develop an automated platform for KYC verification and AML monitoring using AI/ML.',
    attachments: ['compliance_workflow.pdf'],
    status: 'Pending Approval',
    storyPoints: 13
  }
];

const statusData = [
  { name: 'Pending Approval', value: 1 },
  { name: 'Approved', value: 1 },
  { name: 'Processing', value: 1 }
];

const departmentData = [
  { name: 'Financial Operations', value: 33 },
  { name: 'Digital Banking', value: 33 },
  { name: 'Compliance', value: 33 }
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

function App() {
  const [showNewRequirement, setShowNewRequirement] = useState(false);
  const [showJiraStories, setShowJiraStories] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState(null);

  const totalStoryPoints = mockRequirements.reduce((acc, req) => acc + req.storyPoints, 0);
  const departments = [...new Set(mockRequirements.map(req => req.department))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Automated Requirement Writing Dashboard</h1>
            <p className="text-blue-200">AI-Powered Requirements Management</p>
          </div>
          <button 
            onClick={() => setShowNewRequirement(!showNewRequirement)}
            className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            {showNewRequirement ? (
              <>
                <XCircle className="h-5 w-5" />
                <span>Close Form</span>
              </>
            ) : (
              <>
                <Plus className="h-5 w-5" />
                <span>New Requirement</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* New Requirement Form */}
      {showNewRequirement && (
        <div className="p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">New Requirement</h2>
              <button 
                onClick={() => setShowNewRequirement(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter requirement title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Enter requirement description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>Financial Operations</option>
                  <option>Digital Banking</option>
                  <option>Compliance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>HIGH</option>
                  <option>MEDIUM</option>
                  <option>LOW</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attachments
                </label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Drag and drop files here, or click to select files</p>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowNewRequirement(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Requirements</p>
              <h2 className="text-3xl font-bold">{mockRequirements.length}</h2>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Story Points</p>
              <h2 className="text-3xl font-bold">{totalStoryPoints}</h2>
            </div>
            <BarChart2 className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Departments</p>
              <h2 className="text-3xl font-bold">{departments.length}</h2>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Avg. Completion</p>
              <h2 className="text-3xl font-bold">14d</h2>
            </div>
            <Clock className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 px-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Requirements by Status</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Requirements List */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <div className="space-y-4">
              {mockRequirements.map((req) => (
                <div key={req.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">{req.id}</span>
                        <h3 className="font-medium">{req.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          req.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
                          req.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {req.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{req.description}</p>
                      <div className="mt-2 flex items-center space-x-2">
                        {req.attachments.map((file, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-sm">
                            <FileText className="h-4 w-4 mr-1" />
                            {file}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                        onClick={() => setShowJiraStories(true)}
                      >
                        <Eye className="h-5 w-5 mr-1" />
                        <span>View Jira Stories</span>
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <CheckCircle className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <XCircle className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{req.department}</span>
                    <span>•</span>
                    <span>{req.date}</span>
                    <span>•</span>
                    <span>{req.storyPoints} points</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Jira Stories Modal */}
      {showJiraStories && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-2/3 max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Generated Jira Stories</h2>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowJiraStories(false)}
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">STORY-001</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">5 points</span>
                  </div>
                  <div className="space-y-2">
                    <p><strong>As a</strong> Payment Operations Manager,</p>
                    <p><strong>I want to</strong> monitor real-time transaction processing status</p>
                    <p><strong>So that</strong> I can ensure timely settlement and identify potential issues</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">STORY-002</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">3 points</span>
                  </div>
                  <div className="space-y-2">
                    <p><strong>As a</strong> Risk Analyst,</p>
                    <p><strong>I want to</strong> receive automated fraud detection alerts</p>
                    <p><strong>So that</strong> I can quickly investigate and prevent unauthorized transactions</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">STORY-003</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">8 points</span>
                  </div>
                  <div className="space-y-2">
                    <p><strong>As a</strong> Compliance Officer,</p>
                    <p><strong>I want to</strong> access automated KYC verification reports</p>
                    <p><strong>So that</strong> I can ensure regulatory compliance and reduce manual review time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;