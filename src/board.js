import React, { useState } from 'react'
import './board.css'

export default function Board() {
    let [mark1,setMark1] = useState(0);
    let [mark2,setMark2] = useState(0);
    let name1="First Player(Zero)",name2="Second Player(Cross)";
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
    const resetGame = () => {
        arr = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
        player1 = true;
        for(let i = 0 ; i < 9 ; i++){
            document.getElementById(i).src = "https://raw.githubusercontent.com/Mridul-lucifer/TIC-TAC-TOE/refs/heads/main/src/pics/bg.jpg";
        }

    };
    let player1 = true;
    var handleClick = function(id){
        var int_id = id-'0';
        const a = document.getElementById(id);
        if(player1 === true && arr[int_id]==='0'){
            player1 = false;
            arr[int_id] = 'O';
            a.src = "https://raw.githubusercontent.com/Mridul-lucifer/TIC-TAC-TOE/refs/heads/main/src/pics/O_symbol.png";
            a.alt = "O"
        }else if(arr[int_id]==='0'){
            player1 = true;
            arr[int_id] = 'X';
            a.src = "https://raw.githubusercontent.com/Mridul-lucifer/TIC-TAC-TOE/refs/heads/main/src/X_Symbol.png";
            a.alt = "X"
        }
        console.log(arr)
        var value = checkWinner(arr)
        console.log(value)
        if(value==='Draw'){
            setTimeout(() => {
                alert('Draw');
                resetGame();
            }, 700)
        }else if(value ==='O'){
            setTimeout(() => {
                alert(name1+' wins')
                setMark1(mark1+1);
                resetGame();
            }, 700)
        }else if(value ==='X'){
            setTimeout(() => {
                alert(name2+' wins')
                setMark2(mark2+1);
                resetGame();
            }, 700)
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
                <span>{mark1}</span>
                <input onChange={(event)=>{
                    name2 = event.target.value;
                }} placeholder='Second Player'></input>
                <span>{mark2}</span>
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
