"use client"
import { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';
export default function Home() {
  const [num, setNum] = useState(5);

  const handleInputChange = (e) => {
    setNum(e.target.value);
  };


     
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <section>
                <h2>Factorial Calculation</h2>
                <input 
                    type="number"
                    value={num}
                    onChange={handleInputChange}
                />
       
                <FactorialComponent number={num} />
            </section>
    </div>
);
}
