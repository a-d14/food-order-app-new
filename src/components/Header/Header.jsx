import styles from './Header.module.css';
import logoImg from '../../assets/logo.jpg';

function Header() {
    return (
        <div id={styles['main-header']}>
            <div id={styles['title']}>
                <img src={logoImg} /> 
                {/* Why relative url not accessible? */}
                <h1>REACTFOOD</h1>
            </div>
            <button className={styles['text-button']}>Cart(5)</button>
        </div>
    )
}


export default Header;