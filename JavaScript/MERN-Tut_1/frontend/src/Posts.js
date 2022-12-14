import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [updatedPost, setUpdatedPost] = useState({});
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("/posts")
            .then(res => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deletePost = (id) => {
        axios.delete(`/delete/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        // window.location.reload();
        setPosts(posts.filter(post => post._id !== id));
    };

    const updatePost = (post) => {
        // console.log(post);
        setUpdatedPost(post);
        handleShow();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPost(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const saveUpdatedPost = () => {
        // console.log(updatedPost);
        axios.put(`/update/${updatedPost._id}`, updatedPost)
            .then(res => console.log(res))
            .catch((err) => console.log(err));
        handleClose();
        const id = updatedPost._id;
        const update = posts.map(post => {
            if (post._id === id) {
                return { ...post, title: updatedPost.title, description: updatedPost.description };
            }
            return post;
        });
        setPosts(update);
        // window.location.reload();
    };

    return (
        <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>
            <h1>Posts page</h1>
            <Button
                variant='outline-dark'
                style={{ width: "90%", marginBottom: "2rem" }}
                onClick={() => navigate(-1)}>BACK</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                style={{ marginBottom: "1rem" }}
                                placeholder="title"
                                name="title"
                                value={updatedPost.title ? updatedPost.title : ""}
                                onChange={handleChange} />
                            <Form.Control
                                placeholder="description"
                                name="description"
                                value={updatedPost.description ? updatedPost.description : ""}
                                onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveUpdatedPost}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                posts ? (
                    <>
                        {posts.map(post => {
                            return (
                                <div key={post._id} style={{ border: "solid lightgray 3px", borderRadius: "8px", marginBottom: "1rem", padding: "1rem" }}>
                                    <h4>{post.title}</h4>
                                    <p>{post.description}</p>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Button
                                            variant='outline-info'
                                            style={{ width: "100%", marginRight: "1rem" }} onClick={() => updatePost(post)}>UPDATE</Button>
                                        <Button
                                            variant='outline-danger'
                                            style={{ width: "100%" }}
                                            onClick={() => deletePost(post._id)}>DELETE</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                ) : (
                    ""
                )
            }
        </div>
    )
};

export default Posts;