import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import githubLogoLight from '/public/GitHub-Mark-Light-64px.png';

const hideAtBottom = () => {
}

const Footer = () => {
    useEffect(() => {
    })
    return (
        <div>
            <footer style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: 'brown', padding: '5px', userSelect: 'none' }}>
                <a style={{ display: 'block', width: '2.5rem', float: 'right', marginRight: '1.5rem' }} href="https://github.com/reiyuchan" target={'_blank'} rel="noreferrer">
                    <Image id='logo' src={githubLogoLight} alt='github page' />
                </a>
            </footer>
        </div>
    )
}

export default Footer;