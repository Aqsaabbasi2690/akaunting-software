import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plus,
  User,
  Bell,
  Search,
  Settings,
  HelpCircle,
  Calendar,
  FileText,
  Users,
  ShoppingCart,
  CreditCard,
  Truck,
} from "lucide-react";

const Dashboard = () => {
  const [salesExpanded, setSalesExpanded] = useState(true);
  const [purchasesExpanded, setPurchasesExpanded] = useState(true);
  const [bankingExpanded, setBankingExpanded] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Unpaid");
  const navigate = useNavigate();

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

  const SubMenuItem = ({ label, isActive = false, onClick }) => (
    <div
      className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
        isActive ? "text-blue-600" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );

  const Widget = ({
    title,
    description,
    totalLabel,
    totalAmount,
    currency = "Rs",
    progressColor,
    openAmount,
    overdueAmount,
    viewReport = true,
  }) => (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-7">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          {viewReport && (
            <button className="text-sm text-gray-500 hover:text-gray-700">
              View Report
            </button>
          )}
          <MoreHorizontal
            size={20}
            className="text-gray-400 cursor-pointer hover:text-gray-600"
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          {totalLabel}:{" "}
          <span className="font-semibold">
            {currency}
            {totalAmount}
          </span>
        </p>
        <div className={`w-full h-2 bg-gray-200 rounded-full`}>
          <div
            className={`h-full rounded-full ${progressColor}`}
            style={{ width: overdueAmount > 0 ? "100%" : "0%" }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-sm text-orange-400 font-medium">Open</p>
          <p className="text-lg font-semibold text-gray-800">
            {currency}
            {openAmount}
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center">
            <p className="text-sm text-red-400 font-medium">Overdue</p>
            <ChevronDown size={16} className="ml-1 text-gray-400" />
          </div>
          <p className="text-lg font-semibold text-gray-800">
            {currency}
            {overdueAmount}
          </p>
        </div>
      </div>
    </div>
  );

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
        <nav className="py-1  ml-9  bg-blue-50 ">
          <SidebarItem icon={User} label="Dashboard" isActive={true} />
          <SidebarItem icon={Package} label="Items" />
          <SidebarItem
            icon={CreditCard}
            label="Sales"
            hasSubmenu={true}
            isExpanded={salesExpanded}
            onToggle={() => setSalesExpanded(!salesExpanded)}
          >
            <SubMenuItem
              label="Invoices"
              onClick={() => navigate("/invoices")}
            />
            <SubMenuItem
              label="Customers"
              onClick={() => navigate("/customers")}
            />
          </SidebarItem>
          <SidebarItem
            icon={ShoppingCart}
            label="Purchases"
            hasSubmenu={true}
            isExpanded={purchasesExpanded}
            onToggle={() => setPurchasesExpanded(!purchasesExpanded)}
          >
            <SubMenuItem label="Bills" onClick={() => navigate("/bills")} />
            <SubMenuItem label="Vendors" onClick={() => navigate("/vendors")} />
          </SidebarItem>
    
        </nav>

        {/* Bottom Icons */}
        <div className="absolute bg-gray-200 h-screen w-15 bottom-0 top-0 ml-auto flex flex-col gap-6  ">
          <User
            size={20}
            className="text-gray-700 cursor-pointer ml-4 mt-11 hover:text-gray-600"
          />
          <Bell
            size={19}
            className="text-gray-700 cursor-pointer ml-4 mt-4 hover:text-gray-600"
          />
          <Search
            size={19}
            className="text-gray-700 ml-4 cursor-pointer hover:text-gray-600"
          />
          <Plus
            size={19}
            className="text-gray-700  ml-4 cursor-pointer hover:text-gray-600"
          />
          <Settings
            size={19}
            className="text-gray-700 ml-4 cursor-pointer hover:text-gray-600"
          />
          <HelpCircle
            size={19}
            className="text-gray-700 ml-4 cursor-pointer hover:text-gray-600"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className=" bg-gray-50 px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-4xl font-semi text-gray-600">Dashboard</h1>
              <MoreVertical size={20} className="ml-2 text-gray-400" />
            </div>
            <div className="flex items-center gap-17 border rounded-sm">
              <div className="flex items-center gap-5 text-sm text-gray-500 ml-2">
                <Calendar size={14} />
                <span>2025-01-01</span>
              </div>
              -
              <div className="flex items-center gap-2 text-sm text-gray-500 mr-7">
                <span>2025-12-31</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}

        <div className="flex-1 p-6">
          <div className="flex justify-end mb-1 gap-7">
            <button className=" text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-200">
              Add Widget
            </button>

            <button className=" text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-200">
              New Dashboard
            </button>
          </div>
          <hr />
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Receivables Section */}
              <div className=" rounded-lg  p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl  text-gray-600">Receivables</h2>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-700 px-3 py-1 rounded hover:bg-blue-50 transition-colors">
                      View Report
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Amount that you're yet to receive from your customers
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-600">
                      Total unpaid invoices:
                    </span>
                    <span className=" text-sm text-gray-700 ">Rs0.00</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-300 h-2 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-500 text-sm font-medium mb-1">
                      Open
                    </div>
                    <div className="text-xl text-gray-700  ">Rs0.00</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 text-sm font-medium mb-1">
                        Overdue
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                        >
                          <path d="M3 6l3 3 3-3" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-xl text-gray-700 ">Rs0.00</div>
                  </div>
                </div>
              </div>

              {/* Payables Section */}
              <div className=" rounded-lg  p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl  text-gray-600">Payables</h2>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-700 px-3 py-1 rounded hover:bg-blue-50 transition-colors">
                      View Report
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Amount that you're yet to pay to your vendors
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-600">Total unpaid bills:</span>
                    <span className=" text-gray-600 text-sm">Rs59.99</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-300 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-orange-300 text-sm font-medium mb-1">
                      Open
                    </div>
                    <div className="text-xl text-gray-700 ">Rs0.00</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-red-400 font-medium">
                        Overdue
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                        >
                          <path d="M3 6l3 3 3-3" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-lg ">Rs59.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

