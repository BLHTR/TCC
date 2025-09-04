// Time Control Center Mock Data - Replicando exactamente los datos del HTML original

export const mockEmployees = [
  // Argentina - BlatoRH AR
  { id: 1000, nombre: 'Paula Gómez', pais: 'Argentina', compania: 'BlatoRH AR', area: 'Operaciones', manager: 'Carlos López' },
  { id: 1001, nombre: 'Lucas Díaz', pais: 'Argentina', compania: 'BlatoRH AR', area: 'RRHH', manager: 'María Pérez' },
  { id: 1002, nombre: 'Martín Torres', pais: 'Argentina', compania: 'BlatoRH AR', area: 'IT', manager: 'J. Ramírez' },
  { id: 1003, nombre: 'Lucía Sosa', pais: 'Argentina', compania: 'BlatoRH AR', area: 'Ventas', manager: 'Carlos López' },
  { id: 1004, nombre: 'Rodolfo Fernández', pais: 'Argentina', compania: 'BlatoRH AR', area: 'Soporte', manager: 'María Pérez' },
  { id: 1005, nombre: 'Sofía Molina', pais: 'Argentina', compania: 'BlatoRH AR', area: 'Operaciones', manager: 'J. Ramírez' },
  { id: 1006, nombre: 'Nico García', pais: 'Argentina', compania: 'BlatoRH AR', area: 'IT', manager: 'Carlos López' },
  { id: 1007, nombre: 'Carla Ruiz', pais: 'Argentina', compania: 'BlatoRH AR', area: 'RRHH', manager: 'María Pérez' },
  
  // Argentina - Cliente A AR
  { id: 1008, nombre: 'Paula Gómez', pais: 'Argentina', compania: 'Cliente A AR', area: 'Operaciones', manager: 'Carlos López' },
  { id: 1009, nombre: 'Lucas Díaz', pais: 'Argentina', compania: 'Cliente A AR', area: 'RRHH', manager: 'María Pérez' },
  { id: 1010, nombre: 'Martín Torres', pais: 'Argentina', compania: 'Cliente A AR', area: 'IT', manager: 'J. Ramírez' },
  { id: 1011, nombre: 'Lucía Sosa', pais: 'Argentina', compania: 'Cliente A AR', area: 'Ventas', manager: 'Carlos López' },
  { id: 1012, nombre: 'Rodolfo Fernández', pais: 'Argentina', compania: 'Cliente A AR', area: 'Soporte', manager: 'María Pérez' },
  { id: 1013, nombre: 'Sofía Molina', pais: 'Argentina', compania: 'Cliente A AR', area: 'Operaciones', manager: 'J. Ramírez' },
  { id: 1014, nombre: 'Nico García', pais: 'Argentina', compania: 'Cliente A AR', area: 'IT', manager: 'Carlos López' },
  { id: 1015, nombre: 'Carla Ruiz', pais: 'Argentina', compania: 'Cliente A AR', area: 'RRHH', manager: 'María Pérez' },

  // Chile - BlatoRH CL
  { id: 1016, nombre: 'Paula Gómez', pais: 'Chile', compania: 'BlatoRH CL', area: 'Operaciones', manager: 'Carlos López' },
  { id: 1017, nombre: 'Lucas Díaz', pais: 'Chile', compania: 'BlatoRH CL', area: 'RRHH', manager: 'María Pérez' },
  { id: 1018, nombre: 'Martín Torres', pais: 'Chile', compania: 'BlatoRH CL', area: 'IT', manager: 'J. Ramírez' },
  { id: 1019, nombre: 'Lucía Sosa', pais: 'Chile', compania: 'BlatoRH CL', area: 'Ventas', manager: 'Carlos López' },
  { id: 1020, nombre: 'Rodolfo Fernández', pais: 'Chile', compania: 'BlatoRH CL', area: 'Soporte', manager: 'María Pérez' },
  { id: 1021, nombre: 'Sofía Molina', pais: 'Chile', compania: 'BlatoRH CL', area: 'Operaciones', manager: 'J. Ramírez' },
  { id: 1022, nombre: 'Nico García', pais: 'Chile', compania: 'BlatoRH CL', area: 'IT', manager: 'Carlos López' },
  { id: 1023, nombre: 'Carla Ruiz', pais: 'Chile', compania: 'BlatoRH CL', area: 'RRHH', manager: 'María Pérez' },

  // Perú - BlatoRH PE
  { id: 1024, nombre: 'Paula Gómez', pais: 'Perú', compania: 'BlatoRH PE', area: 'Operaciones', manager: 'Carlos López' },
  { id: 1025, nombre: 'Lucas Díaz', pais: 'Perú', compania: 'BlatoRH PE', area: 'RRHH', manager: 'María Pérez' },
  { id: 1026, nombre: 'Martín Torres', pais: 'Perú', compania: 'BlatoRH PE', area: 'IT', manager: 'J. Ramírez' },
  { id: 1027, nombre: 'Lucía Sosa', pais: 'Perú', compania: 'BlatoRH PE', area: 'Ventas', manager: 'Carlos López' },
  { id: 1028, nombre: 'Rodolfo Fernández', pais: 'Perú', compania: 'BlatoRH PE', area: 'Soporte', manager: 'María Pérez' },
  { id: 1029, nombre: 'Sofía Molina', pais: 'Perú', compania: 'BlatoRH PE', area: 'Operaciones', manager: 'J. Ramírez' },
  { id: 1030, nombre: 'Nico García', pais: 'Perú', compania: 'BlatoRH PE', area: 'IT', manager: 'Carlos López' },
  { id: 1031, nombre: 'Carla Ruiz', pais: 'Perú', compania: 'BlatoRH PE', area: 'RRHH', manager: 'María Pérez' }
];

// KPI Data exactamente como en el HTML original - valores dinámicos generados
export const mockKPIData = {
  // Los valores se generan dinámicamente usando las mismas funciones del HTML original
  completedSheets: { value: 94.2, trend: 2.1, target: 95 },
  approvedSheets: { value: 87.8, trend: -1.3, target: 90 },
  overtimeHours: { value: 145, trend: 8.5, target: 120 },
  absencesWithoutBalance: { value: 3.2, trend: -0.8, target: 2 },
  incompleteCheckins: { value: 0.8, trend: -0.2, target: 1 },
  avgApprovalTime: { value: 2.4, trend: -0.3, target: 2 },
  openExceptions: { value: 12, trend: -3, target: 5 },
  projectedOTCost: { value: 28500, trend: 12.3, target: 25000 }
};

// Datos de áreas exactos del HTML original
export const mockAreaData = [
  { area: 'Operaciones', overtime: 45, employees: 12, efficiency: 92 },
  { area: 'RRHH', overtime: 18, employees: 8, efficiency: 96 },
  { area: 'IT', overtime: 32, employees: 10, efficiency: 88 },
  { area: 'Ventas', overtime: 28, employees: 15, efficiency: 94 },
  { area: 'Soporte', overtime: 22, employees: 9, efficiency: 90 }
];

// Excepciones generadas dinámicamente como en el HTML original
export const generateMockExceptions = () => {
  const exceptions = [];
  const today = new Date();
  
  // Asegurar al menos una excepción accionable para Joule (como en el original)
  const actionableEmp = mockEmployees[Math.floor(Math.random() * mockEmployees.length)];
  const actionableDate = new Date(today);
  actionableDate.setDate(today.getDate() - 2);
  
  exceptions.push({
    id: crypto.randomUUID(),
    empId: actionableEmp.id,
    empleado: actionableEmp.nombre,
    fecha: actionableDate.toISOString().slice(0, 10),
    regla: 'Fichada inexistente',
    severity: 'error',
    status: 'open',
    jouleActionable: true
  });

  // Generar más excepciones aleatoriamente como en el original
  mockEmployees.forEach(emp => {
    if (Math.random() < 0.4) {
      const fecha = new Date(today);
      fecha.setDate(today.getDate() - Math.floor(Math.random() * 7 + 1));
      const reglas = ['Fichada inexistente', 'Horas extra > umbral diario', 'Ausencia sin saldo'];
      const regla = reglas[Math.floor(Math.random() * reglas.length)];
      
      exceptions.push({
        id: crypto.randomUUID(),
        empId: emp.id,
        empleado: emp.nombre,
        fecha: fecha.toISOString().slice(0, 10),
        regla: regla,
        severity: regla === 'Fichada inexistente' || regla === 'Ausencia sin saldo' ? 'error' : 'warn',
        status: Math.random() < 0.7 ? 'open' : 'resolved',
        jouleActionable: regla === 'Fichada inexistente' && Math.random() > 0.6
      });
    }
  });

  return exceptions;
};

// Aprobaciones generadas dinámicamente
export const generateMockApprovals = () => {
  return mockEmployees.map(emp => ({
    empId: emp.id,
    empleado: emp.nombre,
    horas: Math.floor(Math.random() * 14 + 35), // 35-48 horas
    ot: Math.floor(Math.random() * 9), // 0-8 horas extra
    estado: ['pending', 'approved', 'draft'][Math.floor(Math.random() * 3)]
  }));
};

// Auditoría generada dinámicamente
export const generateMockAuditoria = () => {
  const auditoria = [];
  for (let i = 0; i < 15; i++) {
    const emp = mockEmployees[Math.floor(Math.random() * mockEmployees.length)];
    const actions = ['UPDATE', 'APPROVE', 'RESOLVE'];
    const action = actions[Math.floor(Math.random() * actions.length)];
    
    auditoria.push({
      id: `AU${Math.floor(Math.random() * 90000 + 10000)}`,
      when: new Date(Date.now() - Math.floor(Math.random() * 72) * 3600 * 1000).toLocaleString(),
      usuario: ['hr_admin', 'mng_lopez'][Math.floor(Math.random() * 2)],
      accion: action,
      detalle: `${action === 'UPDATE' ? 'Ajuste de horas' : 'Resolución de excepción'} de ${emp.nombre}`,
      before: { Horas: 8, Estado: 'Enviado' },
      after: { Horas: 9.5, Estado: 'Aprobado' }
    });
  }
  return auditoria;
};

// Reglas exactas del HTML original
export const mockReglas = [
  { id: 'R1', nombre: 'Fichada inexistente', dominio: 'Time Sheet', sev: 'error', on: true },
  { id: 'R2', nombre: 'Horas extra > umbral diario', dominio: 'Overtime', sev: 'warn', on: true },
  { id: 'R3', nombre: 'Ausencia sin saldo', dominio: 'Time Off', sev: 'error', on: true }
];

// Widgets exactos del HTML original con roles específicos
export const mockWidgets = [
  { id: 'kpi1', title: '% Hojas completas', role: ['HR', 'Manager'] },
  { id: 'kpi2', title: '% Hojas aprobadas', role: ['HR', 'Manager'] },
  { id: 'kpi3', title: 'Horas extra totales', role: ['HR', 'Manager'] },
  { id: 'kpi4', title: '% Ausencias sin saldo', role: ['HR'] },
  { id: 'kpi5', title: 'Fichadas incompletas/emp', role: ['HR'] },
  { id: 'kpi6', title: 'Tiempo prom. de aprobación', role: ['HR'] },
  { id: 'kpi7', title: 'Excepciones Abiertas', role: ['HR', 'Manager'] },
  { id: 'kpi8', title: 'Costo OT Proyectado', role: ['HR'] },
  { id: 'chart1', title: 'Horas extra por Área', type: 'chart', role: ['HR'] },
  { id: 'chart2', title: 'Distribución de Ausencias', type: 'chart', role: ['HR', 'Manager'] }
];

// Datos de países y compañías exactos del HTML original
export const mockPaises = ['Argentina', 'Chile', 'Perú'];
export const mockCias = {
  'Argentina': ['BlatoRH AR', 'Cliente A AR'],
  'Chile': ['BlatoRH CL'],
  'Perú': ['BlatoRH PE']
};

export const mockAreas = ['Operaciones', 'RRHH', 'IT', 'Ventas', 'Soporte'];
export const mockManagers = ['Carlos López', 'María Pérez', 'J. Ramírez'];

// Métricas disponibles para el constructor de KPIs (NUEVA FUNCIONALIDAD)
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

// Plantillas de KPI (NUEVA FUNCIONALIDAD)
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

// Roles de usuario exactos del HTML original
export const userRoles = {
  Manager: {
    name: 'Manager',
    permissions: ['view_team_kpis', 'approve_timesheets', 'view_exceptions'],
    defaultKPIs: ['kpi1', 'kpi2', 'kpi3', 'kpi7'] // % Hojas completas, % Hojas aprobadas, Horas extra totales, Excepciones Abiertas
  },
  HR: {
    name: 'HR',
    permissions: ['view_all_kpis', 'manage_rules', 'resolve_exceptions', 'create_reports'],
    defaultKPIs: ['kpi1', 'kpi4', 'kpi6', 'kpi8'] // % Hojas completas, % Ausencias sin saldo, Tiempo prom. aprobación, Costo OT
  },
  Config: {
    name: 'Configurador',
    permissions: ['manage_system', 'create_kpis', 'manage_users', 'system_settings'],
    defaultKPIs: ['kpi7', 'kpi5', 'kpi3', 'kpi2'] // Excepciones Abiertas, Fichadas incompletas, Horas extra, % Hojas aprobadas
  }
};

// Función para generar valores de KPI dinámicamente (replicando lógica del HTML original)
export const generateKPIValues = () => {
  return {
    kpi1: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi2: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi3: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi4: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi5: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi6: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi7: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10), // 80-99.x%
    kpi8: Math.floor(Math.random() * 20 + 80) + '.' + Math.floor(Math.random() * 10)  // 80-99.x%
  };
};