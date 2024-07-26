import React, { useState } from 'react';

const FizzBuzz = () => {
    const [number, setNumber] = useState(15);
    const [output, setOutput] = useState([]);

    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    const generateFizzBuzz = () => {
        const result = [];
        for (let i = 1; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result.push("FizzBuzz");
            } else if (i % 3 === 0) {
                result.push("Fizz");
            } else if (i % 5 === 0) {
                result.push("Buzz");
            } else {
                result.push(i);
            }
        }
        setOutput(result);
    };

    return (
        <div>
            <input type="number" value={number} onChange={handleChange} />
            <button onClick={generateFizzBuzz}>Generate</button>
            <ul>
                {output.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FizzBuzz;
