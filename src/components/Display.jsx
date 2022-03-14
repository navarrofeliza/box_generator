import React from 'react'

const Display = (props) => {
    // time for destructure props
    const {allColors} = props;
    console.log("Here's all the colors!", allColors);

    return (
        <div style={{display : 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {
                allColors.map((color, i) => {
                        return ( 

                            <div key={i} className="block" style={{backgroundColor : color.color, height: color.square+"px", width: color.square+"px", margin: '4px'}}>

                            New Color: <h3>{color.color}</h3>
                            Box Size: {color.square+"px"}
                </div>  
                    )
                })
            }
        </div>
    );
}

export default Display;