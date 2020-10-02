import React, {useState} from "react";

import './styles.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import Row from "react-bootstrap/esm/Row";

const Example: React.FC = () => {
  const [teste,setTest] = useState(100);
  
  const func = () =>{
    let value = teste;
    value = value +1;
    setTest(value);
    console.log(value);
  }

  const example = "Exemplo de componente para o teste da AutonoDev";
  return (
    <div className = "overall">
      <Navbar className= "Navbar" bg="light" expand="lg">
          <Navbar.Brand style={{color:'#fff'}}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link style={{color:'#fff'}}>Sobre</Nav.Link>
                  <Nav.Link style={{color:'#fff'}}>Informações</Nav.Link>
              </Nav>
              <Nav>
              </Nav>
          </Navbar.Collapse>
      </Navbar>

      <div className="container-logo">
        <img src={logo}/>
      </div>
      
      <Row>
        <div className="container-h1">
          <h1>Sua melhor maneira de encontrar imóveis na sua cidade</h1>
        </div>

        <div className="container-form">
          <Form className="form">
            <Form.Check inline label="Casa" type="radio"  />
            <Form.Check inline label="Apartamento" type="radio"  />
            <Form.Check inline label="Terreno" type="radio"  />
            
            <Form.Group controlId="formBasicEmail">
            
              <Form.Label className="pt-2">Selecione o bairro</Form.Label>
              <Form.Control as="select" >
                <option>Selecione</option>
                <option>Mangabeira</option>
                <option>Brisamar</option>
                <option>Jaguaribe</option>
                <option>Rio Tinto</option>
                <option>Altiplano</option>
              </Form.Control>

              <Form.Label className="pt-2">Tipo de contrato</Form.Label>
              <Form.Control as="select" >
                <option>Selecione</option>
                <option>Aluguel</option>
                <option>Venda</option>
                <option>Venda Urgente</option>

              </Form.Control>

              
              <label form="customRange1">Example1 range</label>
              <input min="0" max="1000" type="range" onChange={()=>func()} className="custom-range" id="customRange1"></input>
              <p>{teste}</p>
              <label form="customRange1">Example1 range</label>
              <input min="0" max="1000" type="range" onChange={()=>func()} className="custom-range" id="customRange1"></input>
              <label form="customRange1">Example1 range</label>
              <input min="0" max="1000" type="range" onChange={()=>func()} className="custom-range" id="customRange1"></input>
            </Form.Group>

            
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
      </Row>
      </div>
  );
};

export default Example;
