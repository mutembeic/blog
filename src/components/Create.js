import { Form, ToastContainer } from "react-bootstrap";
import { Button } from 'react-bootstrap';

const Create = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title:</Form.Label>
                <Form.Control name="title" type="text" placeholder="Enter the title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Author:</Form.Label>
                <Form.Control name="author" type="text" placeholder="Enter author's name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body:</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="body" />
            </Form.Group>

            <Button variant="primary" type="submit">Save Blog</Button>
            <ToastContainer />
        </Form>
    );
}

export default Create;
