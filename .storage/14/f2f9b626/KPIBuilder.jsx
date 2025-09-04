import React, { useState } from 'react';
import { availableMetrics, kpiTemplates } from '../data/tccData';

const KPIBuilder = ({ currentRole, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [kpiConfig, setKpiConfig] = useState({
    name: '',
    description: '',
    metric: '',
    field: '',
    calculation: 'sum',
    filters: [],
    target: '',
    alertThreshold: ''
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSave = () => {
    // Simulate saving the KPI
    alert('KPI creado exitosamente: ' + kpiConfig.name);
    onClose();
  };

  return (
    <div className="builder-panel p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="tcc-brand-title text-2xl">Constructor de KPIs</h2>
        <button onClick={onClose} className="tcc-btn-ghost">
          ✕ Cerrar
        </button>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map(num => (
          <div key={num} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= num ? 'bg-gradient-to-r from-[var(--bl-gold)] to-yellow-400 text-black' : 'bg-white/20 text-white/60'
            }`}>
              {num}
            </div>
            {num < 4 && (
              <div className={`w-16 h-0.5 mx-2 ${
                step > num ? 'bg-gradient-to-r from-[var(--bl-gold)] to-yellow-400' : 'bg-white/20'
              }`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-96">
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Paso 1: Selecciona una Métrica</h3>
            <p className="tcc-muted mb-6">Elige el tipo de datos que quieres medir en tu KPI.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableMetrics.map(metric => (
                <div
                  key={metric.id}
                  onClick={() => {
                    setSelectedMetric(metric);
                    setKpiConfig({...kpiConfig, metric: metric.id});
                  }}
                  className={`tcc-card p-4 cursor-pointer transition-all hover:scale-105 ${
                    selectedMetric?.id === metric.id ? 'ring-2 ring-[var(--bl-gold)]' : ''
                  }`}
                >
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <h4 className="font-bold mb-2">{metric.name}</h4>
                  <div className="text-sm tcc-muted">
                    {metric.fields.slice(0, 3).join(', ')}
                    {metric.fields.length > 3 && '...'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedMetric && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Paso 2: Configura el Campo</h3>
            <p className="tcc-muted mb-6">Selecciona qué campo específico de {selectedMetric.name} quieres medir.</p>
            
            <div className="space-y-4">
              <div>
                <label className="tcc-label">Campo a Medir</label>
                <select 
                  value={kpiConfig.field}
                  onChange={(e) => setKpiConfig({...kpiConfig, field: e.target.value})}
                  className="tcc-input"
                >
                  <option value="">Selecciona un campo...</option>
                  {selectedMetric.fields.map(field => (
                    <option key={field} value={field}>{field}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="tcc-label">Tipo de Cálculo</label>
                <select 
                  value={kpiConfig.calculation}
                  onChange={(e) => setKpiConfig({...kpiConfig, calculation: e.target.value})}
                  className="tcc-input"
                >
                  <option value="sum">Suma Total</option>
                  <option value="avg">Promedio</option>
                  <option value="count">Conteo</option>
                  <option value="percentage">Porcentaje</option>
                  <option value="ratio">Ratio</option>
                </select>
              </div>

              <div>
                <label className="tcc-label">Filtros (Opcional)</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <select className="tcc-input flex-1">
                      <option>Área</option>
                      <option>País</option>
                      <option>Manager</option>
                    </select>
                    <select className="tcc-input flex-1">
                      <option>es igual a</option>
                      <option>contiene</option>
                      <option>es mayor que</option>
                    </select>
                    <input type="text" className="tcc-input flex-1" placeholder="Valor" />
                    <button className="tcc-btn-ghost px-3">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Paso 3: Elige una Plantilla</h3>
            <p className="tcc-muted mb-6">Selecciona cómo quieres que se visualice tu KPI.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {kpiTemplates.map(template => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`tcc-card p-4 cursor-pointer transition-all hover:scale-105 ${
                    selectedTemplate?.id === template.id ? 'ring-2 ring-[var(--bl-gold)]' : ''
                  }`}
                >
                  <h4 className="font-bold mb-2">{template.name}</h4>
                  <p className="text-sm tcc-muted mb-4">{template.description}</p>
                  
                  {/* Template Preview */}
                  <div className="bg-black/20 p-3 rounded-lg">
                    <div className="text-xs tcc-muted mb-1">Vista Previa</div>
                    {template.config.type === 'percentage' && (
                      <div className="text-2xl font-bold text-[var(--bl-gold)]">94.2%</div>
                    )}
                    {template.config.type === 'number' && (
                      <div className="text-2xl font-bold text-[var(--bl-gold)]">145</div>
                    )}
                    {template.config.type === 'currency' && (
                      <div className="text-2xl font-bold text-[var(--bl-gold)]">$28,500</div>
                    )}
                    {template.config.showTrend && (
                      <div className="text-xs text-green-400 mt-1">↗ +2.1%</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Paso 4: Configuración Final</h3>
            <p className="tcc-muted mb-6">Completa los detalles de tu KPI.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="tcc-label">Nombre del KPI</label>
                  <input 
                    type="text"
                    value={kpiConfig.name}
                    onChange={(e) => setKpiConfig({...kpiConfig, name: e.target.value})}
                    className="tcc-input"
                    placeholder="Ej: Eficiencia de Aprobaciones"
                  />
                </div>

                <div>
                  <label className="tcc-label">Descripción</label>
                  <textarea 
                    value={kpiConfig.description}
                    onChange={(e) => setKpiConfig({...kpiConfig, description: e.target.value})}
                    className="tcc-input h-20 resize-none"
                    placeholder="Describe qué mide este KPI..."
                  />
                </div>

                <div>
                  <label className="tcc-label">Objetivo/Meta</label>
                  <input 
                    type="number"
                    value={kpiConfig.target}
                    onChange={(e) => setKpiConfig({...kpiConfig, target: e.target.value})}
                    className="tcc-input"
                    placeholder="Ej: 95"
                  />
                </div>

                <div>
                  <label className="tcc-label">Umbral de Alerta</label>
                  <input 
                    type="number"
                    value={kpiConfig.alertThreshold}
                    onChange={(e) => setKpiConfig({...kpiConfig, alertThreshold: e.target.value})}
                    className="tcc-input"
                    placeholder="Ej: 85"
                  />
                </div>
              </div>

              <div className="tcc-card p-4">
                <h4 className="font-bold mb-3">Vista Previa del KPI</h4>
                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="text-sm tcc-muted mb-1">
                    {kpiConfig.name || 'Nombre del KPI'}
                  </div>
                  <div className="text-3xl font-bold text-[var(--bl-gold)] mb-2">
                    {selectedTemplate?.config.type === 'percentage' ? '94.2%' :
                     selectedTemplate?.config.type === 'currency' ? '$28,500' : '145'}
                  </div>
                  <div className="text-xs text-green-400">↗ +2.1% vs mes anterior</div>
                  {kpiConfig.target && (
                    <div className="text-xs tcc-muted mt-2">
                      Objetivo: {kpiConfig.target}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button 
          onClick={handlePrev}
          disabled={step === 1}
          className={`tcc-btn-ghost ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ← Anterior
        </button>
        
        <div className="flex gap-2">
          {step < 4 ? (
            <button 
              onClick={handleNext}
              disabled={!selectedMetric && step === 1}
              className={`tcc-btn ${(!selectedMetric && step === 1) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Siguiente →
            </button>
          ) : (
            <button 
              onClick={handleSave}
              className="tcc-btn"
            >
              💾 Crear KPI
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default KPIBuilder;