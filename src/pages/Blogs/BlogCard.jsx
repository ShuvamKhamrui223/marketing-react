import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCard = ({
  blogid,
  title,
  image,
  category,
  authorname,
  authorimage,
  publishdate,
  className,
}) => {
  return (
    <>
      <div className={`col-lg-4 ${className}`}>
        <article>
          <div className="post-img">
            <img src={image} alt="" className="img-fluid" />
          </div>

          <p className="post-category">{category}</p>

          <h2 className="title">
            <Link to="/blogs/details">{title}</Link>
          </h2>

          <div className="d-flex align-items-center">
            <img
              src={authorimage}
              alt=""
              className="img-fluid post-author-img flex-shrink-0"
            />
            <div className="post-meta">
              <p className="post-author">{authorname}</p>
              <p className="post-date">
                <time datetime="2022-01-01">{publishdate}</time>
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
BlogCard.prototype = {
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.array,
  authorname: PropTypes.string,
  authorimage: PropTypes.string,
  publishdate: PropTypes.string,
};
export default BlogCard;
