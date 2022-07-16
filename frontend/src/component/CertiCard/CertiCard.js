import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCertificate, getUser } from "../../actions/user";
import "./CertiCard.css";
const CertiCard = ({
    title = "Title Here",
    image,
    isAdmin = false,
    id,
}) => {
    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
        await dispatch(deleteCertificate(id));
        dispatch(getUser());
    };

    return (
        <div className="certiCard">
            <img src={image} alt="error" />
            <Typography>{title}</Typography>
            {isAdmin && (
                <Button
                    style={{
                        margin: "auto",
                        display: "block",
                        color: "rgba(40,40,40,0.7)",
                    }}
                    onClick={() => deleteHandler(id)}
                >
                    <FaTrash />
                </Button>
            )}
        </div>
    );
};

export default CertiCard;