
import Head from 'next/head'
import PageHero from '../components/PageHero';


const Services = () => {
    <Head>
        <title>Services</title>
        <meta name='keywords' content='Services' />
    </Head>
    return (
        <>
            <PageHero title='Services' />
            <div className='container page'>
                <h2 className='page-title hidden-desktop'>House of Leevean</h2>
            </div>
        </>
    )
}

export default Services;