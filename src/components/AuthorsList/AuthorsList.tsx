import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import httpGetService from '../../services/httpGetService';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import Header from '../common/Header/Header';
import Pagination from '../Pagination/Pagination';

import './AuthorsList.css';


interface IAuthorData {
    bio: string;
    dateAdded: string;
    dateModified: string;
    description: string;
    link: string;
    name: string;
    quoteCount: number;
    slug: string;
    _id: string;
}

interface IActions {
    handleAddAuthor: (_id: string) => void;
    handleDeleteAuthor: (_id: string) => void;
}

export const AuthorActions = createContext<IActions>({} as IActions)

const AuthorsList = () => {
    const [authorsData, setAuthorsData] = useState<IAuthorData[]>([]);
    const [selectedAuthorData, setSelectedAuthorData] = useState<IAuthorData[]>([] as IAuthorData[]);
    const [isUpdated, setIsUpdated] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();
    const path = "/authors" || location.pathname;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        httpGetService(path)
            .then(data => {
                localStorage.setItem("authors", JSON.stringify(data.results));
                return setAuthorsData(data.results)
            })
            .catch(error=>console.log("Error", error))
        let data = localStorage.getItem("authors") as string;
        const newData = JSON.parse(data)
        setAuthorsData(newData);
        setIsUpdated(!isUpdated);
    }, []);

    const handleDeleteAuthor = (_id: string) => {
    }

    const handleAddAuthor = (_id: string) => {
        const authorData: IAuthorData[] = [];
        const allAuthorData = localStorage.getItem("authors") as string;
        const newData = JSON.parse(allAuthorData)
        const author: IAuthorData = newData?.find((anAuthor: IAuthorData) => anAuthor._id === _id)
        authorData.push(author as IAuthorData);
        const allSelectedAuthorsData = localStorage.getItem("selectedAuthor") as string;
        const allNewSelectedData: IAuthorData[] = JSON.parse(allSelectedAuthorsData)

        if (allNewSelectedData == null) {
            setSelectedAuthorData([author]);
            localStorage.setItem("selectedAuthor", JSON.stringify([author]));
        }
        else {
            setSelectedAuthorData([author, ...allNewSelectedData]);
            localStorage.setItem("selectedAuthor", JSON.stringify([author, ...allNewSelectedData]));
        }
    }


    return (
        <>
            <Header />
            <div className="row container-fluid">
                {
                    authorsData?.map((author, id) => {
                        let lastIndex = currentPage * 4;
                        let firstIndex = lastIndex - 4;
                        lastIndex -= 1;
                        if (id >= firstIndex && id <= lastIndex) {
                            return <ListItemComponent key={author._id} {...author} handleAddAuthor={handleAddAuthor} handleDeleteAuthor={handleDeleteAuthor} />
                        }
                    })
                }
            </div>

            <div className="shadow p-2  bg-body rounded ">
                <div className="pagination-style p-3 ">

                    <Pagination
                        currentPage={currentPage}
                        totalItems={authorsData?.length}
                        pageSize={4}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default AuthorsList;