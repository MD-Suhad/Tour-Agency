import React from 'react';
import './LatestNews.css'


const LatestNews = () => {
    return (
        <div className="m-5">
            <section className="section gray-bg" id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2 className="h1 text-primary ">Travel guide and tips</h2>
                            <p>A guide book or travel guide is "a book of information about a place designed for the use of visitors or tourists".</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                
                                    
                                
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">Buy a small backpack/suitcase</a></h5>
                                <p>By purchasing a small backpack (I like something around 35/40 liters), you will be forced you to pack light and avoid carrying too much stuff. Humans have a natural . </p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                <a href="#">
                                
                                </a>
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">Take an extra bank card and credit card with you</a></h5>
                                <p>Disasters happen. It’s always good to have a backup in case you get robbed or lose a card. You don’t want to be stuck somewhere new without access to your funds.</p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                
                                
                                
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">Don’t be afraid to use a map.</a></h5>
                                <p>Looking like a tourist isn’t as bad as getting really lost and ending up in the wrong neighborhood. Don’t be afraid to use a map or ask for directions and look like a tourist. </p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default LatestNews;