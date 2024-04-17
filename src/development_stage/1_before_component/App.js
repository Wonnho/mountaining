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
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL+'/image/삼척_상성기.jpg'} width="180px" height="120px" alt="no_image.jpg"/>
                    <h4>삼척 상성기</h4>
                    <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척시 대중교통정보</a>
                    </p>
                </div>
                <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL+'/image/mountain3.jpg'} width="180px" height="120px" alt=""/>
                        <h4>거창 기백산</h4>
                        <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
                        </p>
                    </div>
                        <div className="col-md-4">
                            <img src={process.env.PUBLIC_URL+'/image/mountain5.jpg'} width="180px" height="120px" alt=""/>
                            <h4>인제 대암산</h4>
                            <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
                            </p>
                        </div>
                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL+'/image/mountain4.jpg'} width="180px" height="120px" alt=""/>
                                <h4>평창_백석산</h4>
                                <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
                                </p>
                            </div>
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL+'/image/mountain2.jpg'} width="180px" height="120px" alt=""/>
                                    <h4>강릉 천후재</h4>
                                    <p>등산정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
                                    </p>
                                </div>

                </div>
            </div>

        <div>
            <h2> 교통정보</h2>
        <ul>
            <li><a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a></li>
            {/* <li><a href=""></a></li>*/}
            {/* <li><a href=""></a></li>*/}
            {/*<li><a href=""></a></li>*/}
            {/*<li><a href=""></a></li>*/}
        </ul>
        </div>
<p>
    <a href="https://www.knps.or.kr/upload/contest/1/thumb_20141028105252300.jpg">월악산</a>
</p>
        <p>
            <a href="https://cafe.daum.net/Ieechen/6fGV/762?q=%EC%82%BC%EC%B2%99+%EC%83%81%EC%84%9C%EA%B8%B0&re=1
    ">삼척 상서기</a>
        </p>

     </div>
  );
}
export default App;
