import Navigation from "./Navigation";
import MenuListing from "./MenuListing";

function StructuralComponent() {
    return (
        <>
          <header>
               <Navigation/>
          </header>
          <section>
              <img className="main-banner" src="https://dreamisland.ru/upload/iblock/410/410b1e3433ac2ef584ee051097eb1688.jpg"/>
          </section>
          <section>
              <MenuListing/>
          </section>
            <section>
              <img className="main-banner" src="https://dreamisland.ru/upload/iblock/410/410b1e3433ac2ef584ee051097eb1688.jpg"/>
          </section>
          <footer className="footer">
              <h1>Шоколадница</h1>
          </footer>
      </>
    )
}

export default StructuralComponent;