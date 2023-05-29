/* eslint-disable @next/next/no-css-tags */
import Employees from "@/components/Employees";
import React, { useState } from "react";
// import {v4 as uuid} from "uuid";
import {v4 as uuid} from "uuid"

import Link from "next/link";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId= ids.slice(0,8);
    let a=name,
    b=age;
    Employees.push({id: uniqueId, name:a ,age:b})

  }

  return (
    <div className="h-screen px-[20rem] text-center flex flex-col justify-center">
      <form action="">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="border px-3 py-2 rounded bg-slate-200   placeholder-black border-black"
        />
        <br />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age"
          required
          className=" mt-3  border px-3 py-2 rounded bg-slate-200  placeholder-black border-black"
        />
        <br />
        <button
          type="submit"
          onClick={(e)=>handleSubmit(e)}
          className="bg-blue-500 border rounded m-1 py-1 px-3"
          >
          
        <Link className="  " href="/">
        Submit

          </Link>
        </button>
         
      </form>
    </div>
  );
};

export default Create;
