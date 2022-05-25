import {ouch} from "./app/utils/ouch";
import {data} from "./app/utils/hobbies" //Not Using JSONP. Will be fixed. JSONP with Webpack.
import {makeHobbies} from "./app/utils/getHobbies";
import "./main.css";
ouch();
makeHobbies(data);