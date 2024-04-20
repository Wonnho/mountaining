import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button,Nav} from "react-bootstrap";

function Detail(mt) {
    let {id}=useParams();
    let [count,setCount]=useState(0);
    let [alert,setAlert]=useState(true);
    let [days,setDays]=useState('')
    let [tab,setTab]=useState(0)
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
                    <h4> 선정이유  </h4>
                    <p> 휴전선에 인접해 있는 탓에 입산금지구역으로 묶여 있다가 몇 년 전부터 통제가 다소 완화되었기 때문이다. 그러나 여전히 등산로가 제한된다. 정상을 중심으로 산행이 가능한 등산로는 범륜사, 신암리, 원당리 방면이다. 감악사, 운계사, 범륜사, 운림사 등의 4개 사찰이 있었다는데 현재는 1970년 옛 운계사 터에 재창건한 범륜사만 남아있다. 장군봉 아래는 조선 명종 때 의적 임꺽정이 관군의 추적을 피해 숨어있었다는 임꺽정굴이 있다.  </p>
                    <h4> 상세 정보</h4>
                    <p>대암산 정상 부근에는 큰 용늪, 작은 용늪이라 불리는 고지습원이 있는데, 작은 용늪은 이미 그 원래의 모습을 상실하여 숲으로 변해버리고 말았다. 큰 용늪은 우리나라에서 유일한 고지습원으로 연중 안개끼는 날이 많은 특수한 환경이 조성되고 있어 생태계 연구에 좋은 자료를 제공하고 있다.</p>
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
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{
                        setTab(0);
                    }}>산악정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{
                        setTab(1);
                    }}>등산로</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{
                        setTab(2);
                    }}>숙박정보</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* 탭의 내용 미리 디자인 */}

           <TabInfo tab={tab}/>
        </div>
    )
}

function TabInfo(mt) {
    if(mt.tab==0) {
        return <div>
            <table>
                <tr>
                    <th>방문객수</th>
                    <td>20800명</td>
                </tr>
                <tr>
                    <th>등산 상태</th>
                    <td>등산하기 좋음/어려움/불가</td>
                </tr>
                <tr>
                    <th>예상시간</th>
                    <td>4:30분~5:30분</td>
                </tr>
                <tr>
                    <th>등산 난이도</th>
                    <td>상</td>
                </tr>
            </table>

        </div>
    } else if(mt.tab==1) {
        return <div>제1 등산로</div>
    } else if(mt.tab==2) {
        return <div>
            <ul>
                <li>호텔</li>
                <li>콘도</li>
                <li>모텔</li>
                <li>민박</li>
            </ul>
        </div>
    }
}
export default Detail;