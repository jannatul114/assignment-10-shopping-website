import React from 'react';
import CustomLink from '../CustomeLink/CustomeLink';

const Links = ({ routes }) => {
    return (
        <div className='mx-3.5'>
            <CustomLink to={routes.link}>{routes.name}</CustomLink>
        </div>
    );
};

export default Links;