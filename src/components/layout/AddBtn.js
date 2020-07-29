import React from 'react'

const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href='#add-log-modal' className='btn-floating btn-large blue darken-2 modal-trigger'>
                <i className='large material-icon'>add</i>
            </a>
        </div>
        <ul>
            <li>
                <a href='#tech-list-modal' className='btn-floating green modal-trigger'>
                    <i className='material-icons'>person</i>
                </a>
            </li>
            <li>
                <a href='#tech-modal' className='btn-floating red modal-trigger'>
                    <i className='material-icons'>person_add</i>
                </a>
            </li>

        </ul>
    )
}

export default AddBtn