import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import { projectsProps } from '../components/data';
import ProjectsLs from '../components/projectsls';
import Footer from '../components/footer';

const Projects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portofolio - Projects</title>
                <meta name='description' content='Resume Page/Portofolio App' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <ProjectsLs {...projectsProps} />
            <Footer />
        </div>
    )
}

export default Projects;