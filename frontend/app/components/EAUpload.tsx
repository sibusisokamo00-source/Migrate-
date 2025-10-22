'use client'
import { useState } from 'react'

interface EAUploadProps {
  onUpload: (file: File, name: string, version: string) => void
}

export default function EAUpload({ onUpload }: EAUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState('')
  const [version, setVersion] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      // Check if file is .ex4 or .ex5
      if (selectedFile.name.endsWith('.ex4') || selectedFile.name.endsWith('.ex5')) {
        setFile(selectedFile)
        // Auto-fill name from filename
        if (!name) {
          setName(selectedFile.name.replace(/\.(ex4|ex5)$/, ''))
        }
      } else {
        alert('Please upload only .ex4 or .ex5 files')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !name) {
      alert('Please select a file and provide a name')
      return
    }

    setIsUploading(true)
    
    // Simulate upload process
    setTimeout(() => {
      onUpload(file, name, version)
      setFile(null)
      setName('')
      setVersion('')
      setIsUploading(false)
      alert('EA file uploaded successfully!')
    }, 2000)
  }

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '1.5rem'
      }}>
        Upload EA File
      </h3>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {/* File Input */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            EA File (.ex4 or .ex5)
          </label>
          <input
            type="file"
            accept=".ex4,.ex5"
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px dashed #d1d5db',
              borderRadius: '0.375rem',
              backgroundColor: '#f9fafb'
            }}
          />
          {file && (
            <p style={{ color: '#059669', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Selected: {file.name}
            </p>
          )}
        </div>

        {/* EA Name */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            EA Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '1rem'
            }}
            placeholder="e.g., Scalper Pro"
          />
        </div>

        {/* Version */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            Version (Optional)
          </label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '1rem'
            }}
            placeholder="e.g., 2.1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUploading || !file}
          style={{
            width: '100%',
            backgroundColor: isUploading || !file ? '#9ca3af' : '#2563eb',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: isUploading || !file ? 'not-allowed' : 'pointer'
          }}
        >
          {isUploading ? 'Uploading...' : 'Upload EA'}
        </button>
      </form>
    </div>
  )
}
