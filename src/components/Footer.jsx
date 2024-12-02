import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <ul className="flex flex-row justify-center gap-12 text-sm items-center uppercase py-10">
      <Link to="/">Impressum</Link>
      <Link to="/" className="font-extrabold text-2xl text-white">
        HG
      </Link>
      <Link to="/">Datenschutz</Link>
    </ul>
  );
}

export default Footer;
