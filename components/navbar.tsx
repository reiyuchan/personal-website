import styles from '/styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <ul>
                    <Link href='/'>
                        <li className={styles.list}>Home</li>
                    </Link>
                    <Link href='/projects'>
                        <li className={styles.list}>Projects</li>
                    </Link>
                    <Link href='/skills'>
                        <li className={styles.list}>Skills</li>
                    </Link>
                </ul>
                <button id='switcher' className={styles['theme-switcher']}>
                    <img style={{ width: '1.5rem' }} id='btnImg' src="/moon.svg" alt="moon" />
                </button>
            </nav>
        </div>
    )
}

export default Navbar;