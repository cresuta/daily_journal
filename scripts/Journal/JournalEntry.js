
export const JournalEntryComponent = (entry, mood, instructor) => {
    if (mood.label === 'Happy') {
        return `
        <div class="card entry shadow p-3 mb-5 bg-white rounded" id="${entry.id}" style="width: 18rem;">
        <div class="card-heading">
          <i class="bi bi-emoji-smile mood"></i>
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
        </div>
        <div class="card-body">
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">Instructor: ${instructor.first_name} ${instructor.last_name}</p>
          <p class="card-text">${entry.entry}</p>
        </div>
        <div class="card-btns">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteNote-">
                <i class="bi bi-trash" id="deleteBtn-"></i></button>
            
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="editNote-">
                <i class="bi bi-pencil-square" id="editBtn-"></i></button>
        </div>
        </div>
        `
    } else if (mood.label === 'Ok') {
        return `
        <div class="card entry shadow p-3 mb-5 bg-white rounded" id="${entry.id}" style="width: 18rem;">
        <div class="card-heading">
          <i class="bi bi-emoji-neutral mood"></i>
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
        </div>
        <div class="card-body">
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">Instructor: ${instructor.first_name} ${instructor.last_name}</p>
          <p class="card-text">${entry.entry}</p>
        </div>
        <div class="card-btns">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteNote-">
                <i class="bi bi-trash" id="deleteBtn-"></i></button>
            
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="editNote-">
                <i class="bi bi-pencil-square" id="editBtn-"></i></button>
        </div>
        </div>
    `
    } else {
        return `
        <div class="card entry shadow p-3 mb-5 bg-white rounded" id="${entry.id}" style="width: 18rem;">
        <div class="card-heading">
        <i class="bi bi-emoji-frown mood"></i>
        <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
        </div>
        <div class="card-body">
          
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">Instructor: ${instructor.first_name} ${instructor.last_name}</p>
          <p>${entry.entry}</p>
        </div>
        <div class="card-btns">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteNote-">
                <i class="bi bi-trash" id="deleteBtn-"></i></button>
            
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="editNote-">
                <i class="bi bi-pencil-square" id="editBtn-"></i></button>
        </div>
        </div>
    `
    }
}