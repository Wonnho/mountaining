import './App.css';
import {Navbar,Container,Nav,NavDropdown,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import mountains1 from '../../../public/image/mountain2.jpg';
//import { MdPhoneInTalk } from "react-icons/md";
import {useState} from "react";
import {smallest,largest} from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from "./route/Detail";
import axios from "axios";

function App() {

  //  let mountains='대한민국 5대 높은 산'
    // let [large]=useState(largest)
    let [small]=useState(smallest)
    let [large]=useState(largest)

    let navigate=useNavigate();
  return (
    <div className="App">


        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Mountaineer</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/climbing')}}>Climbing</Nav.Link>
                    <Nav.Link href="#trekking">Trekking</Nav.Link>
                    <Nav.Link href="#hiking">Hiking</Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{navigate('/about') }}>About</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>{navigate('/about/member') }}>Membership</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>{navigate('/about/location') }}>Location</NavDropdown.Item>

                    </NavDropdown>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" width="140px">검색</Button>
                    </Form>
                    <Nav.Link href="/login">로그인</Nav.Link>


                </Nav>
            </Container>

        </Navbar>

        <Routes>

       <Route path="/" element={
           <div>
        <div className="main-bg"> <h1> Mountains in Korea </h1> </div>

        <h4 style={{color:"#8B4513", fontSize:"37px",margin:"32px 2px"}}>대한민국 5대 높은 산</h4>

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
               <Button variant="outline-success" size="1g"
               onClick={()=>{
                   axios.get('http://localhost:5000/mountain2')
                       .then((response)=>{
                        console.log(response.data)
                       })
                       .catch(()=>{
                           console.log('failed')
                       })
               }}> 대한민국 산 더 보기 </Button>
           </div>
               }/>
            <Route path="/detail/:id" element={<Detail mountains={large}/>}/>
            <Route path="/about" element={<About/>}>
                <Route path="member" element={<Membership/>}/>
                <Route path="location" element={<Location/>}/>
            </Route>
        </Routes>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/search">등산 검색</Link>
    </div>
  );
}

function Mountain(mt) {
    let navigate=useNavigate();
    return (
        <div className="col-md-4" onClick={()=>
            navigate(`/detail/${mt.mountains.id}`)
        }>
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
 return (
    <div>
        <h4>Mountain Company</h4>
        <p> </p>
     <Outlet> </Outlet>
 </div>
 )
}

function Membership() {
    return (
        <div>
            <h3> 회원사</h3>
            <ul>
                <li>한라 산악회 </li>
                <li> 고구려 등산</li>
                <li> 중원 프런티어</li>
                <li> 한마음 트렉킹</li>
            </ul>
        </div>
    )
}

function Location() {
    return(
        <div>
            <blockquote> 전라마도 구려군 마산면 화엄사로 356</blockquote>
            {/*<MdPhoneInTalk/>*/}
        <p> 061-780-7721</p>
        </div>
    )
}
export default App;
