import Nav from "@/components/nav"
import Link from "next/link"


export default async function Fetchb({params}:{params:{fetch1:any}}){
   
    const url = `https://jsonplaceholder.typicode.com/posts/${params.fetch1}`
    const fetchData = fetch(url)
    const res = await (await fetchData).json()
    console.log(res)
   
    
    return(
        <div> 
            <br />
            <Nav />
           
            <h1> You have seleted product id  {params.fetch1} </h1>
<br />
<p>fetch data as below</p>

            <p> Id ={res.id}</p>
            <p> Title ={res.title}</p>
            <p>Body ={res.body}</p>
        </div>
    )
}