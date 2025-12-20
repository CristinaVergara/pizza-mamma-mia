import React from 'react';
import './Profile.css';

const Profile = () => {
  const userEmail = "mammamia@pizza.com"; // Estático por ahora

  const handleLogout = () => {
    alert("Sesión cerrada (simulado)");
    // En hitos futuros aquí irá la lógica real
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">🍕</div>
          <h1 className="profile-title">Mi Perfil</h1>
        </div>
        
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">Email:</span>
            <span className="info-value">{userEmail}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Miembro desde:</span>
            <span className="info-value">Enero 2024</span>
          </div>
          <div className="info-row">
            <span className="info-label">Pedidos realizados:</span>
            <span className="info-value">15</span>
          </div>
        </div>

        <button 
          className="logout-button"
          onClick={handleLogout}
        >
          🚪 Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;