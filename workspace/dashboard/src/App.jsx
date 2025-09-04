import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { userRoles } from './data/tccData';

function App() {
  const [currentRole, setCurrentRole] = useState('Manager');
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleRoleChange = (role) => {
    setCurrentRole(role);
    setCurrentPage('dashboard'); // Reset to dashboard when role changes
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'radial-gradient(1200px 600px at 80% -10%, rgba(26,119,210,.25), transparent 60%), radial-gradient(1000px 500px at -10% 20%, rgba(177,169,110,.18), transparent 60%), var(--bl-bg)' }}>
      <Header 
        currentRole={currentRole} 
        onRoleChange={handleRoleChange}
      />
      <div className="flex flex-1">
        <Sidebar 
          currentPage={currentPage}
          currentRole={currentRole}
          onNavigation={handleNavigation}
        />
        <main className="flex-1 p-6 overflow-auto">
          {currentPage === 'dashboard' && (
            <Dashboard currentRole={currentRole} />
          )}
          {currentPage === 'excepciones' && (
            <div className="animate-fade-in-up">
              <h1 className="tcc-brand-title text-3xl mb-6">Cola de Excepciones</h1>
              <div className="tcc-card p-6">
                <p className="tcc-muted">Funcionalidad de excepciones - Mantiene estructura original</p>
              </div>
            </div>
          )}
          {currentPage === 'aprobaciones' && (
            <div className="animate-fade-in-up">
              <h1 className="tcc-brand-title text-3xl mb-6">Centro de Aprobaciones</h1>
              <div className="tcc-card p-6">
                <p className="tcc-muted">Funcionalidad de aprobaciones - Mantiene estructura original</p>
              </div>
            </div>
          )}
          {currentPage === 'auditoria' && (
            <div className="animate-fade-in-up">
              <h1 className="tcc-brand-title text-3xl mb-6">Auditoría y Trazabilidad</h1>
              <div className="tcc-card p-6">
                <p className="tcc-muted">Funcionalidad de auditoría - Mantiene estructura original</p>
              </div>
            </div>
          )}
          {currentPage === 'config' && (
            <div className="animate-fade-in-up">
              <h1 className="tcc-brand-title text-3xl mb-6">Configuración de Sistema</h1>
              <div className="tcc-card p-6">
                <p className="tcc-muted">Configuración del sistema - Mantiene estructura original</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;