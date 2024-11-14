import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="icon"
    href="1000_F_797707390_fvfMKlX5WoPWS2gei2K1UQl1IrQMpvvc.jpg"
  />
  <link rel="stylesheet" href="index2.css" />
  <title>Stylish Foot.com</title>
  <nav id="nav">
    <div className="navTop">
      <div className="navItem">
        <div className="sflogo">
          <h1>  <img src={`${process.env.PUBLIC_URL}/SF logo.png`} alt="SF Logo" />
          </h1>
        </div>
      </div>
      <div className="navItem">
        <div className="search">
          <input type="text" placeholder="Search..." className="searchInput" />
          <img
            src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/search.png"
            width={20}
            height={20}
            alt=""
            className="searchIcon"
          />
        </div>
      </div>
      <div className="navItem">
        <span className="limitedOffer">Limited Offer!</span>
      </div>
    </div>
    <div className="navBottom">
      <h3 className="menuItem">AIR FORCE</h3>
      <h3 className="menuItem">JORDAN</h3>
      <h3 className="menuItem">BLAZER</h3>
      <h3 className="menuItem">CRATER</h3>
      <h3 className="menuItem">HIPPIE</h3>
    </div>
  </nav>
  <div className="slider">
    <div className="sliderWrapper">
      <div className="sliderItem">
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/air.png"
          alt=""
          className="sliderImg"
        />
        <div className="sliderBg" />
        <h1 className="sliderTitle">
          AIR FORCE
          <br /> NEW
          <br />
          SEASON
        </h1>
        <h2 className="sliderPrice">₹ 9600</h2>
        <a href="#product">
          <button className="buyButton">BUY NOW!</button>
        </a>
      </div>
      <div className="sliderItem">
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/jordan.png"
          alt=""
          className="sliderImg"
        />
        <div className="sliderBg" />
        <h1 className="sliderTitle">
          AIR JORDAN
          <br /> NEW
          <br />
          SEASON
        </h1>
        <h2 className="sliderPrice">$150</h2>
        <a href="#product">
          <button className="buyButton">BUY NOW!</button>
        </a>
      </div>
      <div className="sliderItem">
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/blazer.png"
          alt=""
          className="sliderImg"
        />
        <div className="sliderBg" />
        <h1 className="sliderTitle">
          BLAZER
          <br /> NEW
          <br />
          SEASON
        </h1>
        <h2 className="sliderPrice">$110</h2>
        <a href="#product">
          <button className="buyButton">BUY NOW!</button>
        </a>
      </div>
      <div className="sliderItem">
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/crater.png"
          alt=""
          className="sliderImg"
        />
        <div className="sliderBg" />
        <h1 className="sliderTitle">
          CRATER
          <br /> NEW
          <br />
          SEASON
        </h1>
        <h2 className="sliderPrice">$129</h2>
        <a href="#product">
          <button className="buyButton">BUY NOW!</button>
        </a>
      </div>
      <div className="sliderItem">
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/hippie.png"
          alt=""
          className="sliderImg"
        />
        <div className="sliderBg" />
        <h1 className="sliderTitle">
          HIPPIE
          <br /> NEW
          <br />
          SEASON
        </h1>
        <h2 className="sliderPrice">$99</h2>
        <a href="#product">
          <button className="buyButton">BUY NOW!</button>
        </a>
      </div>
    </div>
  </div>
  <div className="features">
    <div className="feature">
      <img
        src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/shipping.png"
        className="featureIcon"
      />
      <span className="featureTitle">FREE SHIPPING</span>
      <span className="featureDesc">
        Free worldwide shipping on all orders.
      </span>
    </div>
    <div className="feature">
      <img
        src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/return.png"
        className="featureIcon"
      />
      <span className="featureTitle">30 DAYS RETURN</span>
      <span className="featureDesc">
        No question return and refund in 14 days
      </span>
    </div>
    <div className="feature">
      <img
        src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/gift.png"
        className="featureIcon"
      />
      <span className="featureTitle">GIFT CARDS</span>
      <span className="featureDesc">
        Buy gift cards and use coupon codes easily.
      </span>
    </div>
    <div className="feature">
      <img
        src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/contact.png"
        className="featureIcon"
      />
      <br />
      <div style={{ fontWeight: "bolder" }}>CONTACT US !</div>
      <span className="featureDesc">
        Keep in touch via email and support system
      </span>
    </div>
  </div>
  <div className="product" id="product">
    <img
      src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/air.png"
      alt=""
      className="productImg"
    />
    <div className="productDetails">
      <h1 className="productTitle">AIR FORCE</h1>
      <h2 className="productPrice">$199</h2>
      <p className="productDesc">
        From tough stitching to pristine leather, it delivers durable style
        that's smoother than backboard glass. Originally designed for
        performance hoops, Nike Air cushioning delivers lasting comfort. Rubber
        outsole with pivot circles adds traction and durability.
      </p>
      <button className="btn1">&lt; PREVIOUS</button>
      <button className="btn2">NEXT&gt;</button>
      <br />
      <br />
      <div className="colors">
        <div className="color" />
        <div className="color" />
        <div className="color" />
        <div className="color" />
      </div>
      <div className="sizes">
        <div className="size">42</div>
        <div className="size">43</div>
        <div className="size">44</div>
      </div>
      <button className="productButton">BUY NOW !</button>
    </div>
    <div className="payment">
      <h1 className="payTitle">Personal Information</h1>
      <label>Name and Surname</label>
      <input type="text" placeholder="John Doe" className="payInput" />
      <label>Phone Number</label>
      <input type="text" placeholder="+1 234 5678" className="payInput" />
      <label>Address</label>
      <input
        type="text"
        placeholder="Elton St 21 22-145"
        className="payInput"
      />
      <h1 className="payTitle">Card Information</h1>
      <div className="cardIcons">
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/visa.png"
          width={40}
          alt=""
          className="cardIcon"
        />
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/master.png"
          width={40}
          alt=""
          className="cardIcon"
        />
      </div>
      <input type="password" className="payInput" placeholder="Card Number" />
      <div className="cardInfo">
        <input type="text" placeholder="mm" className="payInput sm" />
        <input type="text" placeholder="yyyy" className="payInput sm" />
        <input type="text" placeholder="cvv" className="payInput sm" />
      </div>
      <button className="payButton">Checkout !</button>
      <span className="close">X</span>
    </div>
  </div>
  <div className="gallery">
    <div className="galleryItem">
      <h1 className="galleryTitle">Be Yourself!</h1>
      <img
        src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="galleryImg"
      />
    </div>
    <div className="galleryItem">
      <img
        src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="galleryImg"
      />
      <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
    </div>
    <div className="galleryItem">
      <h1 className="galleryTitle">Just Do it!</h1>
      <img
        src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="galleryImg"
      />
    </div>
  </div>
  <div className="newSeason">
    <div className="nsItem">
      <img
        src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="nsImg"
      />
    </div>
    <div className="nsItem">
      <h3 className="nsTitleSm">WINTER NEW ARRIVALS</h3>
      <h1 className="nsTitle">New Season</h1>
      <h1 className="nsTitle">New Collection</h1>
      <a href="#nav">
        <button className="nsButton">CHOOSE YOUR STYLE</button>
      </a>
    </div>
    <div className="nsItem">
      <img
        src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="nsImg"
      />
    </div>
  </div>
  <footer>
    <div className="footerLeft">
      <div className="footerMenu">
        <h1 className="fMenuTitle">About Us</h1>
        <ul className="fList">
          <li className="fListItem">Company</li>
          <li className="fListItem">Contact</li>
          <li className="fListItem">Carrers</li>
          <li className="fListItem">Affiliates</li>
          <li className="fListItem">Stores</li>
        </ul>
      </div>
      <div className="footerMenu">
        <h1 className="fMenuTitle">Useful Links</h1>
        <ul className="fList">
          <li className="fListItem">Support</li>
          <li className="fListItem">Refund</li>
          <li className="fListItem">FAQ</li>
          <li className="fListItem">Feedback</li>
          <li className="fListItem">Stores</li>
        </ul>
      </div>
      <div className="footerMenu">
        <h1 className="fMenuTitle">Products</h1>
        <ul className="fList">
          <li className="fListItem">Air Force </li>
          <li className="fListItem">Air Jordan</li>
          <li className="fListItem">Blazer</li>
          <li className="fListItem">Craters</li>
          <li className="fListItem">Hippie</li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="footerRight">
      <div className="footerRightMenu">
        <h1 className="fMenuTitle">Subscribe to our Newsletter</h1>
        <div className="fMail">
          <input type="text" placeholder="your@email.com" className="fInput" />
          <button className="fButton">Join!</button>
        </div>
      </div>
      <div className="footerRightMenu">
        <h1 className="fMenuTitle">Follow Us</h1>
        <div className="fIcons">
          <a href="https://www.instagram.com/direct/t/106163400774394/" />
        </div>
      </div>
    </div>
  </footer>
  <button className="ss">SLIDE UP</button>
</>

  );
}

export default App;
