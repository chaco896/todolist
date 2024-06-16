import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Tasklist from "./Components/Tasklist/Tasklist";

function App() {
  return (
    <div className='bg-info'>
      <Container>
        <Row>
          <Col lg className='my-5'>
            <div className='bg-white p-4'>
            <Form className="bg-info d-flex p-4 gap-4">
            <Form.Control type="text" placeholder="Add new task"/>
            <Button>Add&nbsp;Task</Button>
            </Form>
            </div>
            <Tasklist />
          </Col>
          <Col className='text-center text-white mt-5 pt-5'>
            <h1> To do list</h1>
            <h1 className="bg-white text-info py-2 rounded">HTML, CSS & Javascript with Reactjs</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

