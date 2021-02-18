import React, { Component } from 'react'

const UserCard = ({ name, interactions }) => {
    return (
        <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUh5L8PzW_Q5GZTeLNIJW8z5c3oyMIq8pIw&usqp=CAU"
                alt="User's avatar" style={{ borderRadius: '50%', height: '50px', marginRight: '20px' }} />
            <div style={{alignItems: 'center'}}>
                <p className="black-p">{name}</p>
                <p className="grey-p">{interactions} interactions</p>
            </div>
        </section>
    )
}

export default UserCard;