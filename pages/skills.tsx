import type { NextPage } from 'next';
import Head from 'next/head';
import { skillsProps } from '../components/data';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import SkillLs from '../components/skillsls';

const Skills: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portofolio - Skills</title>
            </Head>
            <Navbar />
            <SkillLs {...skillsProps} />
            <Footer />
        </div>
    )
}

export default Skills;