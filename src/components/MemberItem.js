import React from 'react';

function MemberItem( {item} ) {
    return (
        <div style={{textAlign: "center"}}>
            <h2> {item.japan}</h2>
            <a href={item.link}>{item.eng}</a>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default MemberItem;