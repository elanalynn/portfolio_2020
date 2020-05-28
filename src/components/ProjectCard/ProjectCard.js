import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./index.scss"

export const ProjectCard = ({
  children,
  className,
  date,
  id,
  image,
  title,
  to = "",
}) => (
  <Link to={to} className={`project-card ${className}`}>
    <img src={image} alt={image} />
    <div id={id} className="text">
      <h2>{title}</h2>
      {children}
      <p className="cta">Explore</p>
    </div>
  </Link>
)

ProjectCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string,
}

ProjectCard.defaultProps = {
  to: "",
}
