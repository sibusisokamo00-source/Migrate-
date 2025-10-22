'use client'
import { useState } from 'react'

interface LicenseActivationProps {
  clientId: string
  onLicenseActivated: () => void
}

export default function LicenseActivation({ clientId, onLicenseActivated }: LicenseActivationProps) {
  const [licenseKey, setLicenseKey] = useState('')
  const [isActivating, setIsActivating] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleActivateLicense = async () => {
    if (!licenseKey.trim()) {
      alert('Please enter a license key')
      return
    }

    setIsActivating(true)
    
    // Simulate API call to validate and activate license
    setTimeout(() => {
      // Mock license validation
      const isValid = licenseKey.length >= 10
      
      if (isValid) {
        alert('License activated successfully! Your EA will be deployed automatically.')
        setLicenseKey('')
        setShowForm(false)
        onLicenseActivated()
      } else {
        alert('Invalid license key. Please check and try again.')
      }
      
      setIsActivating(false)
    }, 2000)
  }

  if (!showForm) {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Activate EA License
        </h3>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          Add your EA license key to start using automated trading
        </p>
        <button
          onClick={() => setShowForm(true)}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            margin: '0 auto'
          }}
        >
          <span>🔑</span>
          Add License Key
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
        Activate License
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            License Key
          </label>
          <input
            type="text"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="Enter your license key (e.g., LIC-ABC123XYZ)"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              fontFamily: 'monospace'
            }}
          />
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Enter the license key provided by your EA mentor
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={() => setShowForm(false)}
            style={{
              backgroundColor: '#6b7280',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          
          <button
            onClick={handleActivateLicense}
            disabled={isActivating || !licenseKey.trim()}
            style={{
              backgroundColor: isActivating || !licenseKey.trim() ? '#9ca3af' : '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontWeight: '500',
              cursor: isActivating || !licenseKey.trim() ? 'not-allowed' : 'pointer'
            }}
          >
            {isActivating ? 'Activating...' : 'Activate License'}
          </button>
        </div>
      </div>
    </div>
  )
}
