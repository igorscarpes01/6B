const { Container } = require("react-bootstrap")
const { default: Menu } = require("./component/navbar")
const { default: Footer } = require("./component/footer")
import { useEffect, useState } from "react";
export default function Promessa() {
    const [prometido, setPrometido] = useState("");
    useEffect(() => {
        setTimeout(async () => {
            document.title = "Promessa é divida";
            const altera = await saoLonguinho("olá texto novo")
            setPrometido(altera);
        }, 4000)
    })
    return <>
        <Menu />
        <Container>
            Promessa {prometido === "" ? <img src="./loading.gif" width={50} height={50} /> : prometido}
        </Container>
        <Footer />
    </>
}

function saoLonguinho(texto) {
    return new Promise((resolva) =>
        setTimeout(() => {
            resolva(texto)
        }, 2000));
}