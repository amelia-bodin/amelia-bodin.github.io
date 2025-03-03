document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById('placeholder');

    // Function to update the chart based on selected chart type
    function updateChart(chartType) {
        // Choose the correct configuration based on the chart type
        let config;
        switch (chartType) {
            case 'BubbleChart':
                config = CONFIG_BUBBLE;
                break;
            case 'LineChart':
                config = CONFIG_LINE;
                break;
            case 'BarRankChart':
                config = CONFIG_BARRANK;
                break;
            default:
                config = CONFIG_BUBBLE; // Default to BubbleChart if no match
                break;
        }

        // Create the chart using the selected configuration
        if (window.viz) {
            window.viz.destroy(); // Destroy the current chart before creating a new one
        }

        window.viz = Vizabi(chartType, placeholder, config); // Create the new chart
    }

    // Set up event listeners for the buttons
    document.getElementById('tab-bubble').addEventListener('click', function () {
        updateChart('BubbleChart');
    });

    document.getElementById('tab-line').addEventListener('click', function () {
        updateChart('LineChart');
    });

    document.getElementById('tab-bar').addEventListener('click', function () {
        updateChart('BarRankChart');
    });

    // Initialize with the default chart type
    updateChart('BubbleChart');
});
