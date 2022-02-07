import React, { useContext, useEffect, useState } from 'react';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import Header from '../common/Header/Header';
import { AuthorActions } from '../AuthorsList/AuthorsList';

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

const FavoriteAuthor = () => {
    const [favoriteAuthor, setFavoriteAuthor] = useState<IAuthorData[]>([])
    let data = localStorage.getItem("selectedAuthor") as string;
    const newData: IAuthorData[] = JSON.parse(data);
    let { handleAddAuthor, handleDeleteAuthor } = useContext(AuthorActions);

    useEffect(() => {
        setFavoriteAuthor(newData)
    }, [])


    handleDeleteAuthor = (_id: string) => {
        let data = localStorage.getItem("selectedAuthor") as string;
        const authorsData: IAuthorData[] = JSON.parse(data)
        let newAuthorsData = authorsData.filter(author => author._id !== _id);
        setFavoriteAuthor(newAuthorsData);
        localStorage.setItem("selectedAuthor", JSON.stringify(newAuthorsData));
    }

    return (
        <>
            <Header />
            <div className="row">
                {
                    favoriteAuthor?.map(author => <ListItemComponent {...author} handleAddAuthor={handleAddAuthor} handleDeleteAuthor={handleDeleteAuthor} />)
                }
            </div>

        </>
    );
};

export default FavoriteAuthor;