import { useState } from "react";

export default function Lottery() {

    const generateNumber = () => {
        return Math.floor(Math.random() * 900) + 100; 
       
    };

    const [number, setNumber] = useState(generateNumber());

    const roll = () => {
        setNumber(generateNumber());
    };

             
        const sum=()=>{let sum=0;
        let b=number;
        for(let i=0;i<3;i++){
            let a=b%10;
            b = Math.floor(b / 10)
            sum+=a;
        }
        return sum;
    }
    
  

    return (
        <div>
            <h1>🎰 Lottery Game</h1>

            <h2>{number}</h2>

            <button onClick={roll}>
                Generate Number
            </button>
            {sum()==15?<p>WIN</p>:<p>Retry</p>}
     
            
        </div>
    );
}