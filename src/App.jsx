// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import AboutMe from "./AboutMe.jsx";
import BusinessCard from "./BusinessCard.jsx";
import profiles from "./../data/profiles.json";

function App() {
    // const [count, setCount] = useState(0);

    return (
        // <>
        //     <div>
        //         <a href="https://vite.dev" target="_blank">
        //             <img src={viteLogo} className="logo" alt="Vite logo" />
        //         </a>
        //         <a href="https://react.dev" target="_blank">
        //             <img
        //                 src={reactLogo}
        //                 className="logo react"
        //                 alt="React logo"
        //             />
        //         </a>
        //     </div>
        //     <h1>Vite + React</h1>
        //     <div className="card">
        //         <button onClick={() => setCount((count) => count + 1)}>
        //             count is {count}
        //         </button>
        //         <p>
        //             Edit <code>src/App.jsx</code> and save to test HMR
        //         </p>
        //         <AboutMe></AboutMe>
        //     </div>
        //     <p className="read-the-docs">
        //         Click on the Vite and React logos to learn more
        //     </p>
        // </>
        <section>
            <header>
                <h1>Look at me business cards!</h1>
            </header>

            <div className="cards">
                {profiles.map(
                    (
                        { name, email, phone, title, profileImage, tagline },
                        idx
                    ) => {
                        return (
                            <BusinessCard
                                key={idx}
                                name={name}
                                email={email}
                                phone={phone}
                                title={title}
                                profileImage={profileImage}
                                tagLine={tagline}
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
}

export default App;
