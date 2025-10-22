export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: '#2563eb'
          }}>
            EA Migrate
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/login" style={{ color: '#6b7280' }}>Login</a>
            <a href="/register" style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              textDecoration: 'none'
            }}>
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
        padding: '4rem 1rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Automated EA Hosting
            <span style={{
              color: '#2563eb',
              display: 'block'
            }}>
              Made Simple
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '2.5rem',
            lineHeight: '1.6'
          }}>
            Deploy, monitor, and manage your Forex Expert Advisors with our fully automated VPS platform.
            Never worry about uptime, updates, or technical issues again.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Get Started Free
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#2563eb',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              border: '2px solid #2563eb',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              View Pricing
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}