import Footer from "./components/footer";
import Navbar from "./components/navbar";
import {Container, Row, Col} from 'react-bootstrap';


function Index(){
  return <>
    <Navbar />
    <Container>
      <Row>
        <Col className="bg-primary">1 of 2</Col>
        <Col className="bg-primary-subtle">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-danger">1 of 3</Col>
        <Col className="bg-danger-subtle">2 of 3</Col>
        <Col  className="bg-primary">3 of 3</Col>
      </Row>
    </Container>
    <Footer />
  </>
}
export default Index;