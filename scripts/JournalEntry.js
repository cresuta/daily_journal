
export const JournalEntryComponent = (entry) => {
    return `
        <article id="entry-${entry.id}">
            <h2>${entry.concept}</h2>
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
            <p>${entry.mood}</p>
        </article>
    `
}