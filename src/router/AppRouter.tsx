import React, { Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home/Home';

const AuthorsList = React.lazy(()=> import('../components/AuthorsList/AuthorsList'));

const AppRouter = () => {
    return (<div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<AuthorsList />} />   
            </Routes>
        </Router>
        </div>
    );
};

export default AppRouter;