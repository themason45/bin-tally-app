import {Button, Form, Modal} from "react-bootstrap";
import {Component} from "react";
import {PeopleContext} from "../contexts";

export default class RecordModal extends Component {
    static contextType = PeopleContext;

    constructor(props) {
        super(props);

        this.state = {
            selectedPersonIdx: 0
        }
    }

    setSelectedIndex(val) {
        this.setState({selectedPersonIdx : val})
    }

    render() {
        const ctx = this.context;

        let submitBtn = () => {
            ctx.addBin(this.state.selectedPersonIdx);
            this.props.handleClose()
            this.setState({selectedPersonIdx : 0})
        }

        let handleSelectChange = (e) => {
            this.setSelectedIndex(e.target.value)
        }

        let option = (person, iter) => {
            let content = `${person.name} - ${person.score}`
            let isSelected = iter === this.state.selectedPersonIdx

            if (isSelected) {
                return <option value={iter} key={iter} selected>{content}</option>
            } else {
                return <option value={iter} key={iter}>{content}</option>
            }
        }

        let opts = ctx.people.map((person, index) => option(person, index))

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Record bin emptying</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Who are you?</Form.Label>
                        <Form.Control as="select" onChange={handleSelectChange} custom>
                            {opts}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitBtn}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}