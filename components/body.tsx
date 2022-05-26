import type { BodyProps } from '../types/data';
import styles from '/styles/Body.module.css';

const Body = (props: BodyProps) => {
    return (
        <div>
            <main className={styles.container}>
                <h2 className={styles.headings}>{props.head1}</h2>
                <p className={styles.paragraphs}>{props.p1}</p>
                <h2 className={styles.headings}>{props.head2}</h2>
                <p className={styles.paragraphs}>{props.p2}</p>
                <p className={styles.paragraphs}>{props.p3}</p>
            </main>
        </div>
    )
}

export default Body;