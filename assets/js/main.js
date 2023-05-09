import { mainMenu } from "./frontEnd/menu/mainMenu.js";
import { menuPush } from "./frontEnd/menu/logicalFundamentals/menuPush.js";
import { selectLevel } from "./frontEnd/menu/selectLevel.js";
import { credits } from "./frontEnd/menu/credits.js";
import { help } from "./frontEnd/menu/help.js";
import { StartGame } from "./backEnd/mainGame.js";
import { gameCanvas } from "./backEnd/gameCanvas.js";

//Expanding the height width
import { expandWidth } from "./frontEnd/menu/logicalFundamentals/expandWidth.js";
import { expandHeight } from "./frontEnd/menu/logicalFundamentals/expandHeight.js";


//When a user click on "Back" button of any section and it will return this function.
function homePage() {
    //Pushing the main menu on start
    menuPush(mainMenu());

    //When user click on `Back` button then show the main menu
    function BackToHome(parentId,firstChild,existingWidth,existingHeight,btnId) {
        const back = document.querySelector(btnId);
        if (btnId) {
            back.addEventListener("click", () => {

                expandWidth(parentId, firstChild,existingWidth,"lg:w-1/3"); //This width is only for main menu.
                expandHeight(parentId, existingHeight,"h-1/2") //This height only for main menu.
                setTimeout(() => {
                    
                //It should be return the "Main" menu.
                homePage();
                }, 500);
            })
        }
    }



    //When a user clicks on "Select Level" button then it should be run this function.
    const selectLevelId = document.querySelector("#selectLevel");
    if (selectLevelId) {
        selectLevelId.addEventListener("click", () => {

            expandWidth("#mainMenu", "#mainMenuFirstChild","lg:w-1/3","lg:w-1/2");
            expandHeight("#mainMenu", "h-1/2","h-[450px]")
            setTimeout(() => {

            menuPush(selectLevel());
            BackToHome("#selectLevelParent","#selectLevelFirstChild","lg:w-1/2", "h-[450px]", "#selectLevelToMainMenu");

                }, 500);

        })
    }

    const creditsId = document.querySelector("#credits");
    creditsId.addEventListener("click", () => {

        expandWidth("#mainMenu", "#mainMenuFirstChild","lg:w-1/3","lg:w-1/3");
        expandHeight("#mainMenu", "h-1/2","h-[350px]")

        setTimeout(() => {
        menuPush(credits());

        BackToHome("#creditMenu","#creditsMenuFirstChild","lg:w-1/3", "h-[350px]", "#creditsToMainMenu");
        }, 500);


    })


    const helpId = document.querySelector("#help");
    helpId.addEventListener("click", () => {


        expandWidth("#mainMenu", "#mainMenuFirstChild","lg:w-1/3","xl:w-1/2");
        expandHeight("#mainMenu", "h-1/2","h-[500px]");
        
        setTimeout(() => {
        menuPush(help());

        BackToHome("#helpMenu","#helpMenuFirstChild","xl:w-1/2", "h-[550px]", "#helpToMainMenu");
    }, 500);


    })

    const newGameId = document.querySelector("#newGame");
    newGameId.addEventListener("click",()=>{

        expandWidth("#mainMenu", "#mainMenuFirstChild","lg:w-1/3","md:w-1/2");
        expandHeight("#mainMenu", "h-1/2","h-[850px]")

        setTimeout(() => {
            menuPush(gameCanvas());
            StartGame();
        }, 500);

    })
}
homePage();