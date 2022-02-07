import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';

const AuthorsList = React.lazy(() => import('../components/AuthorsList/AuthorsList'));
const FavoriteAuthor = React.lazy(() => import('../components/FavoriteAuthor/FavoriteAuthor'));

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div><h2>Loading...</h2></div>}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/authors" element={<AuthorsList />} />
                        <Route path="/favorite-author" element={<FavoriteAuthor />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Router>
            </Suspense>

        </div>
    );
};

export default AppRouter;