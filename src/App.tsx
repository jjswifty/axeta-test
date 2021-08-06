import { Header } from "./components/Header"
import './App.sass'
import { MainSection } from "./components/MainSection"
import { YMaps } from 'react-yandex-maps'
import { store } from "./store"
import { StoreContext } from "storeon/react"


const App = () => {
    return (
        <YMaps>
            <StoreContext.Provider value={store}>
                <div className="App">
                    <Header />
                    <main>
                        <MainSection />
                    </main>
                </div>
            </StoreContext.Provider>
        </YMaps>
    );
}

export default App;
