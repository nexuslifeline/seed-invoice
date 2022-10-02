import { useReducer, useContext, createContext } from 'react';

export const UserContext = createContext();
export const UserDispatchContext = createContext();

const reducer = (user, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...user, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = ({ children, initial }) => {
  const [user, dispatch] = useReducer(reducer, initial);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <UserDispatchContext.Provider value={dispatch}>
      {/*eslint-disable-next-line react/react-in-jsx-scope*/}
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const withUser = (Component) => {
  return function WrapperComponent(props) {
    return <UserContext.Consumer>{(state) => <Component {...props} currentUser={state} />}</UserContext.Consumer>;
  };
};

export const withUserDispatch = (Component) => {
  return function WrapperComponent(props) {
    return (
      <UserDispatchContext.Consumer>
        {(state) => <Component {...props} currentUserDispatch={state} />}
      </UserDispatchContext.Consumer>
    );
  };
};

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
