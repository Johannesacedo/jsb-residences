import styles from '../../styles/Home.module.css'
import cls from 'classnames'
import Image from 'next/image'
import Head from 'next/head'
const Sitemap = () =>{
    return(
        <div>
            <Head>
                <title> JSB Residences</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/static/logo.ico" />
            </Head>
            <br/><br/><br/><br/><br/>
            <div className='container'>
                <div className={styles.introSingle}>
                    <div className="col-md-12">
                        <div className={cls("bg-warning","bg-gradient","bg-opacity-25",styles.titleSingleBox)}>
                        <h1 className={styles.titleSingle}>Sitemap</h1>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
            <div className="container-fluid bg-light p-5">
             <div className='justify-content-center text-center'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Image 
                        src='/static/sitemap.png'
                        alt='...'
                        height={500}
                        width={500}
                        />
                    </div>
                    <div className='col-md-3'>
                       <Image 
                        src='/static/sitemap_1.png'
                        alt='...'
                        height={500}
                        width={500}
                        />
                    </div>
                    <div className='col-md-3'>
                       <Image 
                        src='/static/sitemap_2.png'
                        alt='...'
                        height={500}
                        width={500}
                        />
                    </div>
                    <div className='col-md-3'>
                       <Image 
                        src='/static/sitemap_3.png'
                        alt='...'
                        height={500}
                        width={500}
                        />
                    </div>
                </div>
             </div>
            </div>
            <br/><br/><br/><br/><br/>
        </div>
    )
}

export default Sitemap