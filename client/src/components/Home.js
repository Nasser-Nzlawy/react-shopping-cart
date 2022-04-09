import React from 'react'

const Home = () => {
  return (
    <div>
   
<div>
  {/* ========================= SECTION MAIN ========================= */}
  <section className="section-main bg padding-y">
    <div className="container">
      <div className="row">
        <aside className="col-md-3">
          <nav className="card">
            <ul className="menu-category">
              <li><a href="#">Best clothes</a></li>
              <li><a href="#">Automobiles</a></li>
              <li><a href="#">Home interior</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Digital goods</a></li>
              <li className="has-submenu"><a href="#">More items</a>
                <ul className="submenu">
                  <li><a href="#">Submenu name</a></li>
                  <li><a href="#">Great submenu</a></li>
                  <li><a href="#">Another menu</a></li>
                  <li><a href="#">Some others</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside> {/* col.// */}
        <div className="col-md-9">
          <article className="banner-wrap">
            <img src="assets/images/banners/2.jpg" className="w-100 rounded" />
          </article>
        </div> {/* col.// */}
      </div> {/* row.// */}
    </div> {/* container //  */}
  </section>
  {/* ========================= SECTION MAIN END// ========================= */}
  {/* ========================= SECTION  ========================= */}
  <section className="section-name padding-y-sm">
    <div className="container">
      <header className="section-heading">
        <a href="#" className="btn btn-outline-primary float-right">See all</a>
        <h3 className="section-title">Popular products</h3>
      </header>{/* sect-heading */}
      <div className="row">
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Just another product name</a>
              <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Some item name here</a>
              <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Great product name here</a>
              <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Just another product name</a>
              <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Just another product name</a>
              <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Some item name here</a>
              <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Great product name here</a>
              <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
        <div className="col-md-3">
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
            <figcaption className="info-wrap">
              <a href="#" className="title">Just another product name</a>
              <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div> {/* col.// */}
      </div> {/* row.// */}
    </div>{/* container // */}
  </section>
  {/* ========================= SECTION  END// ========================= */}
  {/* ========================= SECTION  ========================= */}
  <section className="section-name padding-y bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Download app demo text</h3>
          <p>Get an amazing app  to make Your life easy</p>
        </div>
        <div className="col-md-6 text-md-right">
          <a href="#"><img src="assets/images/misc/appstore.png" height={40} /></a>
          <a href="#"><img src="assets/images/misc/appstore.png" height={40} /></a>
        </div>
      </div> {/* row.// */}
    </div>{/* container // */}
  </section>
  {/* ========================= SECTION  END// ======================= */}
</div>

   
    </div>
  )
}

export default Home
