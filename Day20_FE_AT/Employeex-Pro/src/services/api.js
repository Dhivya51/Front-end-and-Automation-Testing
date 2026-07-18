import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002",
});

export const getEmployees = () => API.get("/employees");

export const addEmployeeApi = (employee) =>
  API.post("/employees", employee);

export const updateEmployeeApi = (id, employee) =>
  API.put(`/employees/${id}`, employee);

export const deleteEmployeeApi = (id) =>
  API.delete(`/employees/${id}`);