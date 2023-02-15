import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductcardStore = (props) => {
  let location = useLocation();
  console.log(location);
  const { grid } = props;
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
  return (
    <>
      <div
        className={`${
          location.pathname === "/ourstore" ? ` gr-${grid}` : " col-3"
        }`}
      >
        <Link
          to=":id"
          className="card cardWidth product-card position-relative"
        >
          <div className="wish-list position-absolute ">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <div className="productImage text-center">
            <img
              src="images/watch.jpg"
              className="image-fluid mx-auto d-block"
              alt="watch"
            />
          </div>
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/ourstore" ? ` gr-${grid}` : " col-4 "
        }`}
      >
        <Link
          to="/ourstore/:id"
          className="card cardWidth product-card position-relative"
        >
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <div className="productImage">
            <img src="images/watch.jpg" className="" alt="..." />
          </div>
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/ourstore" ? ` gr-${grid}` : " col-4 "
        }`}
      >
        <Link
          to="/ourstore/:id"
          className="card cardWidth product-card position-relative"
        >
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <div className="productImage">
            <img src="images/watch.jpg" className="" alt="..." />
          </div>
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/ourstore" ? ` gr-${grid}` : " col-4 "
        }`}
      >
        <Link
          to="/ourstore/:id"
          className="card cardWidth product-card position-relative"
        >
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <div className="productImage">
            <img src="images/watch.jpg" className="" alt="..." />
          </div>
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductcardStore;
