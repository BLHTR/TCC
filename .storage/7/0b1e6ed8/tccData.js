// Time Control Center Mock Data
export const mockEmployees = [
  { id: 1001, name: 'Paula Gómez', area: 'Operaciones', manager: 'Carlos López', country: 'Argentina' },
  { id: 1002, name: 'Lucas Díaz', area: 'RRHH', manager: 'María Pérez', country: 'Argentina' },
  { id: 1003, name: 'Martín Torres', area: 'IT', manager: 'J. Ramírez', country: 'Chile' },
  { id: 1004, name: 'Lucía Sosa', area: 'Ventas', manager: 'Carlos López', country: 'Chile' },
  { id: 1005, name: 'Rodolfo Fernández', area: 'Soporte', manager: 'María Pérez', country: 'Perú' },
  { id: 1006, name: 'Sofía Molina', area: 'Operaciones', manager: 'J. Ramírez', country: 'Perú' },
  { id: 1007, name: 'Nico García', area: 'IT', manager: 'Carlos López', country: 'Argentina' },
  { id: 1008, name: 'Carla Ruiz', area: 'RRHH', manager: 'María Pérez', country: 'Chile' }
];

export const mockKPIData = {
  completedSheets: { value: 94.2, trend: 2.1, target: 95 },
  approvedSheets: { value: 87.8, trend: -1.3, target: 90 },
  overtimeHours: { value: 145, trend: 8.5, target: 120 },
  absencesWithoutBalance: { value: 3.2, trend: -0.8, target: 2 },
  incompleteCheckins: { value: 0.8, trend: -0.2, target: 1 },
  avgApprovalTime: { value: 2.4, trend: -0.3, target: 2 },
  openExceptions: { value: 12, trend: -3, target: 5 },
  projectedOTCost: { value: 28500, trend: 12.3, target: 25000 }
};

export const mockAreaData = [
  { area: 'Operaciones', overtime: 45, employees: 12, efficiency: 92 },
  { area: 'RRHH', overtime: 18, employees: 8, efficiency: 96 },
  { area: 'IT', overtime: 32, employees: 10, efficiency: 88 },
  { area: 'Ventas', overtime: 28, employees: 15, efficiency: 94 },
  { area: 'Soporte', overtime: 22, employees: 9, efficiency: 90 }
];

export const mockExceptions = [
  {
    id: 'EX001',
    employee: 'Paula Gómez',
    date: '2024-01-15',
    rule: 'Fichada inexistente',
    severity: 'error',
    status: 'open'
  },
  {
    id: 'EX002',
    employee: 'Lucas Díaz',
    date: '2024-01-14',
    rule: 'Horas extra > umbral diario',
    severity: 'warn',
    status: 'resolved'
  }
];

export const availableMetrics = [
  {
    id: 'attendance',
    name: 'Asistencia',
    fields: ['Fichadas completas', 'Llegadas tardías', 'Salidas tempranas', 'Ausencias'],
    icon: '👥'
  },
  {
    id: 'overtime',
    name: 'Horas Extra',
    fields: ['Total horas', 'Costo proyectado', 'Por área', 'Por empleado'],
    icon: '⏰'
  },
  {
    id: 'approvals',
    name: 'Aprobaciones',
    fields: ['Pendientes', 'Aprobadas', 'Rechazadas', 'Tiempo promedio'],
    icon: '✅'
  },
  {
    id: 'exceptions',
    name: 'Excepciones',
    fields: ['Abiertas', 'Resueltas', 'Por severidad', 'Por regla'],
    icon: '⚠️'
  },
  {
    id: 'productivity',
    name: 'Productividad',
    fields: ['Eficiencia por área', 'Horas trabajadas', 'Objetivos cumplidos'],
    icon: '📊'
  }
];

export const kpiTemplates = [
  {
    id: 'template1',
    name: 'Porcentaje de Cumplimiento',
    description: 'Muestra un porcentaje con tendencia',
    config: {
      type: 'percentage',
      showTrend: true,
      showTarget: true
    }
  },
  {
    id: 'template2',
    name: 'Contador Simple',
    description: 'Número absoluto con comparación',
    config: {
      type: 'number',
      showTrend: true,
      showTarget: false
    }
  },
  {
    id: 'template3',
    name: 'Costo/Valor Monetario',
    description: 'Valores en moneda con formato',
    config: {
      type: 'currency',
      showTrend: true,
      showTarget: true
    }
  }
];

export const userRoles = {
  Manager: {
    name: 'Manager',
    permissions: ['view_team_kpis', 'approve_timesheets', 'view_exceptions'],
    defaultKPIs: ['completedSheets', 'approvedSheets', 'overtimeHours', 'openExceptions']
  },
  HR: {
    name: 'HR',
    permissions: ['view_all_kpis', 'manage_rules', 'resolve_exceptions', 'create_reports'],
    defaultKPIs: ['completedSheets', 'absencesWithoutBalance', 'avgApprovalTime', 'projectedOTCost']
  },
  Config: {
    name: 'Configurador',
    permissions: ['manage_system', 'create_kpis', 'manage_users', 'system_settings'],
    defaultKPIs: ['openExceptions', 'incompleteCheckins', 'overtimeHours', 'approvedSheets']
  }
};