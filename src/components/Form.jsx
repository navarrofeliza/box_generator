import React, { useState } from 'react'
import Display from '../components/Display';

// Random comments to help me keep track with what I'm doing! Many research went into this and took most of the weekend to do this....

const Form = (props) =>{
    // state the variable for the squares
    const [allColors, setAllColors] = useState([]);
    const [color, setColor] = useState('');
    const [square, setSquare] = useState(200);
    
    // use a function to state the form input and update it
    const handleForm = e =>{
        setColor(e.target.value);
    }

    const handleForm2 = e =>{
        setSquare(e.target.value);
    }

    // time for the handle submit for the submit button
    const handleSubmit = e => {
        // using the prevent default to prevent (lol) React to send the data to a random place
        e.preventDefault();
        console.log(color);

        const newColor = {
            color: color,
            square: square
        };
        setAllColors([...allColors, newColor]); // this will set the new color(hopefully). using the spread (...) to add all the colors and new the new one
        console.log(allColors);
        setColor("");
        setSquare(200); // ninja bonus?
    }

    return (
        <><form onSubmit={handleSubmit}>
            <label htmlFor="colorInput">Color</label>
            <input type="text" name="color" value={color} onChange={handleForm} />

            {/* hopefully this ninja bonus will work */}
            <label htmlFor="boxSizeInput">Enter a box size!</label>
            <input type="text" name="square" value={square} onChange={handleForm2} />
            <button type="submit" class="btn btn-primary">Add</button>
        </form><Display allColors={allColors} /></>
        );
}

export default Form;