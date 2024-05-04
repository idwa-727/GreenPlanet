import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Image, Card } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

import RoseImage from './images/roseimage.png';
import LavenderImage from './images/lavenderplant.png';
import CeramicPotImage from './images/ceramicpot.jpg';
import TerracottaPotImage from './images/terracotapot.jpg';
import OrganicFertilizerImage from './images/organicfertilizer.jpg';
import LiquidFertilizerImage from './images/liquidfertilizer.jpg';
import SunflowerImage from './images/sunflower.jpg';
import TulipImage from './images/tulip.jpg';
import BlueCeramicPotImage from './images/blueceramicpot.jpg';
import BoneMealFertilizerImage from './images/bonemealfertilizer.jpg';
import RakeImage from './images/rakes.jpg';
import WateringCanImage from './images/wateringcan.jpg';
import AloeVeraPlantImage from './images/aloeveraplant.jpg';
import SnakePlantImage from './images/snakeplant.jpg';
import GreenCeramicPotImage from './images/greenceramicpot.jpg';
import WoodenPotImage from './images/woodenpot.jpg';
import NitrogenFertilizerImage from './images/nitrogenfertilizer.jpg';
import PrunerImage from './images/pruner.jpg';
import ShovelImage from './images/shovel.jpg';
import HangingTerracottaPotImage from './images/hangingterracotapot.jpg';
import LiquidSeaweedFertilizerImage from './images/liquidseeweedfertilizer.jpg';
import GardeningTrowelImage from './images/gardeningtrowel.jpg';
import PruningShearsImage from './images/prunning.jpg';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '2px solid #4CAF50',
    paddingBottom: '10px',
  },
  productList: {
    listStyleType: 'none',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
  },
  productItem: {
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  productName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  productDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
  },
  productPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  cartButton: {
    marginTop: '15px',
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
      backgroundColor: '#45a049',
      borderColor: '#45a049',
    },
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  },
};

function Products() {
  const { category } = useParams();
  const [cart, setCart] = useState({});

  const products = {
    plants: [
      { id: 1, name: 'Rose Plant', description: 'Beautiful rose plant for your garden.', price: 1500, image: RoseImage },
      { id: 2, name: 'Lavender Plant', description: 'Fragrant lavender plant to enhance your garden.', price: 1200, image: LavenderImage },
      { id: 3, name: 'Sunflower Plant', description: 'Bright sunflower plant to add sunshine to your garden.', price: 1800, image: SunflowerImage },
      { id: 4, name: 'Tulip Plant', description: 'Colorful tulip plant for a vibrant garden.', price: 1600, image: TulipImage },
      { id: 5, name: 'Aloe Vera Plant', description: 'Aloe vera plant known for its healing properties.', price: 2000, image: AloeVeraPlantImage },
      { id: 6, name: 'Snake Plant', description: 'Low-maintenance snake plant perfect for indoors.', price: 2200, image: SnakePlantImage },
    ],
    pots: [
      { id: 7, name: 'Ceramic Pot', description: 'Elegant ceramic pot for your plants.', price: 1000, image: CeramicPotImage },
      { id: 8, name: 'Terracotta Pot', description: 'Traditional terracotta pot for gardening.', price: 800, image: TerracottaPotImage },
      { id: 9, name: 'Blue Ceramic Pot', description: 'Blue ceramic pot to add a pop of color to your plants.', price: 1200, image: BlueCeramicPotImage },
      { id: 10, name: 'Hanging Terracotta Pot', description: 'Hanging terracotta pot for a unique garden display.', price: 1000, image: HangingTerracottaPotImage },
      { id: 11, name: 'Green Ceramic Pot', description: 'Green ceramic pot with a classic design.', price: 1100, image: GreenCeramicPotImage },
      { id: 12, name: 'Wooden Pot', description: 'Natural wooden pot for a rustic garden look.', price: 1500, image: WoodenPotImage },
    ],
    fertilizers: [
      { id: 13, name: 'Organic Fertilizer', description: 'Natural fertilizer for healthy plants.', price: 1200, image: OrganicFertilizerImage },
      { id: 14, name: 'Liquid Fertilizer', description: 'Convenient liquid fertilizer for quick nourishment.', price: 1400, image: LiquidFertilizerImage },
      { id: 15, name: 'Bone Meal Fertilizer', description: 'Bone meal fertilizer for strong plant growth.', price: 1300, image: BoneMealFertilizerImage },
      { id: 16, name: 'Liquid Seaweed Fertilizer', description: 'Liquid seaweed fertilizer for healthy and lush plants.', price: 1400, image: LiquidSeaweedFertilizerImage },
      { id: 17, name: 'Nitrogen Fertilizer', description: 'Nitrogen-rich fertilizer for green and leafy plants.', price: 1250, image: NitrogenFertilizerImage },
    ],
    tools: [
      { id: 18, name: 'Gardening Trowel', description: 'Essential tool for planting and digging.', price: 600, image: GardeningTrowelImage },
      { id: 19, name: 'Pruning Shears', description: 'Sharp shears for trimming and pruning.', price: 800, image: PruningShearsImage },
      { id: 20, name: 'Rake', description: 'Rake for cleaning up leaves and debris.', price: 900, image: RakeImage },
      { id: 21, name: 'Watering Can', description: 'Watering can for easy and efficient watering.', price: 750, image: WateringCanImage },
      { id: 22, name: 'Pruner', description: 'Pruner for precise and clean cuts.', price: 1000, image: PrunerImage },
      { id: 23, name: 'Shovel', description: 'Shovel for digging and transferring soil.', price: 850, image: ShovelImage },
    ],
  };

  const productList = products[category] || [];

  const addToCart = (productId, quantity) => {
    setCart({
      ...cart,
      [productId]: (cart[productId] || 0) + quantity,
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Products</h1>
      <ul style={styles.productList}>
        {productList.map((product) => (
          <li key={product.id} style={styles.productItem}>
            <Card>
              <Image src={product.image} alt={product.name} style={styles.productImage} />
              <Card.Body>
                <Card.Title style={styles.productName}>{product.name}</Card.Title>
                <Card.Text style={styles.productDescription}>{product.description}</Card.Text>
                <Card.Text style={styles.productPrice}>Price: Rs {product.price}</Card.Text>
                <Form.Group controlId={`quantity-${product.id}`}>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control as="select">
                    {[...Array(10)].map((_, index) => (
                      <option key={index}>{index + 1}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="success"
                  style={styles.cartButton}
                  onClick={() => addToCart(product.id, 1)}
                >
                  <Cart size={20} />
                  <span className="ms-2">Add to Cart</span>
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;






