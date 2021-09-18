import React from 'react';

export default function Footer(){
    return(
        <div className="profile-content">
            <div className="profile">
                <div className="profile-details">
                    <div className="name-job">
                        <div className="name">Matheus silva</div>
                        <div className="job">Developer</div>
                    </div>
                </div>
                <a href="/">
                    <i className="bx bx-log-out" id="log-out" />
                </a>
            </div>
        </div>
    );
}