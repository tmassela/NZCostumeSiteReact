import {Col, Row } from 'reactstrap';
import CostumeCard from './CostumeCard';
import { selectSoloCostumes } from './CostumeSlice';

const SoloCostumeList = () => {

    const soloCostumes = selectSoloCostumes();

    return(
        <Row className='ms-auto'>
            {soloCostumes.map((costume) => {
                return (
                    <Col md='5' className='m-4 text-center' key={costume.id}>
                        <CostumeCard costume={costume} />
                    </Col>
                )
         })}
        </Row>
    );
}

export default SoloCostumeList
