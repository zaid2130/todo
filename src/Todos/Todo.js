import React from 'react';

const todo = (props) => {
    return(
        <div className='list-item'> 
            {props.content}
            <i class="material-icons">delete</i>
         </div>
    );
};

export default todo;