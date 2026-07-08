import axios from "axios";
//API NRL
const API_URL="https://6a4b368af5eab0bb6b625736.mockapi.io/Employees";
//GET EMPLYEE
export const getEmployees=() =>{
    return axios.get(API_URL);
}
//POST
export const addEmployee=(employee)=>{
    return axios.post(API_URL,employee);
};
//PUT
export const updateEmployee=(id,employee)=>{
    return axios.put(`${API_URL}/${id}`,employee);
};
//DELETE
export const deleteEmployee=(id)=>{
    return axios.delete(`${API_URL}/${id}`);
};