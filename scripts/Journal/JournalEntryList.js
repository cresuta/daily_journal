import { useJournalEntries } from "../Journal/JournalDataProvider.js";
import { JournalEntryComponent } from "../Journal/JournalEntry.js";

const entryLog = document.querySelector('.journal-entries');

export const EntryListComponent = () => {

    const entries = useJournalEntries();

    for(let entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry);
    }
}