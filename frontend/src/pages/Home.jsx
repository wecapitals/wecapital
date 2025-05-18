import InterestCalculator from "../components/InterestCalculation";
import HeroImage from "../components/HeroImage";
import NewsSlider from "../components/NewsSlider";
import ProductCardSlider from "../components/ProductCardSlider";
import NewsImages1 from "./../img/NewsImages1.jpg";
import "./../assets/css/home.css"

const products = [
  { image: NewsImages1, title: "កម្ចីរថយន្ត", subtitle: "អត្រាការប្រាក់ 0%" },
  {
    image: NewsImages1,
    title: "កម្ចីរថយន្ត",
    subtitle: "បង់រំលស់គ្រឿងអេឡិចត្រូនិច",
  },
  { image: NewsImages1, title: "កម្ចីររថយន្ត", subtitle: "រថយន្តថ្មី 0%" },
  { image: NewsImages1, title: "កម្ចីរថយន្ត", subtitle: "គ្រឿងបញ្ចុះតម្លៃ" },
];
const Home = () => {
  return (
    <>
      <div className="position-relative">
        <HeroImage />
      </div>
      <div className="container main-container">
        <div className="row">
          <div
            className="col-md-6  text-white d-flex align-items-center justify-content-center news-slider"
            style={{ width: "60%" }}
          >
            <NewsSlider />
          </div>
          <div className="col-md-6 text-white productcard-slider" style={{ width: "40%",paddingTop:"20px" }}>
            <div className="d-flex flex-column ">
              <h4 className="text-secondary mb-3">ព័ត៌មាននិងដំណឹង</h4>
              <div className="d-flex justify-content-center flex-wrap">
                {products.map((product, index) => (
                  <ProductCardSlider
                    key={index}
                    image={product.image}
                    title={product.title}
                    subtitle={product.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p>ទំនាក់ទំនងតាមបណ្តាញសង្គម  </p>
      </div>
    </>
  );
};

export default Home;
