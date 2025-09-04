import React, { useState } from 'react';
import EnhancedKPIGrid from './EnhancedKPIGrid';
import KPIBuilder from './KPIBuilder';
import KPIManagement from './KPIManagement';

const Dashboard = ({ currentRole }) => {
  const [showBuilder, setShowBuilder] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [customizeMode, setCustomizeMode] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="tcc-brand-title text-4xl font-bold">
          Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowManagement(!showManagement)}
            className="tcc-btn-ghost flex items-center gap-2"
          >
            🎛️ Gestionar KPIs
          </button>
          <button
            onClick={() => setShowBuilder(!showBuilder)}
            className="tcc-btn flex items-center gap-2"
          >
            ➕ Crear KPI
          </button>
          <button
            onClick={() => setCustomizeMode(!customizeMode)}
            className={`flex items-center gap-2 ${customizeMode ? 'tcc-btn' : 'tcc-btn-ghost'}`}
          >
            🎨 {customizeMode ? 'Guardar' : 'Personalizar'}
          </button>
        </div>
      </div>

      {/* KPI Management Panel */}
      {showManagement && (
        <div className="animate-fade-in-up">
          <KPIManagement 
            currentRole={currentRole}
            onClose={() => setShowManagement(false)}
          />
        </div>
      )}

      {/* KPI Builder */}
      {showBuilder && (
        <div className="animate-fade-in-up">
          <KPIBuilder 
            currentRole={currentRole}
            onClose={() => setShowBuilder(false)}
          />
        </div>
      )}

      {/* Enhanced KPI Grid */}
      <EnhancedKPIGrid 
        currentRole={currentRole}
        customizeMode={customizeMode}
      />
    </div>
  );
};

export default Dashboard;