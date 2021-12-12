import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import styles from "../styles/Shop.module.css";
import ProductsList from "../components/ProductsList";

const Shop = () => {
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
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <ul className={styles.cards}>
        {products &&
          products.map((product) => {
            return (
              <li className={styles.card} key={product._id}>
                <ProductsList key={product.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Shop;
