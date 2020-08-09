import { createContext, useContext } from 'react';
import { enableStaticRendering, useLocalObservable } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export const storeContext = createContext();

export const StoreProvider = ({ children, store }) => {
  const localStore = useLocalObservable(() => store);
  return (
    <storeContext.Provider value={localStore}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};

export const createStore = (initialStore) => {
  let store = {};
  store = { ...store, ...initialStore };
  return store;
};
