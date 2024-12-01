import Nav from "@/components/nav"

export default function Product({params}:{params:{product:string}}){
    console.log(params)
    
    return(
        <div> 
            <Nav />
           
        <h3>Product Information {`${params.product}`}</h3>
        <br />
        <h1>{`You have click or type ${params.product}`}</h1>
        </div>


    )
}