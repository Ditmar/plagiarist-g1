import React from 'react'

export const SearchPage = ({ resultado }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: resultado }} style={{ marginLeft: '280px', marginTop: '70px', marginRight: '25px' }}>

        </div>
    )
}