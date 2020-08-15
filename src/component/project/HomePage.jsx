import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';


function HomePage() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">This Is Web From Home Page!</h1>
                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis harum corrupti quisquam aliquid eligendi incidunt, possimus dolor hic inventore explicabo, ex soluta delectus consectetur cum assumenda vitae. Voluptas, enim necessitatibus.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default HomePage;
