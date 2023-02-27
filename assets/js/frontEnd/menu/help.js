export function help() {
    return `
    
    <!-- "Help Section" section design started -->
    <div class="backdrop-blur-sm bg-[#111827bd] border border-gray-500 rounded w-full h-fit xl:w-1/2">
      <section class="flex flex-col items-center justify-center" id="helpMenu">
         <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-6 underline" id="help">Help</h2>
         <section class="flex flex-col w-full justify-center p-5 md:pl-14">
          <div class="flex flex-col">
            <span class="font-game text-white text-xl md:text-2xl my-3 underline">Play with PC:</span>
            <span class="font-game text-white text-xl md:text-2xl">
                Use ‘A’, ‘D’ or ‘Left arrow’
                ‘Right arrow’ key to move 
                the bar ‘Left’ and ‘Right’ or
                use your mouse to control it.
            </span>
            <span class="font-game text-white text-xl md:text-2xl">
              Press ‘Esc’ key to puse or resume the game.
              Press ‘F1’ key to unlock 
              the mouse.
            </span>
          </div>

          <div class="flex flex-col mt-7">
            <span class="font-game text-white text-xl md:text-2xl my-3 underline">Play with Mobile:</span>
            <span class="font-game text-white text-xl md:text-2xl">
                Simply drag you position 
                to control the bar.
            </span>
          </div>

         </section>

         <!-- "Back to menu" button design section started -->
         <div class="w-full flex justify-start my-5">
         <button class="font-game text-white ml-5 cursor-game bg-[#11182757] px-4 py-1" id="helpToMainMenu">Back</button>
         </div>
         <!-- "Back to menu" button design section ended -->
      </section>
</div>
<!-- "Help Section" section design ended -->
    
    `;
}