"use client"

import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedProduct = localStorage.getItem('product');
      return savedProduct ? JSON.parse(savedProduct) : null;
    }
    return null;
  });

  useEffect(() => {
    if (product) {
      localStorage.setItem('product', JSON.stringify(product));
    }
  }, [product]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
