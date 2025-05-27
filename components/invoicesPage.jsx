import React, { useEffect, useState } from "react"; // ✅ Already have useState, add useEffect

import { Link } from "react-router-dom";
import {
  User,
  Bell,
  Search,
  Plus,
  BarChart3,
  Package,
  TrendingUp,
  FileText,
  Users,
  ShoppingCart,
  Receipt,
  Truck,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Star,
  X,
  MoreHorizontal,
} from "lucide-react";

export default function InvoiceDashboard() {
  const [salesExpanded, setSalesExpanded] = useState(true);
  const [purchasesExpanded, setPurchasesExpanded] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Unpaid");

  const SidebarItem = ({
    icon: Icon,
    label,
    isActive = false,
    hasSubmenu = false,
    isExpanded = false,
    onToggle,
    children,
  }) => (
    <div>
      <div
        className={`flex items-center px-10 py-3 text-sm cursor-pointer hover:bg-gray-100 ${
          isActive ? "bg-blue-50 text-gray-600  " : "text-gray-600"
        }`}
        onClick={onToggle}
      >
        <Icon size={18} className="mr-3" />
        <span className="flex-1">{label}</span>
        {hasSubmenu &&
          (isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </div>
      {hasSubmenu && isExpanded && <div className="ml-8">{children}</div>}
    </div>
  );

  const SubMenuItem = ({ label, isActive = false }) => (
    <div
      className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
        isActive ? "text-blue-600" : "text-gray-500"
      }`}
    >
      {label}
    </div>
  );

  const invoiceStats = [
    { label: "Overdue", amount: "Rs0", color: "text-blue-900" },
    { label: "Open", amount: "Rs0", color: "text-blue-900" },
    { label: "Draft", amount: "Rs0", color: "text-blue-900" },
  ];

  const filterTabs = ["Unpaid", "Draft", "All Invoices", "Recurring Templates"];

  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        {/* Logo */}
        <div className="p-4 bg-blue-50 ">
          <div className="flex items-center ml-15 mt-5">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-medium font-semi text-gray-600">
              Solutyics
            </span>
            <ChevronDown size={16} className="ml-auto text-gray-400" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 ml-15 bg-blue-50">
          <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Package className="w-5 h-5" />
            <span>Items</span>
          </div>

          {/* Sales Section */}
          <div>
            <div
              className="flex items-center justify-between p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSalesExpanded(!salesExpanded)}
            >
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Sales</span>
              </div>
              {salesExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>

            {salesExpanded && (
              <div className="ml-8 mt-2 space-y-1">
                <div className="flex items-center space-x-3 p-2 text-gray-600 bg-blue-50 rounded-lg cursor-pointer">
                  <span>Invoices</span>
                </div>
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span>Customers</span>
                </div>
              </div>
            )}
          </div>

          {/* Purchases Section */}
          <div>
            <div
              className="flex items-center justify-between p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setPurchasesExpanded(!purchasesExpanded)}
            >
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-5 h-5" />
                <span>Purchases</span>
              </div>
              {purchasesExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>

            {purchasesExpanded && (
              <div className="ml-8 mt-2 space-y-1 bg-blue-50">
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span>Bills</span>
                </div>
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span>Vendors</span>
                </div>
              </div>
            )}
          </div>

          <div className="absolute bg-gray-200 h-screen w-15  top-0 ml-auto flex flex-col gap-6 left-0 p-4">
            <User
              size={20}
              className="text-gray-700 cursor-pointer ml-auto mt-7 hover:text-gray-600"
            />
            <Bell
              size={19}
              className="text-gray-700 cursor-pointer ml-auto mt-4 hover:text-gray-600"
            />
            <Search
              size={19}
              className="text-gray-700 ml-auto cursor-pointer hover:text-gray-600"
            />
            <Plus
              size={19}
              className="text-gray-700  ml-auto cursor-pointer hover:text-gray-600"
            />
            <Settings
              size={19}
              className="text-gray-700 ml-auto cursor-pointer hover:text-gray-600"
            />
            <HelpCircle
              size={19}
              className="text-gray-700 ml-auto cursor-pointer hover:text-gray-600"
            />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className=" border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-semibold text-gray-800">Invoices</h1>
              <Star className="w-5 h-5 text-blue-900" />
            </div>
            <div className="flex items-center space-x-4 cursor-pointer">
              <button className="px-3 py-1 bg-green-600 text-white rounded-lg  hover:bg-green-700 font-medium  cursor-pointer">
                New Invoice
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 font-medium cursor-pointer">
                Estimates(Quotes)
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 font-medium cursor-pointer">
                Sales Orders
              </button>
              <button className="p-2 text-gray-600  bg-gray-100 rounded-lg hover:text-gray-800 cursor-pointer">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {invoiceStats.map((stat, index) => (
              <div key={index} className=" p-6 rounded-lg  ">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.amount}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className=" rounded-lg  ">
            <div className="">
              <div className="flex">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 font-medium border-b-2 ${
                      activeFilter === tab
                        ? " bg-blue-50"
                        : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveFilter(tab)}
                  >
                    {tab}
                    {tab === activeFilter && tab !== "Recurring Templates" && (
                      <X className="w-4 h-4 inline-block ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Bar */}
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Status</span>
                <span className="text-gray-600">=</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  Unpaid
                  <X className="w-3 h-3 ml-2 cursor-pointer" />
                </span>
                <input
                  type="text"
                  placeholder="Hit enter to filter the results, or set a new filter"
                  className="flex-1 px-3 py-2  rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <X className="w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Table Header */}
            <div className="px-6 py-4 bg-white cursor-pointer ">
              <div className="grid grid-cols-5 gap-4 text-sm font-medium  text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 " />
                </div>
                <div>
                  Due Date
                  <br />
                  <span className="text-xs text-gray-400">Invoice Date</span>
                </div>
                <div>Status</div>
                <div>
                  Customer
                  <br />
                  <span className="text-xs text-gray-400">Number</span>
                </div>
                <div className="text-right">Amount</div>
              </div>
            </div>

            {/* Empty State */}
            <div className="p-12 text-center text-gray-500">
              <div className="text-sm mb-2 mr-195">No records.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Button */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <div className="bg-blue-600 text-white px-3 py-8 rounded-l-lg cursor-pointer hover:bg-blue-700 transition-colors">
          <div className="transform -rotate-90 text-sm font-medium whitespace-nowrap">
            Feedback
          </div>
        </div>
      </div> */}
    </div>
  );
}
