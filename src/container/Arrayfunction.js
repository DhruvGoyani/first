import React from 'react';

function Arrayfunction(props) {

    let arr1 = [10,20,30];
    let arr2 = [40,50]


    // copy array
    let arr3 = [...arr1]
    console.log(arr3)

    // concate (mixing)
    let arr4 = [...arr1, ...arr2]
    console.log(arr4)

    // merging 
    let arr5 = [99, ...arr4 , 100]
    console.log(arr5)

    // destructuring
    let arr6 = ['amit' , 'smit']

    let [fname , lname] = arr6
    // console.log(arr6)
    console.log(fname)



    
    return (
        <div>
            
        </div>
    );
}

export default Arrayfunction;