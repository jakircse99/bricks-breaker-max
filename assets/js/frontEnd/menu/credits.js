export function credits() {
    return `
    
    <!-- "Credits Section" section design started -->
    <div class="backdrop-blur-sm bg-[#111827bd] border border-gray-500 rounded w-full h-fit md:w-1/2 lg:w-1/3">
      <section class="flex flex-col items-center justify-center" id="creditsMenu">
         <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-6 underline" id="credits">Credits</h2>
         <section class="flex flex-col w-full justify-center">

          <h2 class="font-game text-white text-xl md:text-3xl text-center">Developed by</h2>

          <p class="font-game text-white p-5 md:text-2xl text-center">
            Jakir Hossain, Raktim Proloy Shakib Buyan, Joshim Uddin
          </p>
         </section>

         <!-- "Back to menu" button design section started -->
         <div class="w-full flex justify-start my-5">
         <button class="font-game text-white ml-5 cursor-game bg-[#11182757] px-4 py-1" id="creditsToMainMenu">Back</button>
         </div>
         <!-- "Back to menu" button design section ended -->
      </section>
</div>
<!-- "Credits Section" section design ended -->
    
    `
}