import React from 'react'

const Childclass = (props) => {
  return (
    <div>
       <h3 style={{marginBottom:'0px'}}>This is child class:</h3>
      
        <h4 style={{marginLeft:'5%', marginTop:'0px', color:'blue', fontStyle:'italic'}}>I am a software developer...I have a 'Benz Car' also '{props.data1}' and '{props.data2}'</h4>
      
    </div>
  )
}

export default Childclass