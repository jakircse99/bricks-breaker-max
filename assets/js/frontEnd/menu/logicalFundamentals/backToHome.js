import { mainMenu } from "../mainMenu.js";
import { menuPush } from "./menuPush.js";

export function backToHome() {
    menuPush(mainMenu());
}