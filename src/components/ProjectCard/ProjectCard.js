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
  to,
}) => (
  <Link to={to} className={`project-card ${className}`}>
    <img
      src={`https://elanalynn-assets.s3-us-west-1.amazonaws.com/happy-dog.jpg`}
      alt={image}
    />
    <div id={id} className="text">
      {children}
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
