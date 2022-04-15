import React from 'react';

function Loading(Components) {
    return function withloadingcomponent({isloading , data}) {
        console.log(isloading);
        if (isloading) {
            return(
                <p>LOADING...</p>
            )
        } else {
            return(
                <Components data = {data} />
            )
        }
    }
}

export default Loading;