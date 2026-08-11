export interface JobAnimal {
  id: string
  sex: string // 'Male' | 'Female'
  isOver30Months: boolean
  isKillAndChill: boolean
  animalIdentifiers: string
  splitInfo: string // 'Whole' | 'Half' | 'Quarter'
}

export interface CreateAnimalDto {
  sex?: string
  isOver30Months?: boolean
  isKillAndChill?: boolean
  animalIdentifiers?: string
  splitInfo?: string
}

export interface CreateJobDto {
  specie: string
  inspectionLevel: string
  dropoffDate: string
  animals: CreateAnimalDto[]
}

export interface JobUser {
  id: string
  email: string
  phone?: string | null
  password?: string | null
  name: string
  role: string
  isEmailVerified?: boolean
  isPhoneVerified?: boolean
  googleId?: string | null
  facebookId?: string | null
  isDeleted?: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
}

export interface JobData {
  id: string
  userId: string
  user?: JobUser
  numberOfAnimals: number
  specie: string
  inspectionLevel: string
  dropoffDate: string
  requestedDate?: string
  acceptedDate?: string | null
  rejectedDate?: string | null
  status: string
  harvestDate?: string | null
  cutDate?: string | null
  updateDate?: string
  deletedDate?: string | null
}

export interface JobResponse {
  success: boolean
  statusCode: number
  data: JobData
  timestamp?: string
}
