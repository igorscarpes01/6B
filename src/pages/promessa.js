const { Container } = require("react-bootstrap")
const { default: Menu } = require("./component/navbar")
const { default: Footer } = require("./component/footer")
import { useState } from "react";

export default function Promessa(){

    const [prometido, setPrometido] = useState("") 
    setTimeout(() => {
        setPrometido("é divida")
        document.title= "Promessa é divida" 
    }, 2000);

    return <> 
        <Menu />
        <Container>
            Promessa {prometido=== "" ? "<carregando> }" : prometido}
        </Container>
        <Footer />
    </>
    
}