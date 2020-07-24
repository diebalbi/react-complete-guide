import React from 'react';

const withClassFun = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClassFun;