export default function MentorDashboard() {
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
              Mentor Dashboard
            </h1>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ color: '#6b7280' }}>Welcome, Mentor!</span>
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
            Your EA Management Portal
          </h2>
          <p style={{ color: '#6b7280' }}>
            Upload EAs, manage licenses, and track your earnings
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          {/* Total EAs Card */}
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
              Total EAs
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              5
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Active Expert Advisors
            </p>
          </div>

          {/* Active Licenses Card */}
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
              Active Licenses
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              12
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Clients using your EAs
            </p>
          </div>

          {/* Earnings Card */}
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
              Monthly Earnings
            </h3>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              $1,250
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              This month
            </p>
          </div>
        </div>

        {/* Action Buttons */}
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
            <span>📤</span>
            Upload EA File
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
            <span>🔑</span>
            Create License
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
            <span>👥</span>
            View Clients
          </button>
        </div>

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
            Recent Activity
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
              <div>
                <p style={{ fontWeight: '500', color: '#374151' }}>
                  New license activated
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  Scalper Pro v2.1 - Client: John Doe
                </p>
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                2 hours ago
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: '#f9fafb',
              borderRadius: '0.375rem'
            }}>
              <div>
                <p style={{ fontWeight: '500', color: '#374151' }}>
                  Payment received
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  $49.99 - Monthly subscription
                </p>
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                1 day ago
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: '#f9fafb',
              borderRadius: '0.375rem'
            }}>
              <div>
                <p style={{ fontWeight: '500', color: '#374151' }}>
                  EA file uploaded
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  Trend Rider v1.5
                </p>
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                3 days ago
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}