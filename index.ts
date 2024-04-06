#!/usr/bin/env node
import inquirer from "inquirer"

let todo_List: string[] = []
let condition = true

while (condition === true) {
    //--------------------------------------------OPERATION TASK-----------------------------------------------------------------
    let operator_Task = await inquirer.prompt([
        { message: "Select the Task", type: "list", name: "operatortask", choices: ["ADD", "DELETE", "VIEW", "UPDATE"] }
    ])
    //----------------------------------------------------ADD-------------------------------------------------------------
    if (operator_Task.operatortask === "ADD") {
        let add_Task = await inquirer.prompt([
            { message: "Enter Which Task You Want to Add?", type: "input", name: "taskadd" }
        ])
        if (add_Task.taskadd !== "") {
            todo_List.push(add_Task.taskadd)
            console.log(todo_List);
        }
        else { console.log("You didn't Enter Any Task") }
    }
    //-----------------------------------------------DELETE----------------------------------------------------------

    if (operator_Task.operatortask === "DELETE") {
        let index_element = await inquirer.prompt([
            { message: "Which Task You Want to Delete", type: "list", name: "taskdelete", choices: todo_List }
        ])
        let deleted_Task = todo_List.indexOf(index_element.taskdelete)
        if (deleted_Task >= 0) {
            todo_List.splice(deleted_Task, 1);
            console.log("You Deleted", index_element.taskdelete)
            console.log(todo_List);
        }
    }
    //------------------------------------------------VIEW-----------------------------------------------------

    if (operator_Task.operatortask === "VIEW") {
        if (todo_List.length === 0) { console.log("List is Empty") }
        else { console.log(todo_List); }
    }
    //-----------------------------------------------UPDATE--------------------------------------------------------
    if (operator_Task.operatortask === "UPDATE") {
        console.log("Your Updated List", todo_List)
    }


    let continue_Task = await inquirer.prompt([
        { message: "Do you Want to Continue", type: "confirm", name: "continue", default: true }
    ])

    if (continue_Task.continue === false) {
        condition = false
    }

}




console.log("Your List", todo_List)


