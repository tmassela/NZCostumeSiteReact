import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';
import { selectTapCostumes } from './CostumeSlice';

const TapCostumesList = () => {

    const tapCostumes = selectTapCostumes();

    return(
        <Row className='ms-auto'>
            {tapCostumes.map((costume) => {
                return (
                    <Col md='5' className='m-4' key={costume.id}>
                        <CostumeCard costume={costume} />
                    </Col>
                )
         })}
        </Row>
    );
}

export default TapCostumesList
