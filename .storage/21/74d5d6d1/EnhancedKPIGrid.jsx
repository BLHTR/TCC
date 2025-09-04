import React, { useState, useEffect } from 'react';
import { mockKPIData, userRoles, mockWidgets, generateKPIValues } from '../data/tccData';

const EnhancedKPIGrid = ({ currentRole, customizeMode }) => {
  const [kpis, setKpis] = useState([]);
  const [kpiValues, setKpiValues] = useState({});
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Generar valores dinámicos como en el HTML original
    const values = generateKPIValues();
    setKpiValues(values);

    // Cargar KPIs por defecto basados en el rol (exacto del HTML original)
    const roleKPIs = userRoles[currentRole]?.defaultKPIs || [];
    const visibleWidgets = mockWidgets.filter(w => w.role.includes(currentRole));
    
    const kpiList = visibleWidgets.map(widget => ({
      id: widget.id,
      title: widget.title,
      type: widget.type || 'kpi',
      value: values[widget.id] || (Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10)),
      trend: (Math.random() - 0.5) * 10, // -5 a +5
      target: Math.floor(Math.random() * 10 + 90), // 90-99
      role: widget.role
    }));
    
    setKpis(kpiList);
  }, [currentRole]);

  const formatValue = (value, type) => {
    if (type === 'chart') return '';
    
    // Formatear exactamente como en el HTML original
    if (typeof value === 'string' && value.includes('.')) {
      return value + '%';
    }
    return value + '%';
  };

  const getKPIIcon = (title) => {
    // Iconos basados en el título, replicando la lógica del HTML original
    if (title.includes('Hojas')) return '📋';
    if (title.includes('Horas extra')) return '⏰';
    if (title.includes('Ausencias')) return '🚫';
    if (title.includes('Fichadas')) return '📍';
    if (title.includes('Tiempo')) return '⏱️';
    if (title.includes('Excepciones')) return '⚠️';
    if (title.includes('Costo')) return '💰';
    return '📊';
  };

  const getColorClasses = (index) => {
    const colors = [
      'from-blue-500/20 to-blue-600/10 border-blue-500/30',
      'from-green-500/20 to-green-600/10 border-green-500/30',
      'from-orange-500/20 to-orange-600/10 border-orange-500/30',
      'from-purple-500/20 to-purple-600/10 border-purple-500/30',
      'from-red-500/20 to-red-600/10 border-red-500/30',
      'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30'
    ];
    return colors[index % colors.length];
  };

  const filteredKpis = kpis.filter(kpi => {
    if (filter === 'all') return true;
    if (filter === 'alerts') return parseFloat(kpi.value) < kpi.target;
    if (filter === 'trending') return Math.abs(kpi.trend) > 2;
    return true;
  });

  // Renderizar gráficos como en el HTML original
  const renderChart = (kpi, index) => (
    <div
      key={kpi.id}
      className={`tcc-card p-4 bg-gradient-to-br ${getColorClasses(index)} border ${customizeMode ? 'border-dashed border-2' : ''}`}
      style={{ gridColumn: 'span 2', animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm tcc-muted font-medium">{kpi.title}</h3>
        {customizeMode && (
          <div className="flex gap-1">
            <button className="w-6 h-6 bg-red-500/20 text-red-400 rounded text-xs hover:bg-red-500/30">×</button>
            <button className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded text-xs hover:bg-blue-500/30">⚙</button>
          </div>
        )}
      </div>
      
      {/* Simulación de gráfico como en el HTML original */}
      <div className="bg-black/20 rounded-lg p-4 h-32 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl mb-2">{kpi.title.includes('Horas extra') ? '📊' : '🍩'}</div>
          <div className="text-xs tcc-muted">Gráfico interactivo</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Controls - Mejora 3: Gestión Avanzada */}
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

      {/* KPI Grid - Replicando exactamente el layout del HTML original */}
      <div className={`grid gap-3 ${customizeMode ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
        {filteredKpis.map((kpi, index) => {
          // Renderizar gráficos con span 2 como en el original
          if (kpi.type === 'chart') {
            return renderChart(kpi, index);
          }

          // Renderizar KPIs normales exactamente como en el HTML original
          return (
            <div
              key={kpi.id}
              className={`kpi-card tcc-card p-4 bg-gradient-to-br ${getColorClasses(index)} border relative overflow-hidden ${customizeMode ? 'border-dashed border-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Widget Controls (solo en modo personalización) */}
              {customizeMode && (
                <div className="absolute top-2 right-2 flex gap-1">
                  <button className="w-6 h-6 bg-red-500/20 text-red-400 rounded text-xs hover:bg-red-500/30">×</button>
                </div>
              )}

              {/* KPI Title - exacto del HTML original */}
              <div className="text-xs tcc-muted mb-1">{kpi.title}</div>
              
              {/* KPI Value - exacto del HTML original */}
              <div className="kpi-value text-4xl font-bold leading-none mb-2">
                {formatValue(kpi.value, kpi.type)}
              </div>

              {/* Trend indicator - Mejora 2: UX/UI mejorada */}
              {kpi.trend && (
                <div className={`kpi-trend text-xs ${kpi.trend >= 0 ? 'positive' : 'negative'}`}>
                  <span>{kpi.trend >= 0 ? '↗' : '↘'}</span>
                  <span>{Math.abs(kpi.trend).toFixed(1)}% vs mes anterior</span>
                </div>
              )}

              {/* Target Progress - Mejora 2: UX/UI mejorada */}
              {kpi.target && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="tcc-muted">Objetivo:</span>
                    <span className={parseFloat(kpi.value) >= kpi.target ? 'text-green-400' : 'text-red-400'}>
                      {kpi.target}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-500 ${
                        parseFloat(kpi.value) >= kpi.target ? 'bg-green-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${Math.min((parseFloat(kpi.value) / kpi.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Alert Indicator - Mejora 2: UX/UI mejorada */}
              {kpi.target && parseFloat(kpi.value) < kpi.target && (
                <div className="mt-2 flex items-center gap-2 text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                  <span>⚠️</span>
                  <span>Por debajo del objetivo</span>
                </div>
              )}
            </div>
          );
        })}

        {/* Add New KPI Placeholder (en modo personalización) - Mejora 1: Constructor No-Code */}
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

      {/* Quick Stats - Mejora 2: UX/UI mejorada */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="tcc-card p-4 text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-lg font-bold text-white">{filteredKpis.length}</div>
          <div className="text-sm tcc-muted">KPIs Activos</div>
        </div>
        <div className="tcc-card p-4 text-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-lg font-bold text-green-400">
            {filteredKpis.filter(k => k.target && parseFloat(k.value) >= k.target).length}
          </div>
          <div className="text-sm tcc-muted">Objetivos Cumplidos</div>
        </div>
        <div className="tcc-card p-4 text-center">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="text-lg font-bold text-orange-400">
            {filteredKpis.filter(k => k.target && parseFloat(k.value) < k.target).length}
          </div>
          <div className="text-sm tcc-muted">Requieren Atención</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedKPIGrid;