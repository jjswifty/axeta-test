import { Header } from "./components/Header"
import './App.sass'
import { MainSection } from "./components/MainSection"

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <MainSection />
            </main>
		</div>
    );
}

export default App;
