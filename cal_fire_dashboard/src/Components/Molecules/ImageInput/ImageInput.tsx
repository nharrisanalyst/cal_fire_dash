import styles from './ImageInput.module.scss'
import TextZipCode from '../TextZipCode/TextZipcode';

const ImageInput =()=>(
    <div className={styles.imageinput}>
        <TextZipCode />
        <picture className={styles.picture}>
            <source media='(max-width: 10000px)' srcSet='/images/rainbow_ladies.jpg' />
             <img className={styles.image} src="/images/rainbow_ladies.jpg" alt="painted ladies" />
        </picture>
    </div>
)

export default ImageInput;