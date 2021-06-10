let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnSort = $("#btnSort");
let btnCleanup = $("#btnCleanup");
let ulTasks = $("#ulTasks");

function addItem() {

    let listItem = $('<li>', {'class': 'list-group-item', text: inpNewTask.val()})

    //setting the class of list item to disabled (on click)
    listItem.click(() => {
        listItem.toggleClass('done')
    })

    //appending the task to the list
    ulTasks.append(listItem)

    //resetting the input box to empty string
    inpNewTask.val('')
}

function clearDone() {
    $('#ulTasks .done').remove()
}

function sortTask() {
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons(valIsEmpty) {
    if (valIsEmpty) {
        btnReset.prop('disabled', true)
        btnAdd.prop('disabled', true)
    } else {
        btnReset.prop('disabled', false)
        btnAdd.prop('disabled', false)
    }
}

//Handling "enter" keypress
inpNewTask.keypress((key) => {
    if (key.which == 13) addItem()
})

inpNewTask.on('input', () => {
    toggleInputButtons(inpNewTask.val() == '')
})

btnAdd.click(() => addItem());

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons(true)
})

btnCleanup.click(() => clearDone())

btnSort.click(() => sortTask())