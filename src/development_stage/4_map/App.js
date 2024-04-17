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

                { large.map((mountain,index)=>{
                return(
                <Mountain mountains={mountain} k={1+index}/>
            )
            })
            }
            </div>
            </div>

     </div>
  );
}

function Mountain(mt) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/image/mountain'+mt.k+'.jpg'} width="180px" height="120px" alt="no_image.jpg"/>
            <h4>{mt.mountains.mountain_name}</h4>
            <p>고도:{mt.mountains.content} m</p>
            <p>지역:{mt.mountains.transportation}</p>
            <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
            </p>
        </div>

    )
}
export default App;
