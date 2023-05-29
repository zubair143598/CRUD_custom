import React, { useState } from "react";
import Employees from "../components/Employees";



const Homee = () => {
  const [employeeData, setEmployeeData] = useState(Employees);

  const handleDelete = (id) => {
    const upDatedData = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData(upDatedData);
  };
 

  return (
    <div className="h-screen px-[20rem] text-center flex flex-col justify-center   ">
      <table className="  border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className=" border-collapse border border-slate-400">Name</th>
            <th className=" border-collapse border border-slate-400">Age</th>
            <th className=" border-collapse border border-slate-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData && employeeData.length > 0
            ? employeeData.map((data) => {
                return (
                  <>
                    <tr key={data.id} >
                      <td className=" border-collapse border border-slate-400">
                        {data.name}
                      </td>
                      <td className=" border-collapse border border-slate-400">
                        {data.age}
                      </td>
                      <td className=" border-collapse border border-slate-400">
                        <a href="/edit">

                      <button
                          onClick={() => alert(data.id)}
                          
                          className="bg-blue-500 border rounded m-1 py-1 px-3"
                          >
                          Edit
                        </button>
                          </a>
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
      <a href="/Create">

      <button  className="bg-blue-500 border rounded m-1 py-1 px-3 w-[120px]">add</button>
      </a>
    </div>
  );
};

export default Homee;
