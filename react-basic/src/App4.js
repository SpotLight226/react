import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2";
import EventComponentQ from "./component/EventComponentQ";
import EventComponentQ2 from "./component/EventComponentQ2";
function App() {
  return (
    <div>
      {/* App.js 에서 EventComponet 사용 */}
      <EventComponent />
      <hr />
      <EventComponent2 />
      <hr />
      <EventComponentQ />

      <hr />
      <EventComponentQ2 />
    </div>
  );
}

export default App;
