import { SpeedInsights } from '@vercel/speed-insights/next';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App!</h1>
      
      {/* Use the SpeedInsights component */}
      <SpeedInsights />
    </div>
  );
};

export default HomePage;
