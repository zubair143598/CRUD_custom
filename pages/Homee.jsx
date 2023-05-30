import React, { useState } from "react";
import Employees from "../components/Employees";
import Link from "next/link";


const Homee = () => {
  const [employeeData, setEmployeeData] = useState(Employees);

  const handleEdit=(id, name, age )=>{
    localStorage.setItem("Name", name)
    localStorage.setItem("Age", age)
    localStorage.setItem("Id", id)


  }

  const handleDelete = (id) => {
    const upDatedData = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData(upDatedData);
  };
 

  return (
    <div className=" h-screen px-[20rem] text-center flex flex-col justify-center   ">
      <div className="my-4 text-end">
      <Link className="bg-blue-500 border rounded m-1 py-3 px-[3rem] " href="/Create">Add User</Link>
      </div>

      <table className="  border-collapse border  border-slate-400">
        <thead>
          <tr className=" text-left   ">
            
            <th className=" pl-3 border-collapse border border-slate-400">Name</th>
            <th className=" pl-3 border-collapse border border-slate-400">Age</th>
            <th className="pl-3 border-collapse border border-slate-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData && employeeData.length > 0
            ? employeeData.map((data) => {
                return (
                  <>
                    <tr className="text-left" key={data.id} >
                      <td className="pl-3 border-collapse border border-slate-400">
                        {data.Name}
                      </td>
                      <td className="pl-3 border-collapse border border-slate-400">
                        {data.Age}
                      </td>
                      <td className="pl-3 border-collapse border border-slate-400">

                      <button
                          onClick={() => handleEdit(data.id, data.Name, data.Age)}
                          
                          className="bg-blue-500 border rounded m-1 py-1 px-3"
                          >
                        <Link href="/Edit">
                          Edit
                          </Link>
                        </button>
                        &nbsp;
                        <button
                          onClick={() => handleDelete(data.id)}
                         
                          className="bg-blue-500 border rounded m-1 py-1 px-3"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            : "no data avaliable"}
        </tbody>
      </table>
      

      
    </div>
  );
};

export default Homee;
