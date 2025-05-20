
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";

// Pages
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import RfqManagement from "./pages/RfqManagement";
import Suppliers from "./pages/Suppliers";
import Contracts from "./pages/Contracts";
import NewContract from "./pages/NewContract";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

// New Pages for the restructured navigation
import SupplierEvaluation from "./pages/SupplierEvaluation";
import SupplierSelection from "./pages/SupplierSelection";
import SupplierPerformance from "./pages/SupplierPerformance";
import RiskManagement from "./pages/RiskManagement";
import CategoryStrategy from "./pages/CategoryStrategy";
import PurchasingKPI from "./pages/PurchasingKPI";
import Trainings from "./pages/Trainings";

// Layouts
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

// Protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        
        {/* Protected routes with AppLayout */}
        <Route element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }>
          {/* Main sections */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* RFQ to Source */}
          <Route path="/rfq" element={<RfqManagement />} />
          <Route path="/supplier-evaluation" element={<SupplierEvaluation />} />
          <Route path="/supplier-selection" element={<SupplierSelection />} />
          
          {/* SRM */}
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/contracts/new" element={<NewContract />} />
          <Route path="/supplier-performance" element={<SupplierPerformance />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          
          {/* Strategy and Team */}
          <Route path="/category-strategy" element={<CategoryStrategy />} />
          <Route path="/purchasing-kpi" element={<PurchasingKPI />} />
          <Route path="/trainings" element={<Trainings />} />
          
          {/* Settings */}
          <Route path="/settings" element={<Settings />} />
        </Route>
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
