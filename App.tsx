import React, { useState, useCallback } from 'react';
import { UserRole, Village, Alert, AIAnalysisResult, HealthStatus } from './types';
import { INITIAL_VILLAGES } from './constants';
import AshaPanel from './components/AshaPanel';
import AdminDashboard from './components/AdminDashboard';
import { Stethoscope, LogOut, Map as MapIcon, User } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // Since I can't npm install, I'll use a simple random string generator in helper

const generateId = () => Math.random().toString(36).substr(2, 9);

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(null);
  const [villages, setVillages] = useState<Village[]>(INITIAL_VILLAGES);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const handleLogin = (selectedRole: UserRole) => {
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  const handleReportSubmit = useCallback((villageId: string, caseData: any, analysis: AIAnalysisResult) => {
    setVillages(prev => prev.map(village => {
      if (village.id === villageId) {
        // Create new case
        const newCase = {
          id: generateId(),
          ...caseData
        };
        
        return {
          ...village,
          cases: [...village.cases, newCase],
          status: analysis.newStatus, // Update status based on AI result
          lastUpdated: new Date().toISOString()
        };
      }
      return village;
    }));

    // Generate Alert if needed
    if (analysis.riskScore > 60 || analysis.newStatus === HealthStatus.Red) {
      const newAlert: Alert = {
        id: generateId(),
        villageId,
        message: `High Risk Detected: ${analysis.predictedOutbreak}. Action: ${analysis.recommendedActions[0]}`,
        severity: analysis.newStatus === HealthStatus.Red ? 'critical' : 'warning',
        timestamp: new Date().toISOString()
      };
      setAlerts(prev => [newAlert, ...prev]);
    }
  }, []);

  if (!role) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-teal-500">
          <div className="bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-10 h-10 text-teal-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">HealthMap AI</h1>
          <p className="text-slate-500 mb-8">Rural Health Monitoring & Outbreak Prevention System</p>
          
          <div className="space-y-4">
            <button 
              onClick={() => handleLogin('ASHA')}
              className="w-full py-4 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md transition-transform active:scale-95 flex items-center justify-center gap-3"
            >
              <User className="w-5 h-5" /> Login as ASHA Worker
            </button>
            <button 
              onClick={() => handleLogin('GOVT')}
              className="w-full py-4 px-6 rounded-xl bg-white border-2 border-slate-200 hover:border-indigo-500 text-slate-700 font-semibold transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <MapIcon className="w-5 h-5" /> Government Dashboard
            </button>
          </div>
          <p className="mt-8 text-xs text-slate-400">Powered by Gemini AI • Secure Government Portal</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 p-2 rounded-lg text-white">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">HealthMap AI</h1>
            <p className="text-xs text-slate-500 font-medium">
              {role === 'ASHA' ? 'Field Reporting Unit' : 'Central Command Dashboard'}
            </p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {role === 'ASHA' ? (
          <AshaPanel villages={villages} onReportSubmit={handleReportSubmit} />
        ) : (
          <AdminDashboard villages={villages} alerts={alerts} />
        )}
      </main>
    </div>
  );
};

export default App;