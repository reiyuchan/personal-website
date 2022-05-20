import type { BodyProps } from './data';
import styles from '/styles/Body.module.css';

const ProjectsLs = (props: BodyProps) => {
    return (
        <div>
            <main className={styles.container}>
                <h2 className={styles.headings}>{props.head1}</h2>
                <ul style={{ width: '100%', padding: '2px' }}>
                    <li className={styles.paragraphs}><a className={styles.anchors} href='https://github.com/reiyuchan/CustomRP' target={'_blank'} rel='noreferrer'>{props.p3}</a></li>
                    <li className={styles.paragraphs}><a className={styles.anchors} href='https://github.com/reiyuchan/my-first-discord-bot' target={'_blank'} rel='noreferrer'>{props.p4}</a></li>
                    <li className={styles.paragraphs}><a className={styles.anchors} href='https://github.com/reiyuchan/pokedex' target={'_blank'} rel='noreferrer'>{props.p5}</a></li>
                </ul>
            </main>
        </div>
    )
}

export default ProjectsLs;