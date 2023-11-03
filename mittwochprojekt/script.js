document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskCountMessage = document.getElementById("taskCountMessage");
    const resetButton = document.getElementById("resetButton");

    const tasks = document.querySelectorAll('input[name="task"]');

    // Event Listener für Änderungen in den Checkboxen
    tasks.forEach(task => {
        task.addEventListener("change", function() {
            let checkedTasks = document.querySelectorAll('input[name="task"]:checked');
            updateTaskCount(checkedTasks.length);
        });
    });

    // Event Listener für den Löschbutton
    resetButton.addEventListener("click", function() {
        tasks.forEach(task => {
            task.checked = false;
        });
        updateTaskCount(0);
    });

    // Funktion zum Aktualisieren der Aufgaben-Zählung und Anzeige
    function updateTaskCount(count) {
        taskCountMessage.textContent = `Sie haben ${count} Aufgaben erledigt.`;
    }
});
