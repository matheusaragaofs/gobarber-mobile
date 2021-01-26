import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FunctionComponent = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
