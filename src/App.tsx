import { Header } from "./components/Header"
import './App.sass'
import { MainSection } from "./components/MainSection"
import { YMaps } from 'react-yandex-maps'
import { store } from "./store"
import { StoreContext } from "storeon/react"
import { Layout } from "./components/Layout"


const App = () => {
    return (
        <YMaps>
            <StoreContext.Provider value={store}>
                <div className="App">
                    <Header />
                    <Layout>
                        <MainSection />
                    </Layout>
                </div>
            </StoreContext.Provider>
        </YMaps>
    );
}

export default App;
