import React from "react";
import { Routes, Route } from "react-router-dom";
import Discussion from "./discussion";
import Rules from "./rules";
import Workflow from "./workflow";

export default function () {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Discussion />}></Route>
                <Route path="/rules" element={<Rules />}></Route>
                <Route path="/workflow" element={<Workflow />}></Route>
            </Routes>

        </div>
    )
}