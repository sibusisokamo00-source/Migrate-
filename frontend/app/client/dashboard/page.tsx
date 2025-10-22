'use client'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientDashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== 'client') {
      router.push('/login')
    }
  }, [user, router])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!user) {
    return <div>Loading...</div>
  }

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
            <span style={{ color: '#6b7280' }}>Welcome, {user.name}!</span>
            <button 
              onClick={handleLogout}
              style={{
                color: '#ef4444',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Rest of your existing client dashboard content remains the same */}
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

        {/* Your existing stats grid and controls */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}>
              Manage VPS
            </button>
            <button style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}>
              View EA Status
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}