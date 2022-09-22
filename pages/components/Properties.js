import styles from '../../styles/Home.module.css'
import cls from 'classnames'
import Head from 'next/head'
const Properties = () =>{
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
                        <h1 className={styles.titleSingle}>Properties - We Do Great Design For Creative Folks</h1>
                        </div>
                    </div>
                </div>
            </div><br/><br/>
            <div className="container-fluid bg-light p-5">
                  <h1 className="display-4 fw-bolder text-center">&quot;Properties For Sale&quot;</h1>
                    <hr className="my-4" />
                   <div className='row justify-content-center'>
                     <div className='col-md-3'>
                       <div className="card" style={{width:'20rem'}}>
                        <picture>
                         <img src="/static/bellini_1.png" className="card-img-top" alt="..."/>
                        </picture>
                            <div className="card-body">
                                <h5 className="card-title">Bellini</h5>
                                <p className="card-text">Monitor your property value anytime,anywhere</p>
                                <p>Ever wondered what your property&apos;s worth? Get market leading insights and data by traking it.</p>
                                <span>
                                 <i className="bi bi-house-heart-fill text-success"></i> How much your property&apos;s worth
                                </span><br/>
                                <span>
                                 <i className="bi bi-phone-flip text-success"></i> Latest insights and data on the property market
                                </span>
                            </div>
                        </div>
                     </div>
                     <div className='col-md-3'>
                            <div className="card" style={{width:'20rem'}}>
                                <picture>
                                <img src="/static/chiara_1.png" className="card-img-top" alt="..."/>
                                </picture>
                                    <div className="card-body">
                                        <h5 className="card-title">Chiara</h5>
                                        <p className="card-text">Monitor your property value anytime,anywhere</p>
                                        <p>Ever wondered what your property&apos;s worth? Get market leading insights and data by traking it.</p>
                                        <span>
                                        <i className="bi bi-house-heart-fill text-success"></i> How much your property&apos;s worth
                                        </span><br/>
                                        <span>
                                        <i className="bi bi-phone-flip text-success"></i> Latest insights and data on the property market
                                        </span>
                                    </div>
                            </div>
                     </div>
                     <div className='col-md-3'>
                            <div className="card" style={{width:'20rem'}}>
                                <picture>
                                <img src="/static/giada_1.png" className="card-img-top" alt="..."/>
                                </picture>
                                    <div className="card-body">
                                        <h5 className="card-title">Giada</h5>
                                        <p className="card-text">Monitor your property value anytime,anywhere</p>
                                        <p>Ever wondered what your property&apos;s worth? Get market leading insights and data by traking it.</p>
                                        <span>
                                        <i className="bi bi-house-heart-fill text-success"></i> How much your property&apos;s worth
                                        </span><br/>
                                        <span>
                                        <i className="bi bi-phone-flip text-success"></i> Latest insights and data on the property market
                                        </span>
                                    </div>
                            </div>
                     </div>
                   </div>
            </div>
            <br/><br/><br/><br/><br/>
        </div>
        
    )
}

export default Properties