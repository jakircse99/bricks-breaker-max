import { mainMenu } from "./frontEnd/menu/mainMenu.js";
import { menuPush } from "./frontEnd/menu/logicalFundamentals/menuPush.js";
import { selectLevel } from "./frontEnd/menu/selectLevel.js";
import { credits } from "./frontEnd/menu/credits.js";
import { help } from "./frontEnd/menu/help.js";
import { StartGame } from "./backEnd/mainGame.js";
import { gameCanvas } from "./backEnd/gameCanvas.js";

//When a user click on "Back" button of any section and it will return this function.
function homePage() {
    //Pushing the main menu on start
    menuPush(mainMenu());

    //When user click on `Back` button then show the main menu
    function BackToHome(id) {
        const back = document.querySelector(id);
        if (id) {
            back.addEventListener("click", () => {
                //It should be return the "Main" menu.
                homePage();
            })
        }
    }



    //When a user clicks on "Select Level" button then it should be run this function.
    const selectLevelId = document.querySelector("#selectLevel");
    if (selectLevelId) {
        selectLevelId.addEventListener("click", () => {

            menuPush(selectLevel());
            BackToHome("#selectLevelToMainMenu")

        })
    }

    //When a user clicks on "Credits" button then it should be run this function.
    const creditsId = document.querySelector("#credits");
    creditsId.addEventListener("click", () => {

        menuPush(credits());
        BackToHome("#creditsToMainMenu")

    })


    //When a user clicks on "Help" button then it should be run this function.
    const helpId = document.querySelector("#help");
    helpId.addEventListener("click", () => {

        menuPush(help());
        BackToHome("#helpToMainMenu")

    })

    //When a user clicks on "New Game" buttn then it should start a new game
    const newGameId = document.querySelector("#newGame");
    newGameId.addEventListener("click",()=>{
        menuPush(gameCanvas());
        StartGame();
    })
}

homePage();