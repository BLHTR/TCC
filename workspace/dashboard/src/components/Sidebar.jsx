import React from 'react';

const Sidebar = ({ currentPage, currentRole, onNavigation }) => {
  const navigationItems = [
    { id: 'dashboard', label: '📊 Dashboard', roles: ['Manager', 'HR', 'Config'] },
    { id: 'excepciones', label: '⚠️ Excepciones', roles: ['Manager', 'HR', 'Config'] },
    { id: 'aprobaciones', label: '👍 Aprobaciones', roles: ['Manager', 'HR'] },
    { id: 'auditoria', label: '🔎 Auditoría', roles: ['HR', 'Config'] },
    { id: 'config', label: '⚙️ Configuración', roles: ['Config'] }
  ];

  const visibleItems = navigationItems.filter(item => 
    item.roles.includes(currentRole)
  );

  return (
    <aside className="w-64 bg-gradient-to-b from-[rgba(13,34,64,.96)] to-[rgba(13,34,64,.88)] border-r border-white/10 p-4 sticky top-16 h-[calc(100vh-4rem)]">
      <nav className="space-y-2">
        {visibleItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigation(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
              currentPage === item.id
                ? 'bg-gradient-to-r from-[var(--bl-gold)]/20 to-[var(--bl-gold)]/10 border border-[var(--bl-gold)]/30 text-[var(--bl-gold)]'
                : 'text-white hover:bg-white/10 border border-transparent'
            }`}
          >
            <span className="text-lg">{item.label.split(' ')[0]}</span>
            <span className="font-medium">{item.label.substring(2)}</span>
          </button>
        ))}
      </nav>

      {/* Joule Assistant */}
      <div className="mt-8 p-4 tcc-card">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
            </svg>
          </div>
          <span className="tcc-brand-title text-sm">Asistente Joule</span>
        </div>
        <p className="text-xs tcc-muted mb-3">
          Tu asistente inteligente para análisis de datos y automatización.
        </p>
        <button className="tcc-btn text-xs w-full justify-center">
          💬 Abrir Chat
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;