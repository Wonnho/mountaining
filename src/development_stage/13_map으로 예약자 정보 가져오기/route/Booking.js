import {Table} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import { changeHeadMinus, changeHeadPlus, changeName} from "../store.js"
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
        <td>미정  <button onClick={()=>{dispatch(changeName())}}>이름변경</button>
        </td>
    </tr>
            )
    }

    {/*<tr>*/}
    {/*    <td>{reduxState.book[1].id}</td>*/}
    {/*    <td> {reduxState.book[1].name}*/}
    {/*    </td>*/}
    {/*    <td>{reduxState.book[1].date}</td>*/}
    {/*    <td> {reduxState.book[1].count}*/}
    {/*        /!*<button onClick={()=>{dispatch(changeHeadPlus(1))}}>+</button>*!/*/}
    {/*        /!*{reduxState.user.head}<button onClick={()=>{dispatch(changeHeadMinus(1))}}>-</button>*!/*/}
    {/*    </td>*/}
    {/*    <td>미정   <button onClick={()=>{dispatch(changeName())}}>이름변경</button>*/}
    {/*    </td>*/}
    {/*</tr>*/}
    </tbody>
</Table>
        </div>
    )
}
export default Booking;