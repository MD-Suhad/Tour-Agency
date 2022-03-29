import React from 'react';
import LatestNews from '../LatestNews/LatestNews';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Packages></Packages>
          <LatestNews></LatestNews>
        </div>
    );
};

export default Home;