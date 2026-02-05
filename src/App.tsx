import React from 'react';
import {Hero} from './components/Hero';
import {LoveStory} from './components/LoveStory';
import {MemoriesGallery} from './components/MemoriesGallery';
import {VideoSection} from './components/VideoSection';
import {Footer} from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
            <Hero/>
            <LoveStory/>
            <MemoriesGallery/>
            <VideoSection/>
            <Footer/>
        </div>
    );
}