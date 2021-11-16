import { useJournalEntries, getJournalEntries } from "../Journal/JournalDataProvider.js";
import { JournalEntryComponent } from "../Journal/JournalEntry.js";
import { getMoods, useMoods } from "./MoodDataProvider.js";

const contentTarget = document.querySelector('.journal-entries');

export const EntryListComponent = () => {

    getJournalEntries()
    .then(getMoods)
    .then(() => {
        const journalEntryArray = useJournalEntries();
        const moodsArray = useMoods();
        let journalEntryListHTML = "";
        // journalEntryArray.forEach((singleEntry) => {
        //     journalEntryListHTML += JournalEntryComponent(singleEntry);
        // })

        journalEntryArray.map(entry => {
            const relatedMood = moodsArray.find(mood => mood.id === entry.moodId)
            journalEntryListHTML += JournalEntryComponent(entry,relatedMood);
            contentTarget.innerHTML = `
             ${journalEntryListHTML}
            `
        
        })
        
        // contentTarget.innerHTML = `
        // ${journalEntryListHTML}
        // `
    })
}