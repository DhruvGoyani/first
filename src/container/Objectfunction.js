import React from 'react';

function Objectfunction(props) {

    let obj1 = { fname : 'amit', Age : 18}
    let obj2 = { fname : 'smit' , Age : 20}


    //copy
    let obj3 = {...obj1}
    console.log(obj3)

    //concate
    let obj4 = {...obj1 , ...obj2}
    console.log(obj4)

    //merging
    let obj5 = {fname : 'amit' ,Age : 18 , city : 'surat'}
    let obj6 = {fname : 'smit' , Age : 20}

    let obj7 = {...obj5, ...obj6}
    console.log(obj7)

    //destucturing
    let {fname , age} = obj6
    // console.log(obj6.fname)
    console.log(fname)

    return (
        <div>
            
        </div>
    );
}

export default Objectfunction;