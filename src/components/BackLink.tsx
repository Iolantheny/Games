import React from "react";
import { Link } from "gatsby";

type Props = {
  className?: string;
};

const BackLink = ({ className }: Props) => {
  return (
    <Link to="/" className={`link-back ${className}`}>
      ❮
    </Link>
  );
};

export default BackLink;
