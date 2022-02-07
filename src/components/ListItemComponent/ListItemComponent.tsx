import React from 'react';
import { useLocation } from 'react-router-dom';
import './ListItemComponent.css';

interface IProps{
    bio: string;
    dateAdded: string;
    dateModified: string;
    description: string;
    link: string;
    name: string;
    quoteCount: number;
    slug: string;
    _id: string;
    handleAddAuthor:(_id:string) => void;
    handleDeleteAuthor:(_id:string) => void;
}

const ListItemComponent:React.FC<IProps> = ({bio,link,name,_id,handleAddAuthor,handleDeleteAuthor}) => {
    const location= useLocation();
    
    return (
        <div className="g-2 p-2 col-10 col-md-3 col-sm-6">
            <div className="card card-style m-2">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{link}</h6>
                    <p className="card-text"><small>{bio}</small></p>
                    {location.pathname !== "/favorite-author" &&<button onClick={() =>handleAddAuthor(_id)} className="card-link btn btn-success">Add Favorite</button>}
                    {location.pathname === "/favorite-author" && <button onClick={() =>handleDeleteAuthor(_id)}  className="card-link btn btn-danger">Remove Favorite</button> }
                </div>
            </div>
        </div>
    );
};

export default ListItemComponent;