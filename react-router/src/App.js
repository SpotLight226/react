import A from "./component3/A";
import B from "./component3/B";
import { UserProvider } from "./context/ContextAPI2";
const App = () => {
  return (
    // return <UserContext.Provider value={value}>{children}</UserContext.Provider>; 여기서 A가 children
    <UserProvider>
      <A />
      <B />
    </UserProvider>
  );
};

export default App;
