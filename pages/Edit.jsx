import Employees from "@/components/Employees";
import { useRouter } from "next/router";
import React,{useEffect, useState} from "react";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const router = useRouter();

  const index = Employees.map((value) => {
    return value.id;
  }).indexOf(id);

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    let a=Employees[index]
    a.Name=name;
    a.Age=age;


    router.push('/');
  }

  useEffect(()=>{
    setName(localStorage.getItem("Name"))
    setAge(localStorage.getItem("Age"))
    setId(localStorage.getItem("Id"))


  },[])



  return (
    <div className="h-screen px-[20rem] text-center flex flex-col justify-center">
      <form action="">
        <input
          id="name"
          type="text"
          required
          value={name}
          placeholder="NAME"
          onChange={(e) => setName(e.target.value)}
          className="focus:border-[#BE9F56] focus:bg-transparent border px-3 py-2 rounded bg-slate-200   placeholder-black border-black"
        />
        <br />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          value={age}
          placeholder="Age"
          required
          className="focus:border-[#BE9F56] focus:bg-transparent mt-3  border px-3 py-2 rounded bg-slate-200  placeholder-black border-black"
        />
        <br />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="bg-blue-500 border rounded m-1 py-1 px-3"
        >
          {/* <Link className="  " href="/"> */}
          Update
          {/* </Link> */}
        </button>
      </form>
    </div>
  );
};

export default Edit;
