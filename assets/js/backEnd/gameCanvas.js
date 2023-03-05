export function gameCanvas() {
    return `
    <div class="w-full h-full p-2 md:p-5 flex justify-center">
    <canvas id="mainGame" class="w-full md:w-1/2 h-[850px] backdrop-blur-sm bg-[#111827bd] rounded transition-all duration-500" id="newGameParent" ></canvas>
</div>
    `
}