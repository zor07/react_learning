import React from "react";

export const withSuspense = (Component) => {
    const Wrapper = (props) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    }

    return Wrapper
}