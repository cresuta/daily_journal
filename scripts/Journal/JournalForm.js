import { getInstructors, useInstructors } from "./InstructorDataProvider.js";
import { getJournalEntries, saveJournalEntry, useJournalEntries } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js";
import { getMoods, useMoods } from "./MoodDataProvider.js";

const journalForm = document.querySelector('.journal-form');

document.querySelector("body").addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "btn-record-journal") {
    if (!document.querySelector('#journalDate').value || !document.querySelector('#journalConcepts').value || !document.querySelector('#journalEntry').value
    || !document.querySelector('#journalMood').value || !document.querySelector('#journalInstructor').value) {
      alert('Please fill out the entire form.')
    } else {
      // Make a new journal entry object
    const newJournalEntry = {
      date: document.querySelector('#journalDate').value,
      concept: document.querySelector('#journalConcepts').value,
      entry: document.querySelector('#journalEntry').value,
      moodId: parseInt(document.querySelector('#journalMood').value),
      instructorId: parseInt(document.querySelector('#journalInstructor').value)
    }  

    // Clearing all form values after recording new journal entry
    document.querySelector('#journalDate').value = "";
    document.querySelector('#journalConcepts').value = "";
    document.querySelector('#journalEntry').value = "";
    document.querySelector('#journalMood').value = "";
    document.querySelector('#journalInstructor').value = "";

    console.log(newJournalEntry);

    // Change API state and application state
    saveJournalEntry(newJournalEntry)
    .then(EntryListComponent)
  }
    }
})

export const JournalFormComponent = () => {
  getMoods()
  .then(getInstructors)
  .then(() => {
    const allMoods = useMoods();
    const allInstructors = useInstructors();
    journalForm.innerHTML = `
    <section class="journal-form">
          <h2>Daily Journal</h2>
          <fieldset class="journal-date">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate" />
          </fieldset>
          <fieldset class="journal-concepts">
            <label for="journalConcepts">Concepts covered</label>
            <input type="text" name="journalConcepts" id="journalConcepts" />
          </fieldset>
          <fieldset class="journal-entry">
            <label for="journalEntry">Journal Entry</label>
            <textarea
              name="text"
              id="journalEntry"
              cols="30"
              rows="2"
            ></textarea>
          </fieldset>
          <fieldset class="journal-instructor">
            <label for="journalInstructor">Instructor</label>
            <select name="" id="journalInstructor">
            ${
              allInstructors.map((instructor) => {
                  return `<option value="${instructor.id}">${instructor.first_name} ${instructor.last_name}</option>`
              }).join("")
          }
            </select>
          </fieldset>
          <fieldset class="journal-mood">
            <label for="journalMood">Mood for the day</label>
            <select name="" id="journalMood">
            ${
              allMoods.map((mood) => {
                  return `<option value="${mood.id}">${mood.label}</option>`
              }).join("")
          }
            </select>
          </fieldset>
        <button type="button" class="btn btn-light btn-outline-dark" id="btn-record-journal">
          <i class="bi bi-journal-check"></i>
          Record Journal Entry
        </button>
    </section>
    `
  }) 
}