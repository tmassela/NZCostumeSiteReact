import { COSTUMES } from '../../app/shared/COSTUMES';
import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';

const CostumesList = () => {
    return(
        <Row className='ms-auto'>
            {COSTUMES.map((costume) => {
            return (
                <Col md='5' className='m-4' key={costume.id}>
                    <CostumeCard costume={costume} />
                </Col>
                );
            })}
        </Row>
    );
}

export default CostumesList
