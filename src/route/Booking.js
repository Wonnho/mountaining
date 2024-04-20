import {Table} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import { addCount, changeName} from "../store.js"
function Booking() {
    let reduxState=useSelector(
        (state)=>{
            return state
        }
    )

    console.log(reduxState.user);
    console.log(reduxState.stock);
    console.log(reduxState.book);

    let dispatch=useDispatch();

    return (
        <div>
<Table>
    <thead>
    <tr>
        <th>#야간등산예약번호</th>
        <th>예약자</th>
        <th>날짜</th>
        <th>인원</th>
        <th>Memo</th>
    </tr>
    </thead>
    <tbody>
    {
        reduxState.book.map((element)=>

    <tr>
        <td>{element.id}</td>
        <td> {element.name}
        </td>
        <td>{element.date}</td>
        <td> {element.count}
            {/*<button onClick={()=>{dispatch(changeHeadPlus(1))}}>+</button>*/}
            {/*{reduxState.user.head}<button onClick={()=>{dispatch(changeHeadMinus(1))}}>-</button>*/}
        </td>
        <td>미정  <button onClick={()=>{dispatch(changeName(element.id))}}>이름변경</button>
        </td>
        <td>미정  <button onClick={()=>{dispatch(addCount(element.id))}}>인원수변경</button>
        </td>
    </tr>
            )
    }

    </tbody>
</Table>
        </div>
    )
}
export default Booking;