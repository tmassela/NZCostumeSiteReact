import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CostumeCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.costume.image}
                alt={props.costume.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.costume.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default CostumeCard
