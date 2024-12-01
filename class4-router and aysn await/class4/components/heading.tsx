// compnent 1

export default function Heading():any{
  return(
    <div> <h3>Hello From Component 1 <span><b>Heading.tsx</b></span></h3></div>
  )
}

// component 1b

interface prop {
  name:string
  cast:string
  Stdno:string
}

export function Heading1b(prop:prop): JSX.Element{
  console.log(prop)
  return(
    <div> <h1>{`Name ${prop.name} Cast ${prop.cast} Student No ${prop.Stdno}`} From Component 1b <b>Heading.tsx</b> </h1></div>
  )
}
