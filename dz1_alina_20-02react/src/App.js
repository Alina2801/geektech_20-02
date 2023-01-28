import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import TodoPage from "./page/TodoPage";
import StyleProvider from "./providers/StyleProvider";



export const Context = createContext(null)

function App() {
    const [ search, setSearch ] = useState('')

    return (
        <Context.Provider value={{ search, setSearch }}>
            <div className="App">
                <StyleProvider>
                    <TodoPage/>
                </StyleProvider>
            </div>
        </Context.Provider>
    );
}

export default App;



