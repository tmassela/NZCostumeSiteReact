import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';
import { selectBalletCostumes } from './CostumeSlice';

const BalletCostumesList = () => {

    const balletCostumes = selectBalletCostumes();

    return(
        <Row className='ms-auto'>
            {balletCostumes.map((costume) => {
                return (
                    <Col md='5' className='m-4' key={costume.id}>
                        <CostumeCard costume={costume} />
                    </Col>
                )
         })}
        </Row>
    );
}

export default BalletCostumesList
