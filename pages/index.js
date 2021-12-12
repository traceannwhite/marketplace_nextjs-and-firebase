import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";

export default function Home() {
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

  const loadedContent = () => {
    return (
      <div className={styles.container}>
        <main className={styles.container}>
          <Hero />
          <section className="content">
            <h1 className={styles.title}>Products</h1>
            <ul className={styles.cards}>
              {products &&
                products.map((product) => {
                  return (
                    <li className={styles.card} key={product.id}>
                      <ProductCard key={product.id} product={product} />
                    </li>
                  );
                })}
            </ul>
          </section>
          <section className="content">
            <h1 className={styles.title}>Product Categories</h1>
            <div className={styles.small}>
              <CategoryCard
                image="/image/clothing-and-shoes.jpeg"
                name="Clothing"
              />
              <CategoryCard image="/image/home-and-living.jpeg" name="Home" />
              <CategoryCard
                image="/image/eco-friendly.jpeg"
                name="Eco-friendly"
              />
              <CategoryCard
                image="/image/Best-Body-Lotions-For-Women.jpeg"
                name="Self-care"
              />
            </div>
          </section>
        </main>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return products ? loadedContent() : loading();
}
