import { CartButton, Offcanvas } from "../../common";
import { Link } from "react-router-dom";
import { categories, logo_brand, IconMenu2, IconSearch, styles } from './assets.js';
import { useToggle } from '../../../hooks/useToggle.js';
import { classList } from "../../../utils/classList.js";

const Header = () => {
  const { isVisible, closeVisibility, openVisibility } = useToggle(false);

  return (
    <header>
      <div className={classList(["container", styles.headerContent])}>
        <div className={styles.brandContainer}>
          <Link to={"/"} className={styles.brandLink}>
            <img className="imgResponsive" src={logo_brand} width={200} height={40} alt="imagen del logo" />
          </Link>
        </div>
        <div className={styles.searchbarContainer}>
          <form action="" className={styles.searchForm}>
            <div className='inputGroup'>
              <input type="search" name="search_product" id="search_product" className="inputCommon" placeholder="Ingresa tu busqueda..."/>
              <button type="submit" className='buttonPrimary'><IconSearch size={20}/></button>
            </div>
          </form>
        </div>
        <nav>
          <div className={styles.mobileOffcanvas}>
            <button className='buttonIcon' type='button' onClick={openVisibility}>
              <IconMenu2 fontSize={20}/>
            </button>
            <Offcanvas isVisible={isVisible} closeVisibility={closeVisibility} backdrop={true} placement={"end"}/>
          </div>
          <ul className={classList(["categoriesContainer", styles.categoriesContainer])}>
            {categories.map((category, index) => (
              <li key={index} className="categoryItem">
                <Link to={`/category/${category.id}`} className="linkPrimary">
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={classList(["cartButtonContainer", styles.cartButtonContainer])}>
            <CartButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;