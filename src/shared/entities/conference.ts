export type ConferenceStatus = 'created' | 'opened'

export interface Conference {
  id: string,
  name: string,
  eventDate: string,
  status: ConferenceStatus,
  address?: string,
  year?: number,
}
