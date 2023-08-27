import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';
import { selectJazzCostumes } from './CostumeSlice';

const JazzCostumesList = () => {

    const jazzCostumes = selectJazzCostumes();

    return(
        <Row className='ms-auto'>
            {jazzCostumes.map((costume) => {
                return (
                    <Col md='5' className='m-4 text-center' key={costume.id}>
                        <CostumeCard costume={costume} />
                    </Col>
                )
         })}
        </Row>
    );
}

export default JazzCostumesList
