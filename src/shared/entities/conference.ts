import { ImageMediaType } from './media'

export type ConferenceStatus = 'created' | 'opened' | 'paused' | 'closed'

export interface Conference {
  id: string
  name: string
  eventDate: string
  status: ConferenceStatus
  address?: string
  year?: number
  images?: ImageMediaType[]
}

export interface ConferenceFilters {
  year: string
  sortBy: string
}
