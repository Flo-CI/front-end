import React from "react";
import { Link } from "react-router-dom";

export default function NewClaimButton() {
    return (
        <Link to="/new-claim">
        <button
            variant="contained"
            color="success"
            className="bg-green-300 p-4 rounded-xl font-semibold mx-4 mt-2"
        >
            + New Claim
        </button>
        </Link>
    );
}