var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        this.tasks.push({ id: this.currentId++, name: name, status: "Pending" });
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task) {
            task.status = "Completed";
        }
        else {
            console.log("Task with ID ".concat(id, " not found."));
        }
    };
    TaskManager.prototype.displayTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        });
    };
    return TaskManager;
}());

var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
