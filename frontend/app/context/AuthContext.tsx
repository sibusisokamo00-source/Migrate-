  const login = (email: string, password: string, role: string) => {
    // Simulate API call to validate user
    setTimeout(() => {
      // For demo purposes, we'll use our storage
      // In real app, this would be an API call
      const mockUser: User = {
        id: role === 'client' ? '3' : role === 'mentor' ? '2' : '1',
        email: email,
        role: role as 'client' | 'mentor' | 'admin',
        name: role === 'client' ? 'Trader Client' : 
              role === 'mentor' ? 'EA Developer' : 'System Admin'
      }
      setUser(mockUser)
    }, 1000)
  }