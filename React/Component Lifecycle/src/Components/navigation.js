import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            <p><Link to="/">Discussion</Link></p>
            <p><Link to="/rules">Rules</Link></p>
            <p><Link to="/workflow">Workflow</Link></p>
        </div>
    )
}