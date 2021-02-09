// Updating content
const editButton = document.createElement('button')
listOfnotes.addEventListener('click', function event => {
    if (event.target.classList.add)('edit')
    editButton.innerText = 'edit'
    noteEl.apppendChild(editButton)
    editButton.classList.add('edit')
}


 // ---Deleting content----
 const deleteButton = document.createElement('button')

 function deleteNote(delNote) {
console.log('delete function', deleteNote)
 }
//     deleteButton.innerText = 'delete'
//     noteEl.apppendChild(deleteButton)
//     deleteButton.classList.add('delete')
//    listOfnotes.addEventListener('click', function (event) {
//         if (event.target.classList.contains('delete')) {
//           deleteNote(event.target)
//         }