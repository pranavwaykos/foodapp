import React from "react";
import { urlFor } from "../lib/client";
// import pizza from "../sanity/schemas/pizza";
import css from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Menu({ pizzas }) {
  console.log(pizzas);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu that always</span>
        <span>Make you fall in Love</span>
      </div>


      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
                <Link href={`./pizza/${pizza.slug.current}`}>
              <div className={css.ImageWrapper}>
                <Image
                  loader={() => src}
                  src={src}
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              </Link>
              <span>{pizza.name}</span>
              <span>{pizza.price[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
