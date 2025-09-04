import React, { useState, useEffect } from 'react';
import { mockKPIData, userRoles } from '../data/tccData';

const EnhancedKPIGrid = ({ currentRole, customizeMode }) => {
  const [kpis, setKpis] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Load default KPIs based on role
    const defaultKPIs = userRoles[currentRole]?.defaultKPIs || [];
    const kpiList = defaultKPIs.map(kpiId => ({
      id: kpiId,
      ...getKPIConfig(kpiId),
      data: mockKPIData[kpiId] || { value: 0, trend: 0, target: 0 }
    }));
    setKpis(kpiList);
  }, [currentRole]);

  const getKPIConfig = (kpiId) => {
    const configs = {
      completedSheets: { title: '% Hojas Completas', type: 'percentage', icon: '📋', color: 'blue' },
      approvedSheets: { title: '% Hojas Aprobadas', type: 'percentage', icon: '✅', color: 'green' },
      overtimeHours: { title: 'Horas Extra Totales', type: 'number', icon: '⏰', color: 'orange' },
      absencesWithoutBalance: { title: '% Ausencias sin Saldo', type: 'percentage', icon: '🚫', color: 'red' },
      incompleteCheckins: { title: 'Fichadas Incompletas/Emp', type: 'number', icon: '📍', color: 'yellow' },
      avgApprovalTime: { title: 'Tiempo Prom. Aprobación', type: 'number', icon: '⏱️', color: 'purple' },
      openExceptions: { title: 'Excepciones Abiertas', type: 'number', icon: '⚠️', color: 'red' },
      projectedOTCost: { title: 'Costo OT Proyectado', type: 'currency', icon: '💰', color: 'green' }
    };
    return configs[kpiId] || { title: 'KPI', type: 'number', icon: '📊', color: 'blue' };
  };

  const formatValue = (value, type) => {
    switch (type) {
      case 'percentage':
        return `${value}%`;
      case 'currency':
        return `$${value.toLocaleString()}`;
      default:
        return value.toString();
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
      green: 'from-green-500/20 to-green-600/10 border-green-500/30',
      orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
      red: 'from-red-500/20 to-red-600/10 border-red-500/30',
      yellow: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30',
      purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30'
    };
    return colors[color] || colors.blue;
  };

  const filteredKpis = kpis.filter(kpi => {
    if (filter === 'all') return true;
    if (filter === 'alerts') return kpi.data.value < kpi.data.target;
    if (filter === 'trending') return Math.abs(kpi.data.trend) > 2;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="tcc-label">Filtrar:</span>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="tcc-input w-auto"
            >
              <option value="all">Todos los KPIs</option>
              <option value="alerts">Con Alertas</option>
              <option value="trending">Tendencias Fuertes</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="tcc-label">Ordenar:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="tcc-input w-auto"
            >
              <option value="name">Por Nombre</option>
              <option value="value">Por Valor</option>
              <option value="trend">Por Tendencia</option>
            </select>
          </div>
        </div>
        <div className="text-sm tcc-muted">
          {filteredKpis.length} KPIs • Rol: {currentRole}
        </div>
      </div>

      {/* KPI Grid */}
      <div className={`grid gap-6 ${customizeMode ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
        {filteredKpis.map((kpi, index) => (
          <div
            key={kpi.id}
            className={`kpi-card tcc-card p-6 bg-gradient-to-br ${getColorClasses(kpi.color)} border ${customizeMode ? 'border-dashed border-2' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* KPI Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{kpi.icon}</span>
                <div>
                  <h3 className="text-sm tcc-muted font-medium">{kpi.title}</h3>
                  <div className="kpi-value">
                    {formatValue(kpi.data.value, kpi.type)}
                  </div>
                </div>
              </div>
              {customizeMode && (
                <div className="flex gap-1">
                  <button className="w-6 h-6 bg-red-500/20 text-red-400 rounded text-xs hover:bg-red-500/30">
                    ×
                  </button>
                  <button className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded text-xs hover:bg-blue-500/30">
                    ⚙
                  </button>
                </div>
              )}
            </div>

            {/* KPI Metrics */}
            <div className="space-y-3">
              {/* Trend */}
              <div className={`kpi-trend ${kpi.data.trend >= 0 ? 'positive' : 'negative'}`}>
                <span>{kpi.data.trend >= 0 ? '↗' : '↘'}</span>
                <span>{Math.abs(kpi.data.trend)}% vs mes anterior</span>
              </div>

              {/* Target (if applicable) */}
              {kpi.data.target && (
                <div className="flex items-center justify-between text-xs">
                  <span className="tcc-muted">Objetivo:</span>
                  <span className={kpi.data.value >= kpi.data.target ? 'text-green-400' : 'text-red-400'}>
                    {formatValue(kpi.data.target, kpi.type)}
                  </span>
                </div>
              )}

              {/* Progress Bar */}
              {kpi.data.target && (
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      kpi.data.value >= kpi.data.target ? 'bg-green-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${Math.min((kpi.data.value / kpi.data.target) * 100, 100)}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Alert Indicator */}
            {kpi.data.target && kpi.data.value < kpi.data.target && (
              <div className="mt-3 flex items-center gap-2 text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                <span>⚠️</span>
                <span>Por debajo del objetivo</span>
              </div>
            )}
          </div>
        ))}

        {/* Add New KPI Placeholder (in customize mode) */}
        {customizeMode && (
          <div className="drag-zone flex flex-col items-center justify-center p-8 min-h-48 text-center">
            <div className="text-4xl mb-3 opacity-50">➕</div>
            <h3 className="tcc-brand-title text-lg mb-2">Añadir Nuevo KPI</h3>
            <p className="tcc-muted text-sm mb-4">
              Arrastra un KPI aquí o haz clic para crear uno nuevo
            </p>
            <button className="tcc-btn-ghost text-sm">
              Crear KPI
            </button>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="tcc-card p-4 text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-lg font-bold text-white">{filteredKpis.length}</div>
          <div className="text-sm tcc-muted">KPIs Activos</div>
        </div>
        <div className="tcc-card p-4 text-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-lg font-bold text-green-400">
            {filteredKpis.filter(k => k.data.target && k.data.value >= k.data.target).length}
          </div>
          <div className="text-sm tcc-muted">Objetivos Cumplidos</div>
        </div>
        <div className="tcc-card p-4 text-center">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="text-lg font-bold text-orange-400">
            {filteredKpis.filter(k => k.data.target && k.data.value < k.data.target).length}
          </div>
          <div className="text-sm tcc-muted">Requieren Atención</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedKPIGrid;