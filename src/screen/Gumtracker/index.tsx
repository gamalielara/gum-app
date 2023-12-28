import GumtrackerSplashScreen from '@src/SplashScreens/GumtrackerSplashScreen';
import React, {Suspense} from 'react';

const GumtrackerScreen = () => {
  const GumtrackerApp = React.lazy(() => import('@src/@gumtracker/App'));

  return (
    <Suspense fallback={<GumtrackerSplashScreen />}>
      <GumtrackerApp />
    </Suspense>
  );
};

export default GumtrackerScreen;
