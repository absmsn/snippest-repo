import { useState } from 'react';
import style from './index.module.scss';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const OverviewCard = ({snippest, onClick}) => {
    const [title, setTitle] = useState(snippest.name);
    const [isTitleEditing, setIsTitleEditing] = useState(false);

    const onChangeTitleConfirmed = () => {
        setIsTitleEditing(false);
    };

    const onEditTitleClicked = (e) => {
        e.stopPropagation();
        setIsTitleEditing(true);
    };

    return (
        <div className={style.mainContainer} onClick={onClick}>
            <div className={style.header}>
                <div className={style.title}>
                    {
                        isTitleEditing
                        ? <Input
                            value={title}
                            placeholder="输入片段的名称"
                            onChange={e => setTitle(e.target.value)}
                            onPressEnter={() => onChangeTitleConfirmed()}
                        /> 
                        : <>
                            <h2>{title}</h2>
                            <EditOutlined
                                className={style.editIcon}
                                onClick={(e) => onEditTitleClicked(e)}
                            />
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;