import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = ({productData}) => {
  return (
    <div className={styles.productContainer}>
      <Card style={{ width: "30rem", justifyContent: "center", alignItems:"center" }}>
        <Card.Img variant="top" src={productData.image} style={{padding: "1rem"}}/>
        <Card.Body style={{textAlign:"center" }}>
          <Card.Title>{productData.name}</Card.Title>
          <Card.Text>Descripcion: {productData.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio : ${productData.price}</ListGroup.Item>
          <ListGroup.Item>Rating : {productData.rating}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button>Agregar el carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
