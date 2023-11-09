import React from "react";
import { Link } from "react-router-dom";

export default function ClaimFilesButton() {
    return (
        <div className="flex justify-center justify-center h-screen">
            <Link to="/claim-files">
                <button
                    variant="contained"
                    color="success"
                    className="bg-green-300 p-4 items-center rounded-xl font-semibold mx-4 mt-2"
                >
                    Create Claim
                </button>
            </Link>
        </div>
    );
}