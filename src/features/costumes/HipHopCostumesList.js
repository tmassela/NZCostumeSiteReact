import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';
import { selectHipHopCostumes } from './CostumeSlice';

const HipHopCostumesList = () => {

    const hipHopCostumes = selectHipHopCostumes();

    return(
        <Row className='ms-auto'>
            {hipHopCostumes.map((costume) => {
                return (
                    <Col md='5' className='m-4' key={costume.id}>
                        <CostumeCard costume={costume} />
                    </Col>
                )
         })}
        </Row>
    );
}

export default HipHopCostumesList
