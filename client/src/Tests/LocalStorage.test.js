import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ProtectedApp from '../Components/Compounds/Protected.ProtectedApp';


const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

const localStorageTest = (() => {
  let store = {};
  return {
    getItem(activeRoute) {
      return store[activeRoute];
    },
    setItem(activeRoute, undefined) {
      store[activeRoute] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(activeRoute) {
      delete store[activeRoute];
    }
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

it('protectedapp local storage test', () => {
  //look at the item in localstorage
  localStorageMock();
  render(<ProtectedApp />)
  expect(window.localStorage.setItem).toHaveBeenCalledWith('activeRoute', 'yes')
});