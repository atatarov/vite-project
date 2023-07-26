import { Suspense } from 'react';

import { StoreProvider } from './providers/StoreProvider';
import { MainPage } from '@/pages/MainPage';

function App() {
  return (
    <div className={'app'}>
      <StoreProvider>
        <Suspense fallback="Loading user list...">
          <MainPage />
        </Suspense>
      </StoreProvider>
    </div>
  );
}

export default App;
