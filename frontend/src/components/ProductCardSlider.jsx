import "./../assets/css/productcardslider.css"; // Custom styles

const ProductCardSlider = ({ image, title, subtitle }) => {
  return (
    <div className="product-card-wrapper">
      <div className="card text-white pb-3 px-2 pt-0 product-card">
        <div className="image-container">
          <img src={image} className="card-img" alt="product" />
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-end bg-overlay px-2">
          <div className="info-container bg-primary p-1 ">
            <h6 className="card-title px-3 pt-1 mb-0">{title}</h6>
            <p className="card-text px-4 pt-0 pb-1 mt-0">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSlider;