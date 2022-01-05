export interface User {
  id: string
  uid: string
  firstName: string
  lastName: string
  avatarUrl: string
  role?: string
  isAdmin: boolean
}

export interface UserSession {
  id: string
  uid: string
  fullName: string
  avatarUrl: string
  role?: string
  isAdmin: boolean
  token: string
}
