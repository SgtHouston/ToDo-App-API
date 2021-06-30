const fieldset = document.getElementById('fieldset')
const button = document.createElement('button')
button.textContent = "Start To-Do App"
fieldset.appendChild(button)
fieldset.setAttribute('class', 'fieldset')
button.setAttribute('class', 'button')

button.addEventListener('click', function (event) {
    event.preventDefault()
    button.textContent = "Summoning To-Do App..."
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) { return response.json(); })
        .then(function (data) {
            const todolist = document.createElement("ol")
            fieldset.appendChild(todolist)
            button.textContent = "Refresh To-Do App"
            console.log(data)
            todolist.setAttribute('id', 'todolist')
            for (let index = 0; index < data.length; index++) {
    
                const listitem = document.createElement('li')
                listitem.textContent = data[index].title
                // ternery statement - question mark at the end 
                // of the data variable asks whether value is true or false.  
                // If it returns True, it is passed into parameter as 
                // first provided 'string' value. If return False 
                // it is passed into parameter as second provided 'string' value.
                listitem.setAttribute('class', data[index].completed?'completed':'incomplete')
                // original
                // listitem.setAttribute('class', data[index].completed)
                todolist.appendChild(listitem)
    
    
    
            }
        })
})