import React, { useState } from 'react';
import { userRoles } from '../data/tccData';

const KPIManagement = ({ currentRole, onClose }) => {
  const [activeTab, setActiveTab] = useState('organize');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mockKPIs = [
    { id: 1, name: '% Hojas Completas', category: 'Asistencia', status: 'active', lastUpdated: '2024-01-15', role: ['Manager', 'HR'] },
    { id: 2, name: '% Hojas Aprobadas', category: 'Aprobaciones', status: 'active', lastUpdated: '2024-01-15', role: ['Manager', 'HR'] },
    { id: 3, name: 'Horas Extra Totales', category: 'Tiempo', status: 'active', lastUpdated: '2024-01-14', role: ['HR'] },
    { id: 4, name: 'Excepciones Abiertas', category: 'Calidad', status: 'inactive', lastUpdated: '2024-01-13', role: ['HR', 'Config'] },
    { id: 5, name: 'Costo OT Proyectado', category: 'Financiero', status: 'active', lastUpdated: '2024-01-12', role: ['HR'] }
  ];

  const categories = ['all', 'Asistencia', 'Aprobaciones', 'Tiempo', 'Calidad', 'Financiero'];

  const filteredKPIs = mockKPIs.filter(kpi => {
    const matchesSearch = kpi.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || kpi.category === selectedCategory;
    const hasPermission = kpi.role.includes(currentRole);
    return matchesSearch && matchesCategory && hasPermission;
  });

  const kpiTemplates = [
    { id: 't1', name: 'Dashboard Ejecutivo', description: 'KPIs principales para directivos', kpis: ['% Hojas Completas', 'Costo OT', 'Eficiencia Global'] },
    { id: 't2', name: 'Control Operativo', description: 'Métricas diarias de operación', kpis: ['Excepciones Abiertas', 'Fichadas Pendientes', 'Horas Extra'] },
    { id: 't3', name: 'Análisis RRHH', description: 'Indicadores de recursos humanos', kpis: ['Ausentismo', 'Rotación', 'Satisfacción'] }
  ];

  return (
    <div className="builder-panel p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="tcc-brand-title text-2xl">Gestión de KPIs</h2>
        <button onClick={onClose} className="tcc-btn-ghost">
          ✕ Cerrar
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/20 mb-6">
        {[
          { id: 'organize', label: '🎛️ Organizar', desc: 'Gestiona tus KPIs existentes' },
          { id: 'templates', label: '📋 Plantillas', desc: 'KPIs predefinidos listos para usar' },
          { id: 'sharing', label: '👥 Compartir', desc: 'Comparte KPIs entre equipos' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-left transition-colors ${
              activeTab === tab.id 
                ? 'border-b-2 border-[var(--bl-gold)] text-[var(--bl-gold)]' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <div className="font-medium">{tab.label}</div>
            <div className="text-xs opacity-70">{tab.desc}</div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'organize' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar KPIs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="tcc-input w-full"
              />
            </div>
            <div>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="tcc-input"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'Todas las Categorías' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* KPI List */}
          <div className="space-y-3">
            {filteredKPIs.map(kpi => (
              <div key={kpi.id} className="tcc-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${kpi.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                  <div>
                    <h4 className="font-medium">{kpi.name}</h4>
                    <div className="text-sm tcc-muted">
                      {kpi.category} • Actualizado: {kpi.lastUpdated}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="tcc-btn-ghost text-sm">✏️ Editar</button>
                  <button className="tcc-btn-ghost text-sm">📊 Ver</button>
                  <button className={`text-sm px-3 py-1 rounded ${kpi.status === 'active' ? 'tcc-btn-ghost' : 'tcc-btn'}`}>
                    {kpi.status === 'active' ? 'Desactivar' : 'Activar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Plantillas de KPIs</h3>
            <p className="tcc-muted">Conjuntos predefinidos de KPIs para diferentes necesidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kpiTemplates.map(template => (
              <div key={template.id} className="tcc-card p-4">
                <h4 className="font-bold mb-2">{template.name}</h4>
                <p className="text-sm tcc-muted mb-4">{template.description}</p>
                <div className="space-y-2 mb-4">
                  {template.kpis.map(kpi => (
                    <div key={kpi} className="text-xs bg-white/10 px-2 py-1 rounded">
                      {kpi}
                    </div>
                  ))}
                </div>
                <button className="tcc-btn w-full text-sm">
                  Aplicar Plantilla
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'sharing' && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Compartir KPIs</h3>
            <p className="tcc-muted">Gestiona el acceso y visibilidad de tus KPIs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tcc-card p-4">
              <h4 className="font-bold mb-4">🔗 Compartir Dashboard</h4>
              <div className="space-y-3">
                <div>
                  <label className="tcc-label">URL para Compartir</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value="https://tcc.company.com/dashboard/abc123"
                      readOnly
                      className="tcc-input flex-1"
                    />
                    <button className="tcc-btn-ghost">📋</button>
                  </div>
                </div>
                <div>
                  <label className="tcc-label">Permisos</label>
                  <select className="tcc-input">
                    <option>Solo Lectura</option>
                    <option>Lectura y Comentarios</option>
                    <option>Editor</option>
                  </select>
                </div>
                <button className="tcc-btn w-full">Generar Link</button>
              </div>
            </div>

            <div className="tcc-card p-4">
              <h4 className="font-bold mb-4">👥 Acceso por Roles</h4>
              <div className="space-y-3">
                {Object.keys(userRoles).map(role => (
                  <div key={role} className="flex items-center justify-between">
                    <span>{userRoles[role].name}</span>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm tcc-muted">Ver</span>
                      <input type="checkbox" />
                      <span className="text-sm tcc-muted">Editar</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="tcc-btn w-full mt-4">Guardar Permisos</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KPIManagement;