import { store } from '@/store/store';
import { router } from '@/routing/routing';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
