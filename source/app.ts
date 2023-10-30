import "./utils/wrapper.js";
import {Router} from "./router/MainRouter.js"
import { HomePage } from "./components/home/main.js";

const $app = document.getElementById('app');
if(!$app)
    throw wiiuDialog.alert("Warning: Main element was not found.", "Exit")
const MainRouter = new Router($app);

MainRouter.get('/', new HomePage())

MainRouter.enroute();
console.log("App is loaded")