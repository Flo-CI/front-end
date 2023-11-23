import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // Import the context

export default function NewClaimButton() {
    const { darkMode } = useContext(DarkModeContext); // Use the context

    // Determine button classes based on dark mode
    const buttonClass = darkMode 
        ? 'bg-green-500 text-white p-4 rounded-xl font-semibold mx-4 mt-2'
        : 'bg-green-300 p-4 rounded-xl font-semibold mx-4 mt-2';

    return (
        <Link to="/new-claim">
            <button
                variant="contained"
                color="success"
                className={buttonClass}
            >
                + New Claim
            </button>
        </Link>
    );
}
