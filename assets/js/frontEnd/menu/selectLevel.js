export function selectLevel() {
    return `
    
    <!-- "Select level" section design started -->
                     <div class="backdrop-blur-sm bg-[#111827bd] border border-gray-500 rounded w-full h-fit md:w-1/2 lg:w-1/2">
                     <section class="flex flex-col items-center justify-center" id="selectLevelMenue">
                        <h2 class="font-game text-2xl md:text-4xl text-gray-100 my-6 underline" id="selectLevel">Select Level</h2>
                        <section class="flex w-full justify-center">

                           <div class="flex flex-wrap justify-center mb-5">

                              
                              <!-- From this line, all of the levels should be shown only mobile users -->
                              <div class="font-game m-2 text-gray-100 bg-green-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 1</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 2</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 3</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 4</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 5</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 6</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 7</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 8</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 9</span>
                              </div>

                              <div class="font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 10</span>
                              </div>

                              <!-- Ended of all the levels should be shown only mobile users -->


                              <!-- From this line, all of the levels should be shown only Tablet and PC users -->

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 11</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 12</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 13</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 14</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 15</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 16</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 17</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 18</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 19</span>
                              </div>

                              <div class="hidden md:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 20</span>
                              </div>
                              
                              <!-- Ended all of the levels should be shown only Tablet and PC users -->

                              
                              <!-- From this line, all of the levels should be shown only PC users -->
                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 21</span>
                              </div>

                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 22</span>
                              </div>

                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 23</span>
                              </div>

                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 24</span>
                              </div>

                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 25</span>
                              </div>

                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 26</span>
                              </div>

                              <div class="hidden lg:flex font-game m-2 text-gray-100 bg-red-700 rounded-full h-16 w-16 text-center">
                                 <span class="flex flex-col justify-center items-center h-full text-xs p-1">Level 27</span>
                              </div>
                              <!-- Ended of all levels should be shown only PC users-->
                           </div>
                        </section>

                        <!-- "Back to menu" button design section started -->
                        <div class="w-full flex justify-start my-5">
                        <button class="font-game text-white ml-5 cursor-game bg-[#11182757] px-4 py-1" id="selectLevelToMainMenu">Back</button>
                        </div>
                        <!-- "Back to menu" button design section ended -->
                     </section>
            </div>
          <!-- "Select level" section design ended -->
    `
}
