import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
export default function noticias() {
  var produtos = [
    {
        id: 1,
        produto: "Camiseta Estampada",
        descricao: "Camiseta de algodão com estampa vibrante, ideal para o uso diário e confortável, disponível em várias cores."
    },
    {
        id: 2,
        produto: "Tênis Esportivo",
        descricao: "Tênis de alta performance, projetado para corrida e atividades físicas, oferecendo suporte e conforto excepcionais."
    },
    {
        id: 3,
        produto: "Relógio Digital",
        descricao: "Relógio digital com funções de cronômetro, alarme e resistência à água, perfeito para atividades ao ar livre."
    },
    {
        id: 4,
        produto: "Mochila de Nylon",
        descricao: "Mochila resistente à água, com diversos compartimentos para organização e conforto ao transportar seus itens."
    },
    {
        id: 5,
        produto: "Fones de Ouvido Bluetooth",
        descricao: "Fones de ouvido sem fio com qualidade de som superior, autonomia de bateria prolongada e conforto para uso prolongado."
    }
]

  return (
    <>
      <Menu />
      <Container>Lista
      {produtos.map(produto => 
      <div> 
        <p>{produto.produto}</p>
        <p>{produto.descricao}</p>
      </div>
      )}  
      </Container> 
      <Footer />
    </>
  );
}
