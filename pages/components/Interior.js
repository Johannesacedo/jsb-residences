import styles from '../../styles/Home.module.css'
import cls from 'classnames'
import Head from 'next/head'
const Interior = () =>{
    return(
        <>
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
                        <h1 className={styles.titleSingle}>Interior</h1>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
            <div className='container'>
            <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <picture>
                    <img src="/static/model_1.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_2.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_3.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_4.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_5.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_6.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_7.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_8.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_9.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                    <div className="carousel-item">
                    <picture>
                    <img src="/static/model_10.png" className="d-block w-100" alt="..."/>
                    </picture>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </>
    )
}

export default Interior