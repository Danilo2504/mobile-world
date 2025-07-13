import { classList } from '../../../utils/classList';
import { getTypeFromEnum } from '../../../utils/enums';
import styles from './styles.module.css';

const separatorDictionary = {
   HEADER: styles.separatorHeader,
   FOOTER: styles.separatorFooter,
   BOTH: styles.separatorBody,
   NONE: ''
};

const Card = ({headerTitle, toolbar, textFooter, separator = 'NONE', responsiveClass, children}) => {
   const hasHeader = headerTitle || toolbar;
   const hasFooter = textFooter !== undefined || textFooter !== null;
   const hasSeparator = getTypeFromEnum({
      value: separator,
      enumObj: separatorDictionary,
      defaultKeyù: separatorDictionary.NONE,
      trueKey: separatorDictionary.BOTH
   });

   return (
      <div className={classList([styles.cardContainer, responsiveClass, hasSeparator])}>
         {hasHeader && (
            <div className={classList([styles.cardHeader])}>
               <div className={styles.cardTitle}>
                  {headerTitle && <h4>{headerTitle}</h4>}
               </div>
               {toolbar && (
                  <div className={styles.cardToolbar}>
                     {toolbar}
                  </div>
               )}
            </div>
         )}
         <div className={classList([styles.cardBody])}>
            {children}
         </div>
         {hasFooter && (
            <div className={classList([styles.cardFooter])}>
               {textFooter && <p>{textFooter}</p>}
            </div>
         )}
      </div>
   );
};

export default Card;
