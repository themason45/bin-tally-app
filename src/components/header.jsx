import {Navbar, Nav, Button} from "react-bootstrap";
import {useState} from "react";
import RecordModal from "./RecordModal";

function Header(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Button variant="outline-success" onClick={handleShow}>I took a bin out!</Button>
            </Navbar>
            <RecordModal show={show} handleClose={handleClose} handleShow={handleShow} initialValue={0} />
        </>
    );
}

export default Header;