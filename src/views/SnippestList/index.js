import {useState} from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import style from './index.module.scss';
import OverviewCard from './OverviewCard';
import {useNavigate} from 'react-router-dom';

export default function SnippestList(props) {
    const navigate = useNavigate();
    const [snippests, setSnippests] = useState([]);

    const addSnippest = () => {
        setSnippests([...snippests, {
            name: '',
            content: '',
            id: Date.now()
        }]);
    };

    const gotoSnippestDetail = (snippest) => {
        navigate(`/snippest/${snippest.id}`);
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.operationPanel}>
                <Button 
                    style={{float: 'left'}}
                    onClick={() => addSnippest()}
                    icon={<PlusOutlined />}
                />
            </div>
            <div className={style.list}
            >
                {snippests.map(snippest => 
                    <OverviewCard
                        key={snippest.id}
                        snippest={snippest}
                        onClick={() => gotoSnippestDetail(snippest)}
                    />
                )}
            </div>
        </div>
    );
};