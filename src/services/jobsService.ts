import axios from 'axios'
import { CreateJobDto, JobResponse } from '../types/job'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'

export const createJob = async (jobPayload: CreateJobDto): Promise<JobResponse> => {
  const response = await axios.post<JobResponse>(
    `${API_BASE_URL}/jobs/create`,
    jobPayload,
    { withCredentials: true }
  )
  return response.data
}
