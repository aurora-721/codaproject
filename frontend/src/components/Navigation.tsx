import React, { MouseEvent, ReactElement, useState } from 'react';
import { ActivateDeactivate } from '.././components/ActivateDeactivate';
import { Account } from '.././components/Account';


export function Navigation(): ReactElement {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/email">Enter email</a>
            <a className="navbar-brand" href="/jumno">Buy ticket</a>
            <Account />
            <ActivateDeactivate />


            </nav>

    );
   };