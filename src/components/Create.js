import { Form, ToastContainer } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import '/home/charles/IST/phase2/projects/blog/src/index.css';

const Create = () => {
    return (
        <div className="content">
            <h2>Create a New Blog</h2>
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter the title" />
                </Form.Group>

                <Form.Group controlId="author">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control name="author" type="text" placeholder="Enter author's name" />
                </Form.Group>

                <Form.Group controlId="body">
                    <Form.Label>Body:</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter the blog content" />
                </Form.Group>

                <Button variant="primary" type="submit">Save Blog</Button>
                <ToastContainer />
            </Form>
        </div>
    );
}

export default Create;
