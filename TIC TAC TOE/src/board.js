import React from 'react'
import './board.css'

export default function Board() {
    let name1="Zero Wala",name2="Cross Wala";
    let arr = ['0','0','0','0','0','0','0','0','0']
    function checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2], // Row 1
            [3, 4, 5], // Row 2
            [6, 7, 8], // Row 3
            [0, 3, 6], // Column 1
            [1, 4, 7], // Column 2
            [2, 5, 8], // Column 3
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] !== '0' && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        if (!board.includes('0')) {
            return 'Draw';
        }
        return 'ok';
    }
    let player1 = true;
    var handleClick = function(id){
        var int_id = id-'0';
        const a = document.getElementById(id);
        if(player1 === true && arr[int_id]==='0'){
            player1 = false;
            arr[int_id] = 'O';
            a.src = "data:image/jpeg;base64,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";
            a.alt = "O"
        }else if(arr[int_id]==='0'){
            player1 = true;
            arr[int_id] = 'X';
            a.src = "data:image/jpeg;base64,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";
            a.alt = "X"
        }
        console.log(arr)
        var value = checkWinner(arr)
        console.log(value)
        if(value==='Draw'){
            alert('Draw')
            window.location.reload();
        }else if(value ==='O'){
            alert(name1+' wins')
            window.location.reload();
        }else if(value ==='X'){
            alert(name2+' wins')
            window.location.reload();
        }
    }

  return (
    <div>
      <div className='board'>
        <h1>TIC TAC TOE</h1>
        <div className='form'>
            <form >
                <input onChange={(event)=>{
                    name1 = event.target.value;
                }}placeholder ="First Player"></input>
                <input onChange={(event)=>{
                    name2 = event.target.value;
                }} placeholder='Second Player'></input>
            </form>
        </div>
        <table border='1'>
            <tr>
                <td onClick={()=>{handleClick('0')}} className="outerCont">
                    <img id='0' alt=""></img>
                </td>
                <td onClick={()=>{handleClick('1')}} className="outerCont">
                    <img id ="1"  alt="" />
                </td>
                <td onClick={()=>{handleClick('2')}} className="outerCont">
                    <img id ="2" alt="" />
                </td>
            </tr>
            <tr>
                <td onClick={()=>{handleClick('3')}} className="outerCont">
                    <img id ="3" alt="" />
                </td>
                <td onClick={()=>{handleClick('4')}} className="outerCont">
                    <img id ="4" alt="" />
                </td>
                <td onClick={()=>{handleClick('5')}} className="outerCont">
                    <img id ="5" alt="" />
                </td>
            </tr>
            <tr>
                <td onClick={()=>{handleClick('6')}} className="outerCont">
                    <img id ="6" alt="" />
                </td>
                <td onClick={()=>{handleClick('7')}} className="outerCont">
                    <img id ="7" alt="" />
                </td>
                <td onClick={()=>{handleClick('8')}} className="outerCont">
                    <img id ="8" alt="" />
                </td>
            </tr>
            
        </table>
      </div>
    </div>
  )
}
