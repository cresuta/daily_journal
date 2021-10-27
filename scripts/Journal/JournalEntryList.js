import { useJournalEntries, getJournalEntries } from "../Journal/JournalDataProvider.js";
import { JournalEntryComponent } from "../Journal/JournalEntry.js";

const contentTarget = document.querySelector('.journal-entries');

export const EntryListComponent = () => {

    getJournalEntries()
    .then(() => {
        let journalEntryArray = useJournalEntries();
        let journalEntryListHTML = "";
        journalEntryArray.forEach((singleEntry) => {
            journalEntryListHTML += JournalEntryComponent(singleEntry);
        })
        
        contentTarget.innerHTML = `
        ${journalEntryListHTML}
        `
    })
}