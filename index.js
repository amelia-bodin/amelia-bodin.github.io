document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById('placeholder');

    function updateChart(chartType) {
        CONFIG.chartType = chartType;

        var viz = Vizabi(CONFIG.chartType, placeholder, CONFIG);
    }

    document.getElementById('tab-bubble').addEventListener('click', function () {
        updateChart('BubbleChart');
    });

    document.getElementById('tab-line').addEventListener('click', function () {
        updateChart('LineChart');
    });

    document.getElementById('tab-bar').addEventListener('click', function () {
        updateChart('BarRankChart');
    });

    updateChart('BubbleChart');
});
