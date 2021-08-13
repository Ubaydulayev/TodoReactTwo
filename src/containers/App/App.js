import { Provider } from "react-redux";
import store from "../../redux/store";
import Todo from "../Todo";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container d-flex justify-content-center py-5">
          <div className="row w-100 justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6 col-12">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
