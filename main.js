const url = 'http://localhost:3000/notes'
const listOfnotes = "#form-id"
// all the notes from the note taking page.
console.log('form work?', listOfnotes)

fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
      console.log('Data showing?', data) 
      for (let note of data)
      console.log('Note working?', note)
    })

    function renderNoteitem(noteObj, note) {
    const noteEl = document.createElement('li')
    noteEl.innerHTML = `<p>{$noteObj.id}</p>`
    noteEl.id = noteObj.id
    noteEl.id.apppendChild(noteEl)
    }

    // // Sends data
    
   listOfnotes.addEventListner('submit', function (event) {
       event.preventDefault()
       const newNote = document.querySelector('textEntered').value
       console.log('newNote')
   })
    function createNote(newNote) {
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    item: newNote
                })
            })
            .then(res => res.json())
            .then(data => {
                renderNoteItem(data) })
            }