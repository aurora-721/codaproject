import React, { MouseEvent, ReactElement, useState } from 'react';
import { ActivateDeactivate } from '.././components/ActivateDeactivate';
import { Account } from '.././components/Account';


export function Navigation(): ReactElement {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a href="/" >
            <img src={require('./assets/images/st.png')}/>
            </a>
            <div>
                <a className="navbar-brand" href="/jumno">Buy tickets</a>
                <Account />
                <ActivateDeactivate />
            </div>



            </nav>

    );
   };