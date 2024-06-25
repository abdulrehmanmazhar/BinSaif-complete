import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    sale: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4002/products', {
        name: form.name,
        price: form.price,
        description: form.description,
        category: form.category,
        image: form.image,
        sale: form.sale
      }, {
        withCredentials: true // This ensures cookies are sent and received
      });
      console.log(form);
      setForm({
        name: '',
        price: '',
        description: '',
        category: '',
        image: '',
        sale: false
      });
    } catch (error) {
      console.error('There was an error posting the form data:', error);
    }
  };

  const styles = {
    body: {
      fontFamily: "'Poppins', Arial, sans-serif",
      backgroundColor: '#fff',
      color: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0
    },
    adminContainer: {
      backgroundColor: '#fff',
      border: '1px solid #000',
      borderRadius: '1rem',
      padding: '20px',
      width: '400px'
    },
    adminForm: {
      display: 'flex',
      flexDirection: 'column'
    },
    formGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px'
    },
    label: {
      flex: 1
    },
    input: {
      flex: 2,
      padding: '8px',
      marginLeft: '10px',
      border: '1px solid #000',
      borderRadius: '1rem',
      backgroundColor: '#fff',
      color: '#000',
      width: '100%',
      boxSizing: 'border-box'
    },
    textarea: {
      flex: 2,
      padding: '8px',
      marginLeft: '10px',
      border: '1px solid #000',
      borderRadius: '1rem',
      backgroundColor: '#fff',
      color: '#000',
      width: '100%',
      boxSizing: 'border-box'
    },
    // saleCheckbox: {
    //   flexDirection: 'row-reverse'
    // },
    checkboxInput: {
      marginLeft: '10px'
    },
    button: {
      padding: '10px',
      marginTop: '10px',
      border: '1px solid #000',
      borderRadius: '1rem',
      backgroundColor: '#000',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 600
    },
    buttonHover: {
      padding: '10px',
      marginTop: '10px',
      border: '1px solid #000',
      borderRadius: '1rem',
      cursor: 'pointer',
      fontWeight: 600,
      backgroundColor: '#fff',
      color: '#000'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.adminContainer}>
        <form style={styles.adminForm} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              style={styles.input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Price:</label>
            <input
              style={styles.input}
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              style={styles.textarea}
              name="description"
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category:</label>
            <input
              style={styles.input}
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Image URL:</label>
            <input
              style={styles.input}
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </div>
          <div style={{ ...styles.formGroup, ...styles.saleCheckbox }}>
            <label style={styles.label}>Sale:</label>
            <input
              style={styles.checkboxInput}
              type="checkbox"
              name="sale"
              checked={form.sale}
              onChange={handleChange}
            />
          </div>
          <button
            style={styles.button}
            // onMouseEnter={(e) => (e.target.style = styles.buttonHover)}
            // onMouseLeave={(e) => (e.target.style = styles.button)}
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
