import Heading, { Heading1b } from "@/components/heading"
import Paragraph from "@/components/Paragraph"
import Subheading from "@/components/Subheading"
import Nav from "@/components/nav";





export default function Home() {
  return (
    <div>

<Nav />

<h3>Hello from H1 tag <b>Page.tsx</b></h3>

<Heading/>
<Subheading/>
<Paragraph/>

<br />
<h1><strong>Props</strong></h1>
<Heading1b name="Maqsood" cast="Ansari" Stdno="222" />
<br />
<br />
<h3>Hello from H1 tag <b>Page.tsx</b></h3>
<br />

    </div>
  );
}
