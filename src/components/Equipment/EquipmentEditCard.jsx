import React, {useState} from 'react'
import 'antd/dist/antd.min.css';
import {
    Card,
    Button
} from 'antd';
import { EditFilled } from '@ant-design/icons'

const EquipmentEditCard = () => {
    
    const [formDisabled, setFormDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => { 
        setFormDisabled(disabled);
    };

    return (
        <>
            <Card
                title="Edit Equipment"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                extra={
                    <Button
                        type="primary"
                        icon={<EditFilled />}
                        shape="round"
                    >
                        Edit
                    </Button>
                }
            >
            </Card>
            
        </>
    );
};

export default EquipmentEditCard;