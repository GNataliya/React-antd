import style from './style.module.css';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

import Banner from '../../components/Banner';
import Links from '../../components/Links';

import apple from '../Content/imgs/apple.jpg';
import banner from '../Content/imgs/banner_pic.jpg';
import pro from '../Content/imgs/13_pro.jpg';
import normal from '../Content/imgs/13.jpg';
import MacBook from '../Content/imgs/MacBook.jpg';
import airPods from '../Content/imgs/AirPods.jpg';
import home from '../Content/imgs/HomePod.jpg';
import watch from '../Content/imgs/watch.jpg';


function Main() {
    return (
        <div className={style.body}>
        <Banner />

        <Row className={style.banner}>
            <Col span={24} >
                <a href="localhost:3000" className={style.bannerLink}>
                    <div className={style.logo}>
                        <img src={apple} alt='logo' className={style.logo} /> 
                    </div>
                    <div>
                        <h2 className={style.bannerText}>Let the holidays be for everyone.</h2>
                    </div>
                    <div>
                        <a href="localhost:3000"className={style.giftLink}>Shop gifts 
                            <RightOutlined className={style.icon}/>
                        </a>
                    </div>
                    <img src={banner} alt='items' />
                </a>
            </Col>
        </Row>

        <Row className={style.pro}>
            <Col span={24} >
                <a href="localhost:3000" className={style.proLink}>
                     
                    <h2  className={style.proText}>iPhone 13 Pro</h2>
                    <h3 >Oh. So. Pro.</h3>
                    <Links />
                    <div>
                        <img src={pro} alt='item' className={style.imgpro} />
                    </div>
                </a>
            </Col>
        </Row>

        <Row className={style.normal}>
            <Col span={24} >
                <a href="localhost:3000" className={style.normalLink}>
                     
                    <h2  className={style.normalText}>iPhone 13 </h2>
                    <h3 >Your new superpower.</h3>
                    <Links />
                    <div className={style.imgNormal}>
                        <img src={normal} alt='item' className={style.imgNormal} />
                    </div>
                 </a>
            </Col>
        </Row>

        <Row gutter={[10, 10]} >
            <Col span={12} >
                <div className={style.book}>
                    <a href="localhost:3000" className={style.bookLink}> 
                        <h2  className={style.bookText}>MacBook Pro</h2>
                        <h3 >Supercharged for pros.</h3>
                        <Links />
                        <div className={style.img}>
                            <img src={MacBook} alt='item' className={style.imgNormal} />
                        </div>
                     </a>
                </div>
            </Col>
            <Col span={12}  >
                <div className={style.airpods}>
                    <a href="localhost:3000" className={style.bookLink}>
                        <div className={style.img}>
                            <img src={airPods} alt='item' className={style.imgair} />
                        </div>
                        <h2  className={style.bookText}>AirPods </h2>
                        <h3 >All-new with Spatial Audio</h3>
                        <Links />
                    </a>
                </div>
            </Col>

            <Col span={12}  >
                <div className={style.home}>
                    <a href="localhost:3000" className={style.bookLink}>
                        <h2  className={`${style.bookText} ${style.airhome}`}>AirHome </h2>
                        <h3 >The best sound.</h3>
                        <Links />
                        <div className={style.img}>
                            <img src={home} alt='item' className={style.imghome} />
                        </div>
                    </a>
                </div>
            </Col>
            <Col span={12}  >
                <div className={style.watch}>
                    <a href="localhost:3000" className={style.bookLink}>
                        <h2  className={`${style.bookText} ${style.applewatch}`}>Watch </h2>
                        <h3 >Introducing our largest display.</h3>
                        <Links />
                        <div className={style.img}>
                            <img src={watch} alt='item' className={style.imghome} />
                        </div>
                    </a>
                </div>
            </Col>

        </Row>

        </div>
    )
}

export default Main;