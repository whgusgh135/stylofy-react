import React from 'react';
import { Header } from './home/Header';
import { About } from './home/About';
import { Features } from './home/Features';
import HairdresserList from './booking/HairdresserList';


export function Main() {
    return (
        <div>
            <Header />
            <About />
            <Features />
            <HairdresserList />
        </div>
    )
}