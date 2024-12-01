import Nav from "@/components/nav"
import { link } from "fs"
import Link from "next/link"



export default async function Fetcha(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    const fetchData = fetch(url)
    const res = await (await fetchData).json()
    console.log(res)
   
    
    return(
        <div> 
            <br />
            <Nav />
    
            <ol> {res.map((element:any,index:number)=>{
                return(<li>
                    <Link href={`/fetching/${element.id}`}> {element.title}  </Link>
                    
                    </li>
                    
                    )
            })}</ol>
        </div>
    )

}