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
            </Head>
            <Navbar />
            <ProjectsLs {...projectsProps} />
            <Footer />
        </div>
    )
}

export default Projects;