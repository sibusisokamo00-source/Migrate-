'use client'
import { useState, useEffect } from 'react'

interface StatusMonitorProps {
  clientId: string
}

export default function StatusMonitor({ clientId }: StatusMonitorProps) {
  const [systemStatus, setSystemStatus] = useState({
    vps: 'checking',
    ea: 'checking',
    connection: 'checking',
    lastUpdate: new Date().toISOString()
  })

  const [isMonitoring, setIsMonitoring] = useState(true)

  useEffect(() => {
    if (!isMonitoring) return

    const checkStatus = () => {
      // Simulate status checks
      const status = {
        vps: Math.random() > 0.1 ? 'online' : 'offline',
        ea: Math.random() > 0.2 ? 'running' : 'stopped',
        connection: Math.random() > 0.15 ? 'connected' : 'disconnected',
        lastUpdate: new Date().toISOString()
      }
      setSystemStatus(status)
    }

    // Initial check
    checkStatus()

    // Set up interval for real-time monitoring
    const interval = setInterval(checkStatus, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [isMonitoring, clientId])

  const getStatusColor = (status: string) => {
    if (status === 'checking') return '#f59e0b'
    return status === 'online' || status === 'running' || status === 'connected' 
      ? '#10b981' 
      : '#ef4444'
  }

  const getStatusText = (status: string) => {
    if (status === 'checking') return 'Checking...'
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937'
        }}>
          Real-time Monitoring
        </h3>
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          style={{
            backgroundColor: isMonitoring ? '#ef4444' : '#10b981',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          {isMonitoring ? 'Pause' : 'Resume'} Monitoring
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
            VPS Status
          </h4>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: getStatusColor(systemStatus.vps),
              borderRadius: '50%'
            }}></div>
            <span style={{ 
              color: getStatusColor(systemStatus.vps),
              fontWeight: '500'
            }}>
              {getStatusText(systemStatus.vps)}
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
            EA Status
          </h4>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: getStatusColor(systemStatus.ea),
              borderRadius: '50%'
            }}></div>
            <span style={{ 
              color: getStatusColor(systemStatus.ea),
              fontWeight: '500'
            }}>
              {getStatusText(systemStatus.ea)}
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
            Connection
          </h4>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: getStatusColor(systemStatus.connection),
              borderRadius: '50%'
            }}></div>
            <span style={{ 
              color: getStatusColor(systemStatus.connection),
              fontWeight: '500'
            }}>
              {getStatusText(systemStatus.connection)}
            </span>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#f8fafc',
        padding: '1rem',
        borderRadius: '0.375rem',
        borderLeft: '4px solid #3b82f6'
      }}>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '0.875rem',
          margin: 0
        }}>
          <strong>Last checked:</strong> {new Date(systemStatus.lastUpdate).toLocaleTimeString()}
          {isMonitoring && ' • Monitoring active'}
        </p>
      </div>
    </div>
  )
}
