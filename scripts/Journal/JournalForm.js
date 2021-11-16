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
    <form class="row g-3 note-form text-white bg-secondary p-3 journal-form">
      <h2>Daily Journal</h2>
      <div class="col-md-12">
          <label for="journalDate">Date of entry</label>
          <input type="date" name="journalDate" id="journalDate" class="form-control" />
      </div>
      <div class="col-md-12">
          <label for="journalMood">Mood Of The Day</label>
          <select name="" class="form-select" id="journalMood">
            ${
                allMoods.map((mood) => {
                  return `<option value="${mood.id}">${mood.label}</option>`
                }).join("")
            }
          </select>
      </div>
      <div class="col-md-12">
          <label for="journalConcepts">Concepts Covered</label>
          <input type="text" name="journalConcepts" id="journalConcepts" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="noteSuspect" class="form-label">Instructor</label>
        <select name="noteSuspect" class="form-control" id="journalInstructor">
          <option value="0">Select an instructor...</option>
              ${
                 allInstructors.map((instructor) => {
                     return `<option value="${instructor.id}">${instructor.first_name} ${instructor.last_name}</option>`
                 }).join("")
              }
        </select> 
      </div>
      <div class="col-12">
        <label for="journalEntry">Journal Entry</label>
        <input type="text" name="journalEntry" class="form-control" id="journalEntry" />
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-light btn-outline-dark" id="btn-record-journal">
          <i class="bi bi-journal-check"></i>Save Entry
        </button>
      </div>
    </form>
    `
  }) 
}
