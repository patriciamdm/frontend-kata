import React from 'react'

const UserCard = ({ name, interactions, img }) => {
    return (
        <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img src={img}
                alt="User's avatar" style={{ borderRadius: '50%', height: '50px', marginRight: '20px' }} />
            <div style={{alignItems: 'center'}}>
                <p className="black-p">{name}</p>
                <p className="grey-p">{interactions} interactions</p>
            </div>
        </section>
    )
}

export default UserCard;