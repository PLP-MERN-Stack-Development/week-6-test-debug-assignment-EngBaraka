// client/src/services/bugService.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api/bugs";

export const getBugs = () => axios.get(API_URL);
export const createBug = (bugData) => axios.post(API_URL, bugData);
export const updateBug = (id, bugData) => axios.put(`${API_URL}/${id}`, bugData);
export const deleteBug = (id) => axios.delete(`${API_URL}/${id}`);
