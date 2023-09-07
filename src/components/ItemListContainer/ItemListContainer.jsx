import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ productsData }) => {
  //useNavigate nos permite navegar entre rutas dentro de nuestra aplicación
  const navigate = useNavigate();

  return (
    <div className={styles.productContainer}>
      {productsData.map((product) => {
        return (
          <Card className={styles.productCard} key={product.id}>
            <Card.Img style={{ width: "18rem" , height:"20rem" , padding: "1rem" }} variant="top" src={product.image} />
            <Card.Body style={{textAlign:"center" }}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
