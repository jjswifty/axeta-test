import { Header } from "./components/Header"
import './App.sass'
import { MainSection } from "./components/MainSection"
import { YMaps } from 'react-yandex-maps'

const App = () => {
    return (
        <YMaps>
            <div className="App">
                <Header />
                <main>
                    <MainSection />
                </main>
            </div>
        </YMaps>
    );
}

export default App;
