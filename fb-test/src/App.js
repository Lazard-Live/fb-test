import './App.scss';
import './fonts/fonts.scss'
import catCards from "./catCard/catCards";

function App() {
    return (
        <div className="App">
            <main className="App__content">
                <h1 className="App__title"> Ты сегодня покормил кота?</h1>
                {catCards()}
            </main>
        </div>
    );
}

export default App;
