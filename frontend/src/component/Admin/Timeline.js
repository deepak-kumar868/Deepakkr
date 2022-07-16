import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { Button, Typography } from "@mui/material";
import { addTimeline, deleteTimeline, getUser } from '../../actions/user';
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';

const Timeline = () => {
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);
    const { message: loginMessage } = useSelector((state) => state.login);


    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTimeline(title, description, date));
    }
    const deleteHandler = async (id) => {
        await dispatch(deleteTimeline(id));
        dispatch(getUser());
    };
    useEffect(() => {
        if (error) {
            <Alert severity="error">{error}</Alert>
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            <Alert severity="success">{message}</Alert>
            dispatch({ type: "CLEAR_MESSAGE" });
        }
        if (loginMessage) {
            // alert.success(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [error, message, dispatch, loginMessage]);

    return (
        <div className="adminPanel">
            <div className="adminPanelContainer">
                <Typography variant="h4">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{ marginRight: "1vmax" }}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>

                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="adminPanelInputs"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="adminPanelInputs"
                    />
                    <input
                        type="date"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="adminPanelInputs"
                    />

                    <Link to="/account">
                        BACK <MdKeyboardBackspace />
                    </Link>

                    <Button type="submit" variant="contained" disabled={loading}>
                        Add
                    </Button>
                </form>

                <div className="adminPanelYoutubeVideos">
                    {user &&
                        user.timeline &&
                        user.timeline.map((item) => (
                            <div className="youtubeCard" key={item._id}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                                    {item.description}
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: 600 }}>
                                    {item.date.toString().split("T")[0]}
                                </Typography>

                                <Button
                                    style={{
                                        margin: "auto",
                                        display: "block",
                                        color: "rgba(40,40,40,0.7)",
                                    }}
                                    onClick={() => deleteHandler(item._id)}
                                >
                                    <FaTrash />
                                </Button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline