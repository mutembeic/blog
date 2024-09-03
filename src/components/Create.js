import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import '/home/charles/IST/phase2/projects/blog/src/index.css';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {

    const [data, setData] = useState({
        title: "",
        author: "",
        body: ""
    })


    const handleChange = (e) => {
        const {name, value}= e.target;
        setData ((prev)=>{
            return {...prev, [name]: value}
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/blog', data)
        .then(res =>{
            toast.success('new blog added successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        })
        .catch(err =>{
            toast.error('An error occurred while adding the blog', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
        })
    })
}
    return (
        <div className="content">
            <h2>Create a New Blog</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter the title" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="author">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control name="author" type="text" placeholder="Enter author's name" onChange={handleChange}/>
                    
                </Form.Group>

                <Form.Group controlId="body">
                    <Form.Label>Body:</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter the blog content" onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">Save Blog </Button>
                <ToastContainer />

                <p>{data.title}</p>
                <p>{data.author}</p>
                <p>{data.body}</p>
            </Form>
        </div>
    );
}

export default Create;
