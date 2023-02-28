export function mainMenu() {
   return  `
<div class="backdrop-blur-sm bg-[#111827bd] border border-gray-500 rounded w-full h-1/2 md:w-1/2 lg:w-1/3">
  <section class="flex flex-col items-center h-full justify-center" id="mainMenu">
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1" id="newGame">New Game</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1" id="continueGame">Continue Game</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1" id="selectLevel">Select Level</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1" id="credits">Credits</h2>
    <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-1" id="help">Help</h2>
  </section>
</div>
   `;
}