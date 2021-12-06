import style from './style.module.css';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

import Banner from '../../components/Banner';

import apple from '../Content/imgs/apple.jpg';
import banner from '../Content/imgs/banner_pic.jpg';
import pro from '../Content/imgs/13_pro.jpg';
import normal from '../Content/imgs/13.jpg';


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
                    <div>
                    <a href="localhost:3000"className={style.giftLink}>Learn more
                        <RightOutlined className={style.icon}/>
                    </a>
                    <a href="localhost:3000"className={style.giftLink}>Buy
                        <RightOutlined className={style.icon}/>
                    </a>
                    </div>
                    <div>
                        <img src={pro} alt='item' className={style.imgpro} />
                    </div>
                </a>
            </Col>
        </Row>

        <Row className={style.normal}>
            <Col span={24} >
                <a href="localhost:3000" className={style.normalLink}>
                     
                     <h2  className={style.proText}>iPhone 13 </h2>
                     <h3 >Your new superpower.</h3>
                     <div>
                     <a href="localhost:3000"className={style.giftLink}>Learn more
                         <RightOutlined className={style.icon}/>
                     </a>
                     <a href="localhost:3000"className={style.giftLink}>Buy
                         <RightOutlined className={style.icon}/>
                     </a>
                     </div>
                     <div>
                         <img src={normal} alt='item' className={style.imgnormal} />
                     </div>
                 </a>
            </Col>
        </Row>

        {/* <Row gutter={[24, 24]}>
            <Col span={12} />
            <Col span={12} />

            <Col span={12} />
            <Col span={12} />

            <Col span={12} />
            <Col span={12} />
        </Row> */}

        </div>
    )
}

export default Main;