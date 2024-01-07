import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from "./store/store";

interface State {
    store: Store
}

const store: Store = new Store()

export const Context: React.Context<State> = createContext<State>({
    store
})

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(store.user.fullname)
root.render(
    <Context.Provider value={{
        store
    }}>

            <App />
    </Context.Provider>
);