import React, { useEffect, useState } from "react";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";
const Header = () => {
  // const state = useStore((state)=>state)
  // console.log(state);
  const [Order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);
  const item = useStore((state) => state.cart.pizzas.length);
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} width={50} height={50} alt="" />
        <span>Fodu</span>
      </div>

      <ul className={css.menu}>
        <li>
          <Link href="../">Menu</Link>
        </li>
        <li>Home</li>
        <li>Contact</li>
      </ul>

      <div className={css.rightside}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>{item}</div>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              {Order != "" && <div className={css.bagde}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
