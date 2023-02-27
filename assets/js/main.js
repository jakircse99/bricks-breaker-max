import { backToHome } from "./frontEnd/menu/logicalFundamentals/backToHome.js";
import {mainMenu} from "./frontEnd/menu/mainMenu.js";
import {menuPush} from "./frontEnd/menu/logicalFundamentals/menuPush.js";
import {selectLevel} from "./frontEnd/menu/selectLevel.js";
import { credits } from "./frontEnd/menu/credits.js";
import { help } from "./frontEnd/menu/help.js";

//It should return the main menu on start
menuPush(mainMenu());
//When a user clicks on "Select Level" button then it should be run this function.
const selectLevelId = document.querySelector("#selectLevel");
if (selectLevelId) {
    selectLevelId.addEventListener("click", () => {

//It should be return the "Select Level" menu.
        menuPush(selectLevel());



//When a user clicks on "Back" button in "Select Level" then it should be run this function and should be return to the main menu.
        const selectLevelBack = document.querySelector("#selectLevelToMainMenu");
        if (selectLevelBack) {
            selectLevelBack.addEventListener("click", () => {


    //It should be return the "Main" menu.
                backToHome();
            })
        }


    })
}





//When a user clicks on "Credits" button then it should be run this function.
const creditsId = document.querySelector("#credits");

creditsId.addEventListener("click",()=>{

    //It should be return the "Credits" menu.
    menuPush(credits());

    //When a user clicks on "Back" button in "Credits" then it should be run this function and  should be return to the main menu.
    const creditsIdBack = document.querySelector("#creditsToMainMenu");
    if (creditsIdBack) {
        creditsIdBack.addEventListener("click", () => {


    //It should be return the "Main" menu.
            backToHome();
        })
    }

})




//When a user clicks on "Help" button then it should be run this function.
const helpId = document.querySelector("#help");

helpId.addEventListener("click",()=>{

    //It should be return the "Help" menu.
    menuPush(help());


    //When a user clicks on "Back" button in "Help" then it should be run this function and  should be return to the main menu.
    const helpIdBack = document.querySelector("#helpToMainMenu");
    if (helpIdBack) {
        helpIdBack.addEventListener("click", () => {

    //It should be return the "Main" menu.
            backToHome();
        })
    }

})
