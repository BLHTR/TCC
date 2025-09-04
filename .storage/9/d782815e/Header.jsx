import React, { useState } from 'react';

const Header = ({ currentRole, onRoleChange }) => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  const mockNotifications = [
    { id: 1, icon: '⚡', text: 'Datos sincronizados con SuccessFactors', time: '10:30' },
    { id: 2, icon: '⚠️', text: 'Nueva excepción detectada: Paula Gómez', time: '09:45' },
    { id: 3, icon: '✅', text: 'Aprobación completada: Lucas Díaz', time: '09:15' }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[rgba(13,34,64,.92)] to-[rgba(13,34,64,.70)] border-b border-white/10 p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
            <div className="w-4 h-0.5 bg-white relative">
              <div className="absolute -top-1.5 w-4 h-0.5 bg-white"></div>
              <div className="absolute top-1.5 w-4 h-0.5 bg-white"></div>
            </div>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="var(--bl-gold)"/>
                <path d="M12 6v6l4 2" stroke="var(--bl-dark)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="tcc-brand-title text-2xl font-bold">
              Time Control Center
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Role Selector */}
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2 rounded-xl">
            <span className="text-sm text-white/80">Rol:</span>
            <select 
              value={currentRole}
              onChange={(e) => onRoleChange(e.target.value)}
              className="bg-transparent text-white border-none outline-none cursor-pointer"
            >
              <option value="Manager" className="bg-gray-800">Manager</option>
              <option value="HR" className="bg-gray-800">HR</option>
              <option value="Config" className="bg-gray-800">Configurador</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="tcc-btn-ghost relative p-2 rounded-xl"
            >
              🔔
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 modal-panel p-0 z-50">
                <div className="p-4 border-b border-white/10">
                  <h3 className="font-semibold">Notificaciones</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {mockNotifications.map(notif => (
                    <div key={notif.id} className="p-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{notif.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm text-white">{notif.text}</p>
                          <p className="text-xs text-white/60 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Update Button */}
          <button className="tcc-btn flex items-center gap-2">
            ⚡ Actualizar Datos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;