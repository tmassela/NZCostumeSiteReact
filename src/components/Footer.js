import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col sm='7' className='text-center'>
                        <h5>Contact Us</h5>
                        <hr />
                        <ContactForm />
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/jazz'>Jazz</Link>
                            </li>
                            <li>
                                <Link to='/lyrical'>Lyrical</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='2' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='https://www.instagram.com/Expressenzcostumeresale/?fbclid=IwAR0C5Ee5ljVi71rzFTqa30DtW5y7NmCP2qFz_5CJU3RPAFR4ZMr5oUgHGQE'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/expressenzboosterclub/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
