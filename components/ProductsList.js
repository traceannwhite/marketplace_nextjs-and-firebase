import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "../components/ProductCard";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const collectionRef = collection(db, "products");

      const q = query(collectionRef, orderBy("timestamp", "title"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setProducts(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            timestamp: doc.data().timestamp?.toDate().getTime(),
          }))
        );
      });
      return unsubscribe;
    }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
