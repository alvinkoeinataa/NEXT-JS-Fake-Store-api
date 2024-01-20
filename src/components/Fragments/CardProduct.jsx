/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Children } from "react";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import Button from "../elements/button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">{children}</div>;
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link href={`/products/${id}`}>
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <div>
        <h5 className="text-xl font-semibold tracking-tight text-white">{name.length <= 20 ? name : `${name.substring(0, 20)}...`}</h5>
        <p className="text-s text-white">{children && children.length > 100 ? `${children.substring(0, 100)}...` : children}</p>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">$ {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      <Button className="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
