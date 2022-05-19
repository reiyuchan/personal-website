import type { BodyProps } from './data';
import styles from '/styles/Body.module.css';

const SkillLs = (props: BodyProps) => {
    return (
        <div>
            <main className={styles.container}>
                <h2 className={styles.headings}>{props.head1}</h2>
                <ul style={{ width: '100%', padding: '2px' }}>
                    <li className={styles.paragraphs}>{props.p1}</li>
                    <li className={styles.paragraphs}>{props.p2}</li>
                    <li className={styles.paragraphs}>{props.p3}</li>
                    <li className={styles.paragraphs}>{props.p4}</li>
                    <li className={styles.paragraphs}>{props.p5}</li>
                    <li className={styles.paragraphs}>{props.p6}</li>
                    <li className={styles.paragraphs}>{props.p7}</li>
                </ul>
            </main>
        </div>
    )
}

export default SkillLs