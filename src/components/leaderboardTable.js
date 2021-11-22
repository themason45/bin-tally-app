import {Table} from "react-bootstrap";
import {PeopleContext} from "../contexts";
import {createRef, useState} from "react";
import RecordModal from "./RecordModal";

function LeaderBoard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let modalRef = createRef();


    let row = (person, index, lastIndex) => {
        let appendage =
            index === lastIndex - 1 ? "🎉" :
                index === 0 ? "💩" : ""

        return <tr onClick={() => {
            modalRef.current.setSelectedIndex(index);
            handleShow();
        }}>
            <td>{person.name}</td>
            <td>{person.score} {appendage}</td>
        </tr>
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                <PeopleContext.Consumer>
                    {(state) => {
                        // noinspection JSUnresolvedVariable
                        let lastIndex = state.people.length

                        return state.people.map((person, index) => row(person, index, lastIndex))
                    }}
                </PeopleContext.Consumer>
                </tbody>
            </Table>
            <RecordModal show={show} handleShow={handleShow} handleClose={handleClose} ref={modalRef}/>
        </>
    );
}

export {LeaderBoard}