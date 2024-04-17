import './App.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import mountains1 from '../../../public/image/mountain2.jpg';

import {useState} from "react";
import {smallest,largest} from './data.js';
import {Routes,Route,Link,useNavigate,Outlet} from "react-router-dom";
import Detail from "./Detail";

function App() {

    let mountains='대한민국 5대 높은 산'
    // let [large]=useState(largest)
    let [small]=useState(smallest)
    let [large]=useState(largest)

    let navigate=useNavigate();
  return (
    <div className="App">


        <Navbar bg="light" data-bs-theme="light">

            <Routes>
                <Route path="/" element={<div>Home</div>}/>
                <Route path="/detail" element={<div>주요 정보</div>}/>
                <Route path="/about" element={<div>주요 개요</div>}/>
            </Routes>

            <Container>

                <Navbar.Brand href="#home">Mountaineer</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/climbing')}}>Climbing</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/trekking')}}>Trekking</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/hiking')}}>Hiking</Nav.Link>
                </Nav>
            </Container>

        </Navbar>

        <Routes>

       <Route path="/" element={
           <div>
        <div className="main-bg"> <h1> Mountains in Korea </h1> </div>

        <h4 style={{color:"#8B4513", fontSize:"37px",margin:"32px 2px"}}>{mountains}</h4>

            <div className="container">
            <div className="row">

                { large.map((mountain,index)=>{
                return(
                <Mountain key={index} mountains={mountain} k={1+index}/>
            )
            })
            }
            </div>
            </div>
           </div>
               }/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/about" element={<About/>}>
              i  <Route path="intro" element={<Intro/>}/>
                 <Route path="location" element={<Location/>}/>
            </Route>
            <Route path="*" element={<div>No found Page</div>} />
</Routes>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/detail">상세정보</Link>
    </div>
  );
}

function Mountain(mt) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/image/mountain'+mt.k+'.jpg'} width="220px" height="150px"  alt="no_image.jpg"/>
            <h4>{mt.mountains.mountain_name}</h4>
            <p>고도:{mt.mountains.content} m</p>
            <p>지역:{mt.mountains.transportation}</p>
            <p><Link to="/detail">등산상세정보</Link></p>
            <p>등산교통정보:<a href="https://www.samcheok-pti.kr/index.php?mp=p2_5_5">삼척 상서기</a>
            </p>
         </div>

    )
}

function About() {
    <div>
        <h4>회사정보</h4>
        <p> 산악 정보 제공 회사 </p>
    </div>
}
function Intro() {
    <div>
        <h4>회사정보</h4>
        <p> 산악 정보 제공 회사 </p>
        <blockquote> 대표: 이시현 </blockquote>
    </div>
}

function Location() {
    <div>
        <h4>회사 위치</h4>
        <p>  337-899, Seoul, South Korea</p>
    </div>
}
export default App;
