export default function AdminDashboard() {
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
              Admin Dashboard
            </h1>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ color: '#6b7280' }}>Welcome, Admin!</span>
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
            System Overview
          </h2>
          <p style={{ color: '#6b7280' }}>
            Manage all users, VPS instances, and platform settings
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          {/* Total Users Card */}
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
              Total Users
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              147
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span style={{ color: '#6b7280' }}>Clients: 132</span>
              <span style={{ color: '#6b7280' }}>Mentors: 15</span>
            </div>
          </div>

          {/* Active VPS Card */}
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
              Active VPS
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              89
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Running instances
            </p>
          </div>

          {/* Revenue Card */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Monthly Revenue
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              $4,287
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Current month
            </p>
          </div>

          {/* Pending Approvals Card */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #f59e0b'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Pending Approvals
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              3
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Mentor applications
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <button style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>👥</span>
            Manage Users
          </button>
          
          <button style={{
            backgroundColor: '#8b5cf6',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>🖥️</span>
            VPS Monitoring
          </button>
          
          <button style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>💰</span>
            Revenue Reports
          </button>
          
          <button style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>✅</span>
            Approve Mentors
          </button>
        </div>

        {/* Recent Activity & System Health */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Recent Activity */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Recent System Activity
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f0f9ff',
                borderRadius: '0.375rem',
                borderLeft: '4px solid #3b82f6'
              }}>
                <div>
                  <p style={{ fontWeight: '500', color: '#374151' }}>
                    New client registered
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    john.trader@email.com
                  </p>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  15 min ago
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.375rem',
                borderLeft: '4px solid #10b981'
              }}>
                <div>
                  <p style={{ fontWeight: '500', color: '#374151' }}>
                    VPS instance created
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    NY-1 Server • 2GB RAM
                  </p>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  1 hour ago
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.375rem',
                borderLeft: '4px solid #f59e0b'
              }}>
                <div>
                  <p style={{ fontWeight: '500', color: '#374151' }}>
                    Mentor approval needed
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Sarah Johnson - EA Developer
                  </p>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  3 hours ago
                </span>
              </div>
            </div>
          </div>

          {/* System Health */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              System Health
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.375rem'
              }}>
                <span style={{ fontWeight: '500', color: '#374151' }}>API Server</span>
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
                  <span style={{ color: '#10b981', fontWeight: '500' }}>Online</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.375rem'
              }}>
                <span style={{ fontWeight: '500', color: '#374151' }}>Database</span>
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
                  <span style={{ color: '#10b981', fontWeight: '500' }}>Healthy</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.375rem'
              }}>
                <span style={{ fontWeight: '500', color: '#374151' }}>VPS Provider</span>
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
                  <span style={{ color: '#10b981', fontWeight: '500' }}>Connected</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.375rem'
              }}>
                <span style={{ fontWeight: '500', color: '#374151' }}>Payment Gateway</span>
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
                  <span style={{ color: '#10b981', fontWeight: '500' }}>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
