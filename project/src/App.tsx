import React from 'react';
import { 
  Brain, 
  BookOpen, 
  Users, 
  CheckCircle, 
  FileText, 
  Zap, 
  Eye, 
  PenTool,
  Shield,
  Settings,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  AlertCircle,
  Target,
  Sparkles,
  Database,
  ScanLine,
  ClipboardList,
  Award
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-blue-600">PlanbookAI</span>
                <span className="text-sm text-gray-500 ml-2">(PBA)</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#problems" className="text-gray-600 hover:text-blue-600 transition-colors">Problems</a>
              <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#roles" className="text-gray-600 hover:text-blue-600 transition-colors">Roles</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              <span>Capstone Project</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">PlanbookAI</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Build an AI Tools Portal for High School Teachers
            </h2>
            
            <h3 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Xây dựng cổng công cụ AI dành cho giáo viên trung học phổ thông
            </h3>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              A specialized AI-powered platform designed specifically for Chemistry teachers to reduce manual work, 
              automate repetitive tasks, and enhance teaching efficiency through intelligent tools and personalized workspaces.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center">
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Context */}
      <section className="py-20 bg-gray-50" id="problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding the Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern educators face increasing demands that impact their teaching effectiveness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Responsibilities</h3>
              <p className="text-gray-600">
                Teachers juggle both teaching and administrative tasks, stretching their time thin
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Repetitive Tasks</h3>
              <p className="text-gray-600">
                Manual lesson planning, grading, attendance, and reporting consume valuable time
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reduced Productivity</h3>
              <p className="text-gray-600">
                Lack of automation leads to decreased efficiency and increased stress levels
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resource Access</h3>
              <p className="text-gray-600">
                Difficulty in efficiently accessing and organizing teaching resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white" id="solution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Introducing PlanbookAI
                <br />
                <span className="text-blue-600">AI Tool Portal</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive platform that provides specialized AI tools designed specifically for Chemistry teachers. 
                Our solution reduces manual work and improves teaching efficiency through intelligent automation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Workspaces</h4>
                    <p className="text-gray-600">Each teacher gets a dedicated space to store and organize teaching resources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Automation</h4>
                    <p className="text-gray-600">Intelligent tools that handle repetitive tasks automatically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Chemistry-Focused</h4>
                    <p className="text-gray-600">Specialized tools tailored specifically for Chemistry education</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Discover the Solution
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                    <p className="text-sm text-gray-600">Always ready to help</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">Generate chemistry questions for Chapter 5</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">✓ Created 20 multiple choice questions</p>
                    <p className="text-sm text-gray-700">✓ Added to your question bank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI tools designed to streamline your teaching workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Question Bank Management</h3>
              <p className="text-gray-600 mb-6">
                Organize and manage your chemistry questions with AI-powered categorization and search capabilities.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Quản lý ngân hàng câu hỏi
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <PenTool className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise Creation</h3>
              <p className="text-gray-600 mb-6">
                Create engaging chemistry exercises with AI assistance, complete with solutions and explanations.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Tạo bài tập tự động
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <ClipboardList className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Choice Exam Generation</h3>
              <p className="text-gray-600 mb-6">
                Generate comprehensive multiple choice exams with varying difficulty levels and answer keys.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Tạo đề thi trắc nghiệm
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <ScanLine className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">OCR-Based Exam Grading</h3>
              <p className="text-gray-600 mb-6">
                Automatically grade handwritten exams using advanced OCR technology and AI analysis.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Chấm điểm tự động OCR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actors & Roles */}
      <section className="py-20 bg-white" id="roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Roles & Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four distinct roles designed to support the educational ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Admin</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">User management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">System configuration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Curriculum framework</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Revenue tracking</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manager</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Package management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Order management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Content approval</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Quality control</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Staff</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Sample lesson plans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Question bank curation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">AI prompts creation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Content development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Teacher</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Lesson planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Test creation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">OCR grading tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Student progress analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Teaching Experience?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join PlanbookAI and discover how AI can enhance your Chemistry teaching workflow
          </p>
          <p className="text-lg text-blue-200 mb-12">
            Sẵn sàng thay đổi trải nghiệm giảng dạy của bạn?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Request Demo
            </button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-blue-500">
            <p className="text-blue-200 text-sm">
              PlanbookAI (PBA) - Capstone Project for High School Chemistry Teachers
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">PlanbookAI</span>
                <span className="text-sm text-gray-400 ml-2">(PBA)</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 PlanbookAI. Capstone Project.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                AI Tools Portal for High School Chemistry Teachers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;