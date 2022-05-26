import {ouch} from "./app/utils/ouch";
import {data} from "./app/utils/hobbies";
import {listHobbies} from "./app/utils/getHobbies";
import "../src/main.scss";
ouch();
listHobbies(data);