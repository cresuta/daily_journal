
export const JournalEntryComponent = (entry, mood, instructor) => {
    if (mood.label === 'Happy') {
        return `
        <div class="card entry shadow p-3 mb-5 bg-white rounded" id="${entry.id}" style="width: 18rem;">
        <i class="bi bi-journal-bookmark-fill notebook-icon"></i>
        <div class="card-body">
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">Instructor: ${instructor.first_name} ${instructor.last_name}</p>
          <p class="card-text">${entry.entry}</p>
          <i class="bi bi-emoji-smile mood"></i>
        </div>
        </div>
        `
    } else if (mood.label === 'Ok') {
        return `
        <div class="card entry shadow p-3 mb-5 bg-white rounded" id="${entry.id}" style="width: 18rem;">
        <i class="bi bi-journal-bookmark-fill notebook-icon"></i>
        <div class="card-body">
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">Instructor: ${instructor.first_name} ${instructor.last_name}</p>
          <p class="card-text">${entry.entry}</p>
          <i class="bi bi-emoji-neutral mood"></i>
        </div>
        </div>
    `
    } else {
        return `
        <div class="card entry shadow p-3 mb-5 bg-white rounded" id="${entry.id}" style="width: 18rem;">
        <i class="bi bi-journal-bookmark-fill notebook-icon"></i>
        <div class="card-body">
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">Instructor: ${instructor.first_name} ${instructor.last_name}</p>
          <p>${entry.entry}</p>
          <i class="bi bi-emoji-frown mood"></i>
        </div>
        </div>
    `
    }
}