
import Employees from "@/components/Employees";
import React, { useState } from "react";
import {v4 as uuid} from "uuid"

import Link from "next/link";
import { useRouter } from "next/router";

const Create = () => {
  const router= useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId= ids.slice(0,8);
    let a=name,
    b=age;
    Employees.push({id: uniqueId, Name:a ,Age:b})
    router.push("/")
    

  }

  return (
    <div className="h-screen sm:px-2  text-center flex flex-col justify-center">
      <form action="">
        <input
          id="name"
          type="text"
          required
          placeholder="NAME"
          onChange={(e) => setName(e.target.value)}
          className="focus:border-[#BE9F56] focus:bg-transparent border px-3 py-2 rounded bg-slate-200   placeholder-black border-black"
        />
        <br />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age"
          required
          className="focus:border-[#BE9F56] focus:bg-transparent mt-3  border px-3 py-2 rounded bg-slate-200  placeholder-black border-black"
        />
        <br />
        <button
          type="submit"
          onClick={(e)=>handleSubmit(e)}
          className="bg-blue-500 border rounded m-1 py-1 px-3"
          >
          
        {/* <Link className="  " href="/"> */}
        Submit

          {/* </Link> */}
        </button>
         
      </form>
    </div>
  );
};

export default Create;
