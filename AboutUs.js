import React from 'react';
import { FaLeaf, FaSeedling } from 'react-icons/fa'; // Importing leaf and seedling icons from react-icons library

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("/images/img0.jpg")', // Corrected background image path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3rem',
    color: '#28a745',
    marginBottom: '30px',
    borderBottom: '3px solid #28a745',
    paddingBottom: '15px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '25px',
    textAlign: 'justify',
    color: '#555',
  },
  strong: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  leafIcon: {
    marginRight: '15px',
    fontSize: '2.5rem',
    color: '#28a745',
    verticalAlign: 'middle',
  },
  seedlingIcon: {
    marginRight: '15px',
    fontSize: '2.5rem',
    color: '#28a745',
    verticalAlign: 'middle',
  },
};

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>
        <FaSeedling style={styles.seedlingIcon} />
        Welcome to <strong style={styles.strong}>GreenPlant</strong> - your ultimate destination for all things gardening and agriculture in Lahore!
        Dive into a world where nature meets innovation, and discover a wide range of premium quality products and services designed to transform your gardening and agriculture experience.
      </p>
      <p style={styles.paragraph}>
        <FaLeaf style={styles.leafIcon} />
        At <strong style={styles.strong}>GreenPlant</strong>, we are passionate about helping our customers cultivate vibrant gardens and flourishing crops.
        Whether you're a gardening enthusiast or a professional farmer, we've got you covered with our extensive selection of plants, pots, fertilizers, tools, and much more.
      </p>
      <p style={styles.paragraph}>
        <FaSeedling style={styles.seedlingIcon} />
        Our dedicated team of experts is committed to providing you with personalized guidance and support to help you nurture your green spaces and achieve outstanding results.
        With <strong style={styles.strong}>GreenPlant</strong>, you're not just buying products; you're investing in a greener, healthier future.
      </p>
      <p style={styles.paragraph}>
        <FaLeaf style={styles.leafIcon} />
        Join us on this exciting journey and let <strong style={styles.strong}>GreenPlant</strong> be your trusted partner in creating beautiful gardens and bountiful harvests.
        Experience the joy of gardening and agriculture like never before with <strong style={styles.strong}>GreenPlant</strong>!
      </p>
    </div>
  );
}

export default AboutUs;
