import React from 'react';

import './styles.scss';
import photo1 from '../../images/casa1.jpg'
import photo2 from '../../images/casa2.jpg'
import photo3 from '../../images/casa3.jpg'

import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

const Highlights: React.FC = () => {
  return (
    <div className="main">
      <div className="text">
        <h4>Imóveis em destaque</h4>
      </div>
      <p style={{textAlign:'center',paddingBottom:45}}>Confira abaixo alguns dos diversos imóveis disponíveis em nosso site</p>

      <Row>
        <div className="first">
          <Badge variant="success">Venda</Badge>
          <img src={photo1}/>
          <div className="pb-4 pr-4 pl-4 pt-3">
            
            <p>Descrição casa 1</p>
            <a>Bairro São José</a>
            <hr/>
            <b>10000 R$</b>
          </div>
        </div>
        
        <div className="middle">
          <Badge variant="success">Aluguel</Badge>
          <img src={photo2}/>
          <div className="pb-4 pr-4 pl-4 pt-3">
            <p>Descrição casa 2</p>
            <a>Manaíra, Orla</a>
            <hr/>
            <b>250000 R$</b>
          </div>
        </div>
        
        <div className="last">
          <Badge variant="success">Venda</Badge>
          <img src={photo3}/>
          <div className="pb-4 pr-4 pl-4 pt-3">
            <p>Descrição casa 3</p>
            <a>Jaguaribe</a>
            <hr/>
            <b>1000000 R$</b>
          </div>
        </div>
      </Row>
      
    </div>

  );
}

export default Highlights;