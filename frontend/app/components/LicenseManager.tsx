'use client'
import { useState } from 'react'

interface LicenseManagerProps {
  mentorId: string
  eas: Array<{ id: string; name: string }>
  onLicenseCreated: () => void
}

export default function LicenseManager({ mentorId, eas, onLicenseCreated }: LicenseManagerProps) {
  const [selectedEA, setSelectedEA] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [expiryDays, setExpiryDays] = useState(30)
  const [isCreating, setIsCreating] = useState(false)

  const handleCreateLicense = async () => {
    if (!selectedEA || !clientEmail) {
      alert('Please select an EA and enter client email')
      return
    }

    setIsCreating(true)
    
    // Simulate API call
    setTimeout(() => {
      // In real app, this would create a license in the database
      alert(`License created for ${clientEmail}!
EA: ${eas.find(ea => ea.id === selectedEA)?.name}
Expires in: ${expiryDays} days`)
      
      setSelectedEA('')
      setClientEmail('')
      setExpiryDays(30)
      setIsCreating(false)
      onLicenseCreated()
    }, 1500)
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
        Create New License
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {/* EA Selection */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            Select EA
          </label>
          <select 
            value={selectedEA}
            onChange={(e) => setSelectedEA(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '1rem'
            }}
          >
            <option value="">Choose an EA</option>
            {eas.map(ea => (
              <option key={ea.id} value={ea.id}>
                {ea.name}
              </option>
            ))}
          </select>
        </div>

        {/* Client Email */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            Client Email
          </label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '1rem'
            }}
            placeholder="client@example.com"
          />
        </div>

        {/* Expiry Days */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            License Duration (Days)
          </label>
          <select 
            value={expiryDays}
            onChange={(e) => setExpiryDays(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '1rem'
            }}
          >
            <option value={7}>7 days</option>
            <option value={30}>30 days</option>
            <option value={90}>90 days</option>
            <option value={365}>1 year</option>
          </select>
        </div>

        {/* Create Button */}
        <button
          onClick={handleCreateLicense}
          disabled={isCreating || !selectedEA || !clientEmail}
          style={{
            width: '100%',
            backgroundColor: isCreating || !selectedEA || !clientEmail ? '#9ca3af' : '#10b981',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: isCreating || !selectedEA || !clientEmail ? 'not-allowed' : 'pointer'
          }}
        >
          {isCreating ? 'Creating License...' : 'Create License'}
        </button>
      </div>
    </div>
  )
}