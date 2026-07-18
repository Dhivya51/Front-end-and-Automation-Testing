import { useState } from "react";
import "./DepartmentPage.css";

function DepartmentPage() {

  const [departments, setDepartments] = useState([
  { id: 1, name: "Information Technology", head: "Dhivya" },
  { id: 2, name: "Human Resources", head: "Rahul" },
  { id: 3, name: "Finance", head: "Priya" },
  { id: 4, name: "Marketing", head: "Arun" },
  { id: 5, name: "Sales", head: "Karthik" },
  { id: 6, name: "Administration", head: "Sneha" },
  { id: 7, name: "Research & Development", head: "Vignesh" },
  { id: 8, name: "Customer Support", head: "Anitha" },
  { id: 9, name: "Operations", head: "Surya" },
]);
const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [head, setHead] = useState("");
  const [editId, setEditId] = useState(null);
  const addDepartment = () => {

  if (department === "" || head === "") return;

  if (editId !== null) {

    const updatedDepartments = departments.map((dept) =>
      dept.id === editId
        ? {
            ...dept,
            name: department,
            head: head,
          }
        : dept
    );

    setDepartments(updatedDepartments);
    setEditId(null);

  } else {

    setDepartments([
      ...departments,
      {
        id: Date.now(),
        name: department,
        head: head,
      },
    ]);

  }

  setDepartment("");
  setHead("");
};

  const deleteDepartment = (id) => {
    setDepartments(
      departments.filter((dept) => dept.id !== id)
    );
  };
  const editDepartment = (dept) => {
  setDepartment(dept.name);
  setHead(dept.head);
  setEditId(dept.id);
};

  return (
    <div className="department-page">

      <h1>Department Management</h1>

<input
    id="searchDepartment"
    type="text"
    placeholder="Search Department"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>

<div className="department-form">

        <input
        id="departmentName"
          type="text"
          placeholder="Department Name"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
        id="departmentHead"
          type="text"
          placeholder="Department Head"
          value={head}
          onChange={(e) => setHead(e.target.value)}
        />

        <button
  id="saveDepartmentBtn"
  onClick={addDepartment}
>
  {editId !== null ? "Update Department" : "Add Department"}
</button>
      </div>

      <table className="department-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Department Head</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {departments
.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
)
.map((dept) => (

            <tr key={dept.id}>

              <td>{dept.id}</td>

              <td>{dept.name}</td>

              <td>{dept.head}</td>

              <td>

 <button
  className="edit-btn"
  onClick={() => {
    console.log("Edit Clicked");
    editDepartment(dept);
  }}
>
  Edit
</button>

  <button
    className="delete-btn"
    onClick={() => deleteDepartment(dept.id)}
  >
    Delete
  </button>

</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DepartmentPage;