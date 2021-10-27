
export const JournalEntryComponent = (entry) => {
    if (entry.mood === 'Happy') {
        return `
        <div class="card entry" id="${entry.id}" style="width: 18rem;">
        <i class="bi bi-journal-bookmark-fill notebook-icon"></i>
        <div class="card-body">
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
          <p>${entry.entry}</p>
          <i class="bi bi-emoji-smile mood"></i>
        </div>
        </div>
        `
    } else if (entry.mood === 'Ok') {
        return `
        <div class="card entry" id="${entry.id}" style="width: 18rem;">
        <i class="bi bi-journal-bookmark-fill notebook-icon"></i>
        <div class="card-body">
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
          <p>${entry.entry}</p>
          <i class="bi bi-emoji-neutral mood"></i>
        </div>
        </div>
    `
    } else {
        return `
        <div class="card entry" id="${entry.id}" style="width: 18rem;">
        <i class="bi bi-journal-bookmark-fill notebook-icon"></i>
        <div class="card-body">
          <h5 class="card-title">${entry.concept}</h5>
          <p class="card-text">${new Date(entry.date).toLocaleDateString('en-US')}</p>
          <p>${entry.entry}</p>
          <i class="bi bi-emoji-frown mood"></i>
        </div>
        </div>
    `
    }
}