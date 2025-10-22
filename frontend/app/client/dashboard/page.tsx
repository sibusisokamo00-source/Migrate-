export default function ClientDashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937'
            }}>
              Client Dashboard
            </h1>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ color: '#6b7280' }}>Welcome, Client!</span>
            <button style={{
              color: '#ef4444',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 1rem'
      }}>
        {/* Welcome Card */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Your EA Hosting Dashboard
          </h2>
          <p style={{ color: '#6b7280' }}>
            Monitor and manage your Expert Advisors in real-time
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          {/* VPS Status Card */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #10b981'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              VPS Status
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#10b981',
                borderRadius: '50%'
              }}></div>
              <span style={{ color: '#10b981', fontWeight: '500' }}>
                Running
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Server: NY-1 • 2GB RAM
            </p>
          </div>

          {/* EA Status Card */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #10b981'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              EA Status
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#10b981',
                borderRadius: '50%'
              }}></div>
              <span style={{ color: '#10b981', fontWeight: '500' }}>
                Active
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Scalper Pro v2.1
            </p>
          </div>

          {/* Uptime Card */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #3b82f6'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Uptime
            </h3>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              99.9%
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Last 30 days
            </p>
          </div>
        </div>

        {/* Control Panel */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '1.5rem'
          }}>
            VPS Control Panel
          </h3>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Start VPS
            </button>
            
            <button style={{
              backgroundColor: '#f59e0b',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Restart VPS
            </button>
            
            <button style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Stop VPS
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔑</div>
            <h4 style={{ fontWeight: '500', color: '#374151' }}>Add License</h4>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
            <h4 style={{ fontWeight: '500', color: '#374151' }}>View Logs</h4>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💳</div>
            <h4 style={{ fontWeight: '500', color: '#374151' }}>Billing</h4>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🆘</div>
            <h4 style={{ fontWeight: '500', color: '#374151' }}>Support</h4>
          </div>
        </div>
      </main>
    </div>
  )
}