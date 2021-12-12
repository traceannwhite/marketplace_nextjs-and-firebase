import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import Link from "next/link";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Items In Your Cart</h1>
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <Image
            src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1639168597/pngkey.com-empty-basket-png-3654131_gpvxbi.png"
            className="image"
            alt="empty cart"
            width="800px"
            height="500px"
          />
          <h2>Uh oh, your cart is empty!</h2>
          <Link href="/shop">
            <a>
              <button className={styles.shopbtn}>Shop Now</button>
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {cart.map((item) => (
            <div key={item._id} className={styles.card}>
              <div>
                <p>{item.seller}</p>
              </div>
              <div className={styles.details}>
                <div className={styles.image}>
                  <Image src={item.image} alt="" height="100" width="100" />
                </div>
                <p>{item.title}</p>
                <p className={styles.quantity}>{item.quantity}</p>
                <p className={styles.price}>$ {item.price}</p>
                {/* Want to add ".toFixed(2) here, but not workign right */}
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.button}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
                <button
                  className={styles.button}
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <button
                  className={styles.button}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
                <p>Total: $ {item.quantity * item.price}</p>
              </div>
            </div>
          ))}
          <div className={styles.checkout}>
            <div className={styles.total}>
              <h3>Items Total: </h3>
              <h3>${getTotalPrice().toFixed(2)}</h3>
            </div>
            <form>
              <input type="text" placeholder="Add promocode" />
              <button>
                <span>Apply</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
