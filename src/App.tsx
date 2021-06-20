import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import CategorySelector from './CategorySelector';

function App() {
  const categories = [
    {val: 'Shirts', label: 'Shirts'},
    {val: 'T-Shirts', label: 'T-Shirts'},
    {val: 'Tops', label: 'Tops'},
  ]

  const filters = [
    {val: '92', name: '92'},
    {val: '91', name: '91'},
  ]

  return (
    <div className="App">
      <CategorySelector categories={categories} filters={filters} 
        onChange={(val) => console.log(val)}
      />
    </div>
  );
}

export default App;
