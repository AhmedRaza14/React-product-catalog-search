import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Dell Laptop', price: 100000, description: 'High-performance laptop for professionals' },
    { id: 2, name: 'HP Desktop', price: 20000, description: 'Affordable desktop for everyday use' },
    { id: 3, name: 'MacBook', price: 30000, description: 'Premium MacBook for creative work' },
    { id: 4, name: 'MacBook Air', price: 94000, description: 'Lightweight and powerful laptop' },
    { id: 5, name: 'ThinkPad', price: 65000, description: 'Business-oriented laptop with excellent build quality' },
    { id: 6, name: 'HP Laptop', price: 110000, description: 'Versatile laptop for both work and play' },
    { id: 7, name: 'Ipad', price: 46000, description: 'Portable tablet for entertainment and productivity' },
    { id: 8, name: 'Audionic Speaker', price: 38000, description: 'High-quality speaker for immersive audio experience' },
    { id: 9, name: 'Iphone 16', price: 42000, description: 'Latest smartphone with advanced features' },
    { id: 10, name: 'Lenovo ThinkPad', price: 35000, description: 'Reliable laptop for business professionals' }
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')

  const filteredProducts = products.filter((product) => {
    if (category === "name") {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase())
  }
    if (category === "price") {
  if (!searchTerm) return true
  return product.price >= Number(searchTerm)
}
      return true
  })
  return (
    <>
      <div>
        <h1>Product List</h1>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
        >
        <input
        style={{
          width:'220px',
          height:'23px',
          borderRadius:'5px 0 0 5px',
          border:'1px solid black',
          padding:'5px',
        }}
        type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select name="filtering" id="filtering"
        style={{
          width:'70px',
          height:'34px',
          borderRadius:'0 5px 5px 0',
          border:'1px solid black',
          padding:'5px',
        }}
        
        value={category}
        onChange={(e) => setCategory(e.target.value)}

        >
          <option value="all">
            All
          </option>
          <option value="price">
            Price
          </option>
          <option value="name">
            Name
          </option>
        </select>
        </div>

        <ul
        style={{
          width: '1200px',
          // height: '900px',
          minHeight: '400px',
          // maxHeight: '900px',
          backgroundColor: '#f2eeee',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '40px',
          listStyle: 'none',
        }}
        >
          {filteredProducts.map((product) => (
            <li key={product.id}
            style={{
              width: '230px',
              margin: '13px',
              padding: '20px',
              minHeight: '200px',
              maxHeight: '250px',
              marginBottom: '26px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
              border: '1px solid black',
            }}
            >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>








      </div>
    </>
  )
}

export default App
