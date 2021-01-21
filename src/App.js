import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader,  CardImg, CardBody, CardColumns, CardTitle, CardText, CardSubtitle } from 'reactstrap';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/students/',
      );

      setData(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardColumns>
          {data.map((student, index) => {
                return <Card key={index} style={{ width: '18rem' }}>
                    <CardHeader style={{ backgroundColor: "#feffc4" ,textAlign: 'center' }}>
                      <b>Student Card</b>
                    </CardHeader>
                    <CardBody>
                    <center>
                      <CardImg
                        className="center"
                        src={student.picture_url}
                        style={{ textAlign: 'center', maxWidth: 150, paddingBottom: 20 }}
                      />
                    </center>
                    <CardTitle className="mb-2 text-primary">{`Name: ${student.first_name} ${student.last_name}`}</CardTitle>
                    <CardSubtitle className="mb-2 text-info" >{`Student Id: ${student.id}`}</CardSubtitle>
                    <CardText className="mb-2 text-muted">{`Email: ${student.email}`}</CardText>
                    <CardText className="mb-2 text-muted">{`Age: ${student.age}`}</CardText>
                    <CardText className="mb-2 text-muted">{`Country: ${student.country}`}</CardText>
                    <CardText className="mb-2 text-muted">{`City: ${student.city}`}</CardText>
                  </CardBody>
                </Card>
              })}
      </CardColumns>
   </div>
 );
}

export default App;
