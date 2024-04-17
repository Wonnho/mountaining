import './App.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import mountains1 from '../../../public/image/mountain2.jpg';

import {useState} from "react";
import {smallest,largest} from './data.js';


function App() {

    let mountains='대한민국 5대 높은 산'
    // let [large]=useState(largest)
    let [small]=useState(smallest)
    let [large]=useState(largest)
  return (
    <div className="App">

        <Navbar bg="dark" data-bs-theme="dark">

            <Container>

                <Navbar.Brand href="#home">Mountaineer</Navbar.Brand>

                <Nav className="me-auto">

                    <Nav.Link href="#home">Climbing</Nav.Link>

                    <Nav.Link href="#link">Trekking</Nav.Link>

                    <Nav.Link href="#link">Hiking</Nav.Link>



                </Nav>

            </Container>

        </Navbar>



        <div className="main-bg">
            <h1> Mountains in Korea  </h1>

        </div>
        <h4 style={{color:"#8B4513", fontSize:"37px",margin:"32px 2px"}}>{mountains}</h4>

        <div className="container">
            <div className="row">
                <Mountain mountain={mountains[0]} k={1}/>
                <Mountain mountain={mountains[1]} k={2}/>
                <Mountain mountain={mountains[2]} k={3}/>
                <Mountain mountain={mountains[3]} k={4}/>
                <Mountain mountain={mountains[4]} k={5}/>

            </div>
            </div>

     </div>
  );
}

function Mountain(mt) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/image/강릉_전후재'+mt.k+'.jpg'} width="180px" height="120px" alt=""/>
            <h4>{largest[4].mountain_name}</h4>
            <p>고도:{largest[4].content}</p>
            <p>지역:{largest[4].transportation}</p>
            <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
            </p>
        </div>

    )
}
export default App;
