import React from 'react'
// HOC
export default function Loading(component) {
    return function withLoadingcomponent ({isLoading , data})
    {
    if (isLoading) {
        return (
            <p>Loading .....</p>
        )
    } else {
        return (
            <component data={data} />
        )
    }
}
}
