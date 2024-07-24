import React from 'react';
import './App.css';
import FlashcardGenerator from './FlashcardGenerator';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {' '}
                <h1>Welcome to react-flashcards demo</h1>
            </header>
            <FlashcardGenerator />
            <Footer />
        </div>
    );
}

export default App;
