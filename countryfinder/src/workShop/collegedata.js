import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
// import { Image } from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';

import img1 from "../images/image1.png"
import img2 from "../images/image2.png"
import img3 from "../images/image3.png"
import img4 from "../images/image4.png"
import img5 from "../images/image5.png"
import img6 from "../images/image6.png"
import img7 from "../images/image7.png"
import img8 from "../images/image8.jpg"
import img9 from "../images/image9.png"

const Collegedata = () => {
const [StudentDetails,setStudentDetails]=useState([])
const pic=[img1,img2,img3,img4,img5,img6,img7,img8,img9]
    const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setStudentDetails(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Something went wrong');
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  
    
  return (
    <div>
        <p style={{fontSize:"48px",fontStyle:"italic",fontfamily: "Inter",fontWeight:"600px"
}}>Alumnus law college</p>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",gap:"120px",margin:"auto",marginTop:"50px"}}>
        {StudentDetails.map((each,stIndex)=>
   
    <Card style={{ width: '19rem' }}>
      {pic.map((img,picId)=>{
        return stIndex === picId ?(<Card.Img variant="top" src={img}/>):null
      })}
      {/* {Images[index].img} */}
      <Card.Body>
        <Card.Title>{each.name}</Card.Title>
        <Card.Text>
          {each.email}
        </Card.Text>
        <Card.Text>
          Works at {each.company.name} 
        </Card.Text>
        <Card.Text>
          Mobile: {each.phone} 
        </Card.Text>
      </Card.Body>
    </Card>
        )}
        </div>
    </div>
  )
}
export default Collegedata;
