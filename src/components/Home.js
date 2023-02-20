import React from "react";

export default function Home() {
  const productList = [
    {
      id: 1,
      name: "I Phone",
      price: 120000,
      imgSrc:
        "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
    },
    {
      id: 2,
      name: "Mac Book Pro",
      price: 1200000,
      imgSrc:
        "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
    },
    {
      id: 3,
      name: "Air Pod",
      price: 12000,
      imgSrc:
        "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
    },
  ];

  const addToCartHandler = (options) => {
    console.log(options);
  };

  return (
    <div className="home">
      {productList.map((i) => {
        return (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        );
      })}
    </div>
  );
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <img width="280px" src={imgSrc} alt="img" />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add To Cart
      </button>
    </div>
  );
};
