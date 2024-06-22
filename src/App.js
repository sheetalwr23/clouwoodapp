import { Provider } from "react-redux";
import "./App.css";
import { ImageComponent } from "./ImageComponent";
import NavigateComponent from "./NavigateComponent";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="image-wrapper">
        <ImageComponent />
        <NavigateComponent />
      </div>
    </Provider>
  );
}

export default App;
