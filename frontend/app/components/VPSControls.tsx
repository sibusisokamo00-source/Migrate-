'use client'
import { useState, useEffect } from 'react'
import { getVPSByClient, updateVPSStatus, VPS as VPSType } from '../utils/storage'

interface VPSControlsProps {
  clientId: string
}

export default function VPSControls({ clientId }: VPSControlsProps) {
  const [vps, setVps] = useState<VPSType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadVPS()
  }, [clientId])

  const loadVPS = () => {
    const clientVPS = getVPSByClient(clientId)
    setVps(clientVPS)
  }

  const handleVPSAction = async (action: 'start' | 'stop' | 'restart') => {
    setIsLoading(true)
    
    // Simulate API call to VPS provider
    setTimeout(() => {
      let newStatus: VPSType['status'] = 'running'
      
      switch (action) {
        case 'start':
          newStatus = 'running'
          break
        case 'stop':
          newStatus = 'stopped'
          break
        case 'restart':
          newStatus = 'running' // Simulate restart
          break
      }
      
      const updatedVPS = updateVPSStatus(clientId, newStatus)
      setVps(updatedVPS)
      setIsLoading(false)
      
      // Show action confirmation
      alert(`VPS ${action} command sent successfully!`)
    }, 2000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return '#10b981'
      case 'stopped': return '#ef4444'
      case 'error': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'running': return 'Running'
      case 'stopped': return 'Stopped'
      case 'error': return 'Error'
      default: return 'Unknown'
    }
  }

  if (!vps) {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <p>No VPS instance found. Setting up your VPS...</p>
        <button 
          onClick={() => handleVPSAction('start')}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Setup VPS
        </button>
      </div>
    )
  }

  return (
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
        VPS Control Panel
      </h3>

      {/* VPS Status */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f8fafc',
          borderLeft: `4px solid ${getStatusColor(vps.status)}`
        }}>
          <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>
            Status
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: getStatusColor(vps.status),
              borderRadius: '50%'
            }}></div>
            <span style={{ 
              color: getStatusColor(vps.status), 
              fontWeight: '500',
              fontSize: '1.125rem'
            }}>
              {getStatusText(vps.status)}
            </span>
          </div>
        </div>

        <div style={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f8fafc'
        }}>
          <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>
            Server
          </h4>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>{vps.server}</p>
        </div>

        <div style={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f8fafc'
        }}>
          <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>
            Specifications
          </h4>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{vps.specs}</p>
        </div>
      </div>

      {/* Control Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => handleVPSAction('start')}
          disabled={isLoading || vps.status === 'running'}
          style={{
            backgroundColor: isLoading || vps.status === 'running' ? '#9ca3af' : '#10b981',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontWeight: '500',
            cursor: isLoading || vps.status === 'running' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>▶️</span>
          {isLoading ? 'Starting...' : 'Start VPS'}
        </button>

        <button
          onClick={() => handleVPSAction('stop')}
          disabled={isLoading || vps.status === 'stopped'}
          style={{
            backgroundColor: isLoading || vps.status === 'stopped' ? '#9ca3af' : '#ef4444',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontWeight: '500',
            cursor: isLoading || vps.status === 'stopped' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>⏹️</span>
          {isLoading ? 'Stopping...' : 'Stop VPS'}
        </button>

        <button
          onClick={() => handleVPSAction('restart')}
          disabled={isLoading || vps.status === 'stopped'}
          style={{
            backgroundColor: isLoading || vps.status === 'stopped' ? '#9ca3af' : '#f59e0b',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontWeight: '500',
            cursor: isLoading || vps.status === 'stopped' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>🔄</span>
          {isLoading ? 'Restarting...' : 'Restart VPS'}
        </button>
      </div>

      {/* Last Updated */}
      {vps.lastUpdated && (
        <p style={{ 
          color: '#6b7280', 
          fontSize: '0.875rem', 
          marginTop: '1rem',
          fontStyle: 'italic'
        }}>
          Last updated: {new Date(vps.lastUpdated).toLocaleString()}
        </p>
      )}
    </div>
  )
}