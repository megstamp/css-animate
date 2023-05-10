import { Container, Row, Col} from "react-bootstrap";
import "../styles/Page2.css"

export default function Page2() {

    const imgRoot = process.env.PUBLIC_URL + "/images";

    return (
       <section>
        <Container>
             <Row>
                <Col><button class="pg2-button button1">X axis</button></Col>
                 <Col><button class="pg2-button button2">Y axis</button></Col>
                 <Col><button class="pg2-button button3">Scale</button></Col>
             </Row>

             <Row>
                <Col>
                <div className="profile">
                    <img src={imgRoot+"/pict.webp"} alt="mermaid" />

                 <div className ="profile-text">
                    <h3>Mermaid time</h3>
                    <a href="#" class="profile-button" rel="noreferrer">Ariel</a>
                    </div>   
                </div>
                </Col>
             </Row>
       </Container>
       
       
       </section>
 )
}