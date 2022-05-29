import React from 'react';

export const Jumbotron = () => {
    return (
     <section className="jumbotron text-center mb-0 bg-white">
      <div className="container">
       <h1 className="jumbotron-heading">Web3 summit of the Mediterranean</h1>
       <p className="lead text-muted">
        Something short and leading about the collection below—its contents,
        the creator, etc. Make it short and sweet, but not too short so folks
        don't simply skip over it entirely.
       </p>
       <p>
        <a href="#" className="btn btn-lg btn-outline-primary m-2">
         Buy ticket
        </a>
       </p>
       <img src={require('./assets/images/main.png')}/>
      </div>
     </section>
    );
   };