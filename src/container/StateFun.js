import React  from 'react';

function StateFun(props) {
    const [id , setId] = useState(101)


    const change = () => {
        setId(102)
    }
    return (
        <>
        <div>
            {id}
            <button onClick={() => change()}>change ID</button>
        </div>
        </>
    );
}

export default StateFun;