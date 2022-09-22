import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import cls from 'classnames'
import Head from 'next/head'
const About = () =>{
    return(
        <>
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
                            <h1 className={styles.titleSingle}>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container-fluid bg-light p-5">
                        <h1 className="display-4 fw-bolder text-center">&quot;JSB Residences DISUD&quot;</h1>
                        <hr className="my-4" />
                        <div className='row'>
                            <div className='col-md-6'>
                            <p class="lead fw-bold fs-1">About the Project</p>
                            <p className='fs-2'>-is a 9,880 square meter gated house & lot development community located in Disud, Sindangan, ZN. It is the first modern contemporary homes offering properties rich in
                                character and sophisticated in their thematic appeal.
                            </p>
                            <div className='text-center'>
                                <p className='fw-bold fs-1'><u>DHSUD-9</u></p>
                                <p className='fw-bold fs-1'>DHSUD LTS NO:  REM-LS-22-013</p>
                                <p className='fw-bold fs-1'>DHSUD CR NO:  REM-CR-22-013</p>
                            </div><br/><br/>
                            <p className='fw-bold fs-4'>Target Date of Completion:12.31.2023</p>
                            <p className='fw-bold fs-4'>PROPERTY FEATURES: Carport, Living Room, Dining Room,Kitchen,3 Bedrooms,2 1/2 Bath Rooms,and Balcony</p>
                            </div>
                            <div className='col-md-6'>
                            
                            <figure class="figure">
                                <Image
                                src="/static/about_2.png"
                                className="figure-img img-fluid rounded"
                                alt="..."
                                width={700}
                                height={800}
                                />
                            </figure>
                            </div>
                        </div>
                    </div>
           </div>
        </>
    )
}

export default About