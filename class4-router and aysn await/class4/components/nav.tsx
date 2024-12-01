
import Link from "next/link"


<nav />
export default function Nav(){

    return(
        <div>
            <br />
        <ol>

        <li>  <Link href="/"> Home </Link> </li>
        <li>  <Link href="/about"> About </Link> </li>
        <li>  <Link href="/fetching"> Fetching </Link> </li>
        <li>  <Link href="/products"> Prodocts </Link> </li>
 </ol>
 <br />
        </div>
       
    )
}