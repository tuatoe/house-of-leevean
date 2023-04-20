
import Head from 'next/head'
import PageHero from '../components/PageHero';


const Gallery = () => {
    <Head>
        <title>Gallery</title>
        <meta name='keywords' content='Gallery' />
    </Head>
    return (
        <>
            <PageHero title='Gallery' />
            <div className='container page'>
                <h2 className='page-title hidden-desktop'>House of Leevean</h2>
            </div>
        </>
    )
}

export default Gallery;