import { useState, useEffect } from 'react';
import { Header, Home, About, Skills, Projects, Contact, Footer } from '~/components/';
import PacmanLoader from 'react-spinners/PacmanLoader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const loadingId = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(loadingId);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="flex items-center justify-center w-full h-screen">
                    <PacmanLoader color={'#ffdf00'} loading={loading} size={30} />
                </div>
            ) : (
                <>
                    <Header />
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
