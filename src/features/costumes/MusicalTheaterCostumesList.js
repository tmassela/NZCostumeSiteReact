import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';
import { selectMusicalTheaterCostumes } from './CostumeSlice';

const MusicalTheaterCostumesList = () => {

    const musicalTheaterCostumes = selectMusicalTheaterCostumes();

    return(
        <Row className='ms-auto'>
            {musicalTheaterCostumes.map((costume) => {
                return (
                    <Col md='5' className='m-4' key={costume.id}>
                        <CostumeCard costume={costume} />
                    </Col>
                )
         })}
        </Row>
    );
}

export default MusicalTheaterCostumesList
