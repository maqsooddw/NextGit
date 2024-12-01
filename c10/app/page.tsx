import { client } from "@/sanity/lib/client";
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
    <main className="flex min-hscreen flex-col items-center p-24">
<h1> Sanity Tutorial</h1>
{data.map((val:any,i:number)=>{
return(<>
<h1>

{val.name}

</h1>

</>)

})}

    </main>
  );
}
