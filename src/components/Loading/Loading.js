import React from 'react'
// HOC
export default function Loading(component) {
    return function withLoadcomponent ({isLoading , data})
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
