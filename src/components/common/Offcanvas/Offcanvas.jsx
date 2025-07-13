
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { CartButton } from "../";
import { IconX, categories } from "./assets.js";
import { classList } from '../../../utils/classList.js';
import { images } from '../../../utils/assets.js';

const Offcanvas = ({isVisible = false, closeVisibility, backdrop = false, placement = 'end'}) => {
   return (
      <div
         className={classList([styles.offcanvasContainer, styles[`offcanvas-${placement}`], (backdrop ? styles['offcanvas-backdrop'] : false), (isVisible ? styles.offcanvasVisible : styles.offcanvasInvisible)])}
         {...(backdrop ? { onClick: closeVisibility } : {})}
      >
         <div className={classList([styles.offcanvasContent, (isVisible ? styles.offcanvasVisible : styles.offcanvasInvisible)])} onClick={(e) => e.stopPropagation()}>
            <div className={styles.offcanvasHeader}>
               <button className={classList([styles.offcanvasCloseButton, 'buttonIcon'])} type="button" onClick={closeVisibility}>
                  <IconX fontSize={20}/>
               </button>
               <div className={styles.offcanvasImageContainer}>
                  <img className='imgResponsive' src={images("logo-brand.png")} width={200} height={40} alt="imagen del logo"/>
               </div>
            </div>
            <div className={styles.offcanvasBody}>
               <h4 className={classList([styles.subtitle, styles.separator])}>CATEGORIES</h4>
               <ul className={classList([styles.categoriesContainer, 'categoriesContainer'])}>
                  {categories.map((category, index) => (
                     <li key={index} className="categoryItem">
                        <Link to={`/category/${category.id}`} className="linkPrimary">
                        {category.label}
                        </Link>
                     </li>
                  ))}
               </ul>
               <h4 className={classList([styles.subtitle, styles.separator])}>COMPRAS</h4>
               <div className='cartContainer'><CartButton /></div>
            </div>
         </div>
      </div>
   );
};

export default Offcanvas;
