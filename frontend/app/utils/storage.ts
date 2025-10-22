// Simple storage helper using Local Storage
// This will be replaced with a real database later

export interface User {
  id: string
  email: string
  password: string
  role: 'client' | 'mentor' | 'admin'
  name: string
  createdAt: string
}

export interface EA {
  id: string
  mentorId: string
  name: string
  fileName: string
  version: string
  uploadDate: string
}

export interface License {
  id: string
  key: string
  eaId: string
  clientId: string
  mentorId: string
  expiryDate: string
  isActive: boolean
}

export interface VPS {
  id: string
  clientId: string
  status: 'running' | 'stopped' | 'error'
  server: string
  specs: string
  lastUpdated: string
}

// Initialize with some sample data
const initializeSampleData = () => {
  if (!localStorage.getItem('users')) {
    const sampleUsers: User[] = [
      {
        id: '1',
        email: 'admin@eamigrate.com',
        password: 'admin123',
        role: 'admin',
        name: 'System Admin',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        email: 'mentor@eamigrate.com',
        password: 'mentor123',
        role: 'mentor',
        name: 'EA Developer',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        email: 'client@eamigrate.com',
        password: 'client123',
        role: 'client',
        name: 'Trader Client',
        createdAt: new Date().toISOString()
      }
    ]
    localStorage.setItem('users', JSON.stringify(sampleUsers))
  }

  if (!localStorage.getItem('eas')) {
    const sampleEAs: EA[] = [
      {
        id: '1',
        mentorId: '2',
        name: 'Scalper Pro',
        fileName: 'scalper-pro.ex4',
        version: '2.1',
        uploadDate: new Date().toISOString()
      }
    ]
    localStorage.setItem('eas', JSON.stringify(sampleEAs))
  }

  if (!localStorage.getItem('licenses')) {
    const sampleLicenses: License[] = [
      {
        id: '1',
        key: 'SCLP-PRO-2024-001',
        eaId: '1',
        clientId: '3',
        mentorId: '2',
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        isActive: true
      }
    ]
    localStorage.setItem('licenses', JSON.stringify(sampleLicenses))
  }

  if (!localStorage.getItem('vps')) {
    const sampleVPS: VPS[] = [
      {
        id: '1',
        clientId: '3',
        status: 'running',
        server: 'NY-1',
        specs: '2GB RAM, 1 CPU, 50GB SSD',
        lastUpdated: new Date().toISOString()
      }
    ]
    localStorage.setItem('vps', JSON.stringify(sampleVPS))
  }
}

// User functions
export const getUserByEmail = (email: string): User | null => {
  initializeSampleData()
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  return users.find((user: User) => user.email === email) || null
}

export const createUser = (user: Omit<User, 'id' | 'createdAt'>): User => {
  initializeSampleData()
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const newUser: User = {
    ...user,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  return newUser
}

// EA functions
export const getEAByMentor = (mentorId: string): EA[] => {
  initializeSampleData()
  const eas = JSON.parse(localStorage.getItem('eas') || '[]')
  return eas.filter((ea: EA) => ea.mentorId === mentorId)
}

export const createEA = (ea: Omit<EA, 'id' | 'uploadDate'>): EA => {
  initializeSampleData()
  const eas = JSON.parse(localStorage.getItem('eas') || '[]')
  const newEA: EA = {
    ...ea,
    id: Date.now().toString(),
    uploadDate: new Date().toISOString()
  }
  eas.push(newEA)
  localStorage.setItem('eas', JSON.stringify(eas))
  return newEA
}

// License functions
export const getLicensesByMentor = (mentorId: string): License[] => {
  initializeSampleData()
  const licenses = JSON.parse(localStorage.getItem('licenses') || '[]')
  return licenses.filter((license: License) => license.mentorId === mentorId)
}

export const getLicensesByClient = (clientId: string): License[] => {
  initializeSampleData()
  const licenses = JSON.parse(localStorage.getItem('licenses') || '[]')
  return licenses.filter((license: License) => license.clientId === clientId)
}

export const createLicense = (license: Omit<License, 'id' | 'key'>): License => {
  initializeSampleData()
  const licenses = JSON.parse(localStorage.getItem('licenses') || '[]')
  const newLicense: License = {
    ...license,
    id: Date.now().toString(),
    key: `LIC-${Date.now().toString(36).toUpperCase()}`
  }
  licenses.push(newLicense)
  localStorage.setItem('licenses', JSON.stringify(licenses))
  return newLicense
}

// VPS functions
export const getVPSByClient = (clientId: string): VPS | null => {
  initializeSampleData()
  const vpsList = JSON.parse(localStorage.getItem('vps') || '[]')
  return vpsList.find((vps: VPS) => vps.clientId === clientId) || null
}

export const updateVPSStatus = (clientId: string, status: VPS['status']): VPS => {
  initializeSampleData()
  const vpsList = JSON.parse(localStorage.getItem('vps') || '[]')
  const vpsIndex = vpsList.findIndex((vps: VPS) => vps.clientId === clientId)
  
  if (vpsIndex !== -1) {
    vpsList[vpsIndex].status = status
    vpsList[vpsIndex].lastUpdated = new Date().toISOString()
    localStorage.setItem('vps', JSON.stringify(vpsList))
    return vpsList[vpsIndex]
  }
  
  // Create new VPS if doesn't exist
  const newVPS: VPS = {
    id: Date.now().toString(),
    clientId,
    status,
    server: 'NY-1',
    specs: '2GB RAM, 1 CPU, 50GB SSD',
    lastUpdated: new Date().toISOString()
  }
  vpsList.push(newVPS)
  localStorage.setItem('vps', JSON.stringify(vpsList))
  return newVPS
}