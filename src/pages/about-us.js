
import Head from 'next/head'
import PageHero from '../components/PageHero';


const About = () => {
    <Head>
        <title>About us</title>
        <meta name='keywords' content='About House of Leevean' />
    </Head>
    return (
        <>
            <PageHero title='About us' />
            <div className='container page'>
                <h2 className='page-title hidden-desktop'>House of Leevean</h2>
            </div>
        </>
    )
}

export default About;