import style from './style.module.css';
import { RightOutlined } from '@ant-design/icons';

function Links() {
    return (
        <div>
            <a href="localhost:3000"className={style.giftLink}>Learn more
                <RightOutlined className={style.icon}/>
            </a>
            <a href="localhost:3000"className={`${style.giftLink} ${style.buyLink}`}>Buy
                <RightOutlined className={style.icon}/>
            </a>
        </div>
        
    );
}

export default Links;