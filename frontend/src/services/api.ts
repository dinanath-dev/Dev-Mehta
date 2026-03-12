/* ============================================
 * API service layer
 * Centralized API calls — swap mock → real API
 * ============================================ */

import axiosInstance from './axiosConfig';
import { API_ENDPOINTS } from '@/constants';
import type {
  Project,
  Skill,
  Experience,
  ContactFormValues,
  AboutData,
  GitHubStats,
  ApiResponse,
} from '@/types';

/* ---------- Projects ---------- */
export const projectsApi = {
  getAll: () =>
    axiosInstance.get<ApiResponse<Project[]>>(API_ENDPOINTS.projects),
  getById: (id: string) =>
    axiosInstance.get<ApiResponse<Project>>(`${API_ENDPOINTS.projects}${id}/`),
};

/* ---------- Skills ---------- */
export const skillsApi = {
  getAll: () =>
    axiosInstance.get<ApiResponse<Skill[]>>(API_ENDPOINTS.skills),
};

/* ---------- Experience ---------- */
export const experienceApi = {
  getAll: () =>
    axiosInstance.get<ApiResponse<Experience[]>>(API_ENDPOINTS.experience),
};

/* ---------- About ---------- */
export const aboutApi = {
  get: () =>
    axiosInstance.get<ApiResponse<AboutData>>(API_ENDPOINTS.about),
};

/* ---------- Contact ---------- */
export const contactApi = {
  send: (data: ContactFormValues) =>
    axiosInstance.post<ApiResponse<null>>(API_ENDPOINTS.contact, data),
};

/* ---------- GitHub Stats ---------- */
export const githubApi = {
  getStats: () =>
    axiosInstance.get<ApiResponse<GitHubStats>>(API_ENDPOINTS.github),
};

/* ---------- Resume ---------- */
export const resumeApi = {
  getDownloadUrl: () =>
    axiosInstance.get<ApiResponse<{ url: string }>>(API_ENDPOINTS.resume),
};
