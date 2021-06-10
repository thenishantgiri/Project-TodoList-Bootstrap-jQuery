let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnSort = $("#btnSort");
let btnCleanup = $("#btnCleanup");
let ulTasks = $("#ulTasks");

btnAdd.click(() => {
    let listItem = $('<li>', {'class': 'list-group-item', text: inpNewTask.val()})

    //appending the task to the list
    ulTasks.append(listItem)

    //resetting the input box to empty string
    inpNewTask.val('')
});

btnCleanup.click(() => inpNewTask.val(''))