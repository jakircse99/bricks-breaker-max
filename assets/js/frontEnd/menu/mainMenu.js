export function mainMenu() {
   return  `
<div class="backdrop-blur-sm bg-[#111827bd] border border-gray-500 rounded h-1/2 w-full  md:w-1/2 lg:w-1/3 transition-all duration-500" id="mainMenu">
  <section class="flex flex-col items-center h-full justify-center transition-opacity duration-500" id="mainMenuFirstChild">
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1 cursor-pointer" id="newGame">New Game</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1 cursor-pointer" id="continueGame">Continue Game</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1 cursor-pointer" id="selectLevel">Select Level</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1 cursor-pointer" id="credits">Credits</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1 cursor-pointer" id="help">Help</h2>
  </section>
</div>
   `;
}