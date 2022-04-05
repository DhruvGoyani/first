import React, { useState } from 'react';
// function base commponent
function StateFun(props) {
    const [id, setId] = useState(101)
    const [name, setName] = useState('')

    const change = () => {
        setId(102)
    }
    return (
        <>
            <div>
                {id}
                <button onClick={() => change()}>change ID</button>
            </div>
            <div>
                {name}
                <button onClick={() => setName('amit')}>change Name</button>
            </div>
        </>
    );
}

export default StateFun;