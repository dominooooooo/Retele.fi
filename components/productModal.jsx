import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ProductCard from "@/components/productCard";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProductClick = async (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <>
      <ProductCard product={productData1} price={priceData1} onProductClick={handleProductClick} />
      <ProductCard product={productData2} price={priceData2} onProductClick={handleProductClick} />

      {selectedProduct && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>{selectedProduct.name}</ModalHeader>
            <ModalBody>
              {/* Render product details here using selectedProduct */}
              <p>{selectedProduct.description}</p>
              <p>{selectedProduct.otherInfo}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleSubscription}>
                Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
