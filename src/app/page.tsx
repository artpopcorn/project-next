export default function Home() {
  return (
    <div className="container">
      <div className="product_block">
        <div className="product_item">
          <div className="product_item_img">
            <img src="/p1.jpg" alt="" />
          </div>

          <div className="product_item_info">
            <div className="product_item_title">Ботинки серые на высокой платформе 123r</div>
            <div className="product_item_price">6 800 Р</div>
          </div>

          <div className="product_button">В корзину</div>
        </div>

        <div className="product_item">
          <div className="product_item_img">
            <img src="/p2.jpg" alt="" />
          </div>

          <div className="product_item_info">
            <div className="product_item_title">Куртка</div>
            <div className="product_item_price">12 200 Р</div>
          </div>

          <div className="product_button">В корзину</div>
        </div>

        <div className="product_item">
          <div className="product_item_img">
            <img src="/p3.jpg" alt="" />
          </div>

          <div className="product_item_info">
            <div className="product_item_title">Рюкзак</div>
            <div className="product_item_price">5 300 Р</div>
          </div>

          <div className="product_button">В корзину</div>
        </div>
      </div>
    </div>
  );
}
