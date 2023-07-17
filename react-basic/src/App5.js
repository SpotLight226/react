import { Fragment } from "react";
import IterationComponent from "./component/IterationComponent";
import IterationComponent2 from "./component/IterationComponent2";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";
const App = () => {
  return (
    <Fragment>
      <IterationComponent />

      <hr />

      <IterationComponent2 />

      <hr />

      <IterationComponentQ />

      <hr />

      <IterationComponentQ2 />
    </Fragment>
  );
};

export default App;
