import { Provider } from "react-redux";
import store from "./redux/store";
import "./app.less";
import "./common.less";

export const App = props => {


  // this.props.children 是将要会渲染的页面
  // return this.props.children
  return <Provider store={store}>{props.children}</Provider>;
};
