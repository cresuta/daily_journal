import { useJournalEntries, getJournalEntries } from "../Journal/JournalDataProvider.js";
import { JournalEntryComponent } from "../Journal/JournalEntry.js";
import { getInstructors, useInstructors } from "./InstructorDataProvider.js";
import { getMoods, useMoods } from "./MoodDataProvider.js";

const contentTarget = document.querySelector('.journal-entries');

export const EntryListComponent = () => {

    getJournalEntries()
    .then(getMoods)
    .then(getInstructors)
    .then(() => {
        const journalEntryArray = useJournalEntries();
        const moodsArray = useMoods();
        const instructorsArray = useInstructors();
        let journalEntryListHTML = "";
        // journalEntryArray.forEach((singleEntry) => {
        //     journalEntryListHTML += JournalEntryComponent(singleEntry);
        // })

        journalEntryArray.map(entry => {
            const relatedMood = moodsArray.find(mood => mood.id === entry.moodId)
            const relatedInstructor = instructorsArray.find(instructor => instructor.id === entry.instructorId)
            journalEntryListHTML += JournalEntryComponent(entry,relatedMood,relatedInstructor);
            contentTarget.innerHTML = `
             ${journalEntryListHTML}
            `
        })
        
        // contentTarget.innerHTML = `
        // ${journalEntryListHTML}
        // `
    })
}