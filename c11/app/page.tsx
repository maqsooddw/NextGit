import { client } from "@/sanity/lib/client";
import Hello from "./components/Hello";

interface Student {
  _id: string;
  name: string;
  age: number;
  // Add other fields from your `student` schema here
}


async function getData(): Promise<Student[]>{

  const fetchData = await client.fetch('*[_type == "student"]');
  return fetchData;

}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <main className="flex min-hscreen flex-col items-center p-24 text-center">
<div className='bg-orange-800 p-8 m-6'> My First Project


{/* <h1 className="bg-slate-600 h-screen text-3xl"> Sanity First Project</h1> */}

{data.map((val:any,i:number)=>{
return(<>
<ul className="bg-blue-700"><li>{val.name} </li></ul>

</>)

})}
<Hello/>
{/* <Zero /> */}

</div>
    </main>
  );
}
