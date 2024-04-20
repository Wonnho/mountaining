import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

function Detail(mt) {
    let {id}=useParams();
    let [count,setCount]=useState(0);
    let [alert,setAlert]=useState(true);
    let [days,setDays]=useState('')
    let navigate=useNavigate();
    useEffect(
        ()=>{
         //   console.log('useEffect test')
            setTimeout(
                ()=>{
                    setAlert(false)
                },10000
            )
            console.log("갱신에도 수행허용")
        },
        []
    )

    let mountainFind=mt.mountains.find(
        function(x) {
            return x.id==id
        }
    )
    useEffect(()=>{if(isNaN(days)==true){window.alert('숫자로 입력하세요')}},[])

    return (
        <div className="container">
            { alert===true?<div className="alert alert-warning">
                설악산 등반, 1박 2일 특가 <Button variant="warning" onClick={()=>{
                    navigate('/order')
            }}>등반신청</Button>
            </div>:null}
            <div className="row">
                <div>
                    <img src={process.env.PUBLIC_URL+'/image/mountain'+(parseInt(id)+1)+'.jpg'} width="220px" height="150px"  alt="no_image.jpg"/>
                </div>
                <div>
                   <h4>산이름:{mountainFind.mountain_name}</h4>
                    <p> 온도 </p>
                    <p> 습도 </p>
                    <p> 풍속 </p>
                    <p> 미세먼지  </p>
                    <p> 초미세먼지</p>
                    <p> 황사</p>
                     <p> </p>
                </div>
                <div>
                    <h4> 산악 정보 </h4>
                    <p>방문객수: 20800명 </p>
                    <p> 등산 상태: 등산하기 좋음/어려움/불가 </p>
                    <p>예상시간:4:30분~5:30분 </p>
                    <p> 등산 난이도: 상 </p>
                    <button onClick={()=>{
                        setCount(count+1)
                    }}>
                        조회수
                    </button> : {count}
                    <p>등산 인원수
                    <input type="text" onChange={(e)=>{
                        setDays(e.target.value)
                    }}/> 박
                    <button className="btn btn-danger">야간 등산예약</button></p>


                </div>
            </div>
        </div>
    )
}

export default Detail;