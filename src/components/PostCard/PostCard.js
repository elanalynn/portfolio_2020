import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { postImages } from "../../assets/posts"

import "./index.scss"

export const PostCard = ({
  children,
  className,
  date,
  id,
  image,
  title,
  to,
}) => {
  const cover = postImages.find(el => el.includes(image))
  return (
    <Link to={to} className={`post-card ${className}`}>
      <div id={id} className="parent">
        <img className="child" src={cover} alt={image} />
        {children}
      </div>
    </Link>
  )
}

PostCard.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
}

PostCard.defaultProps = {
  to: "",
}
