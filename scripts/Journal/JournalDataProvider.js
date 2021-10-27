/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const journalEntries = [];

export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    ).slice()
    return sortedByDate
}

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then (entries => {
        journalEntries = entries
    })
}
