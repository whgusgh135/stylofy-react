import React from 'react';
import { Header } from './home/Header';
import { About } from './home/About';
import { Features } from './home/Features';
import HairdresserList from './booking/HairdresserList';
import { Contact } from './home/Contact';
import { Footer } from './home/Footer';

export function Main() {
    return (
        <div>
            <Header />
            <About />
            <Features />
            <HairdresserList />
            <Contact />
            <Footer />
        </div>
    )
}