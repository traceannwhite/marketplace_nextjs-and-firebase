// import { useState, useEffect } from "react";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { db } from "../firebase";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* {products.map((product) => ( */}
      <div key={product.id}>
        <Link href={`/product/${product.id}`}>
          <a>
            <div className={styles.card}>
              <img src={product.image} alt="product" className={styles.image} />
              <div className={styles.text}>
                <h4 className={styles.title}>{product.title}</h4>
                <h5 className={styles.seller}>{product.seller}</h5>
                <p>$ {product.price}</p>
              </div>
            </div>
          </a>
        </Link>
        <div className={styles.buttonscontainer}>
          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.button}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default ProductCard;
