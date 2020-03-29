import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./index.scss"

export const ArtCard = ({
  children,
  className,
  date,
  id,
  image,
  title,
  to,
}) => (
  <Link to={to} className={`art-card ${className}`}>
    <div id={id} className="parent">
      <img
        className="child"
        src={`https://elanalynn-assets.s3-us-west-1.amazonaws.com/${image}.jpg`}
        alt={image}
      />
      {children}
    </div>
  </Link>
)

ArtCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string,
}

ArtCard.defaultProps = {
  to: "",
}
