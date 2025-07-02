const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    role: 'Administrador'
  });

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'users':
        return <UsersSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        userData={userData}
      />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          <div className="user-info">
            <span>{userData.name}</span>
            <img 
              src="https://ui-avatars.com/api/?name=João+Silva" 
              alt="Foto de perfil" 
              className="profile-pic"
            />
          </div>
        </header>
        <div className="dashboard-content">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

const Sidebar = ({ activeSection, setActiveSection, userData }) => {
  const menuItems = [
    { id: 'overview', icon: '📊', label: 'Visão Geral' },
    { id: 'users', icon: '👥', label: 'Usuários' },
    { id: 'analytics', icon: '📈', label: 'Análises' },
    { id: 'settings', icon: '⚙️', label: 'Configurações' }
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-user-info">
        <img 
          src="https://ui-avatars.com/api/?name=João+Silva" 
          alt="Foto de perfil" 
          className="profile-pic-sidebar"
        />
        <div>
          <h3>{userData.name}</h3>
          <p>{userData.role}</p>
        </div>
      </div>
      <nav className="sidebar-menu">
        {menuItems.map(item => (
          <button 
            key={item.id}
            className={`sidebar-menu-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

const OverviewSection = () => {
  return (
    <div className="dashboard-section">
      <h2>Visão Geral</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <i className="card-icon">👥</i>
          <h4>Total de Usuários</h4>
          <p className="card-value">1,254</p>
        </div>
        <div className="dashboard-card">
          <i className="card-icon">💰</i>
          <h4>Vendas Hoje</h4>
          <p className="card-value">R$ 12,540</p>
        </div>
        <div className="dashboard-card">
          <i className="card-icon">⭐</i>
          <h4>Novos Leads</h4>
          <p className="card-value">87</p>
        </div>
      </div>
    </div>
  );
};

const UsersSection = () => {
  return (
    <div className="dashboard-section">
      <h2>Usuários</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maria Souza</td>
            <td>maria@example.com</td>
            <td><span className="status active">Ativo</span></td>
          </tr>
          <tr>
            <td>Pedro Santos</td>
            <td>pedro@example.com</td>
            <td><span className="status inactive">Inativo</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AnalyticsSection = () => {
  return (
    <div className="dashboard-section">
      <h2>Análises</h2>
      <div className="placeholder-chart">
        Gráfico de Análise
      </div>
    </div>
  );
};

const SettingsSection = () => {
  return (
    <div className="dashboard-section">
      <h2>Configurações</h2>
      <div className="settings-grid">
        <div className="settings-item">
          <i className="settings-icon">👤</i>
          <h4>Perfil</h4>
          <p>Editar informações pessoais</p>
        </div>
        <div className="settings-item">
          <i className="settings-icon">🔒</i>
          <h4>Segurança</h4>
          <p>Alterar senha</p>
        </div>
        <div className="settings-item">
          <i className="settings-icon">🔔</i>
          <h4>Notificações</h4>
          <p>Configurar preferências</p>
        </div>
      </div>
    </div>
  );
};
