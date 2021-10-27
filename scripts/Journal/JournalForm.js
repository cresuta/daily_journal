import { saveJournalEntry } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js";

const journalForm = document.querySelector('.journal-form');

document.querySelector("body").addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "btn-record-journal") {

    // Make a new journal entry object
    const newJournalEntry = {
      date: document.querySelector('#journalDate').value,
      concept: document.querySelector('#journalConcepts').value,
      entry: document.querySelector('#journalEntry').value,
      mood: document.querySelector('#journalMood').value
    }  

    // Clearing all form values after recording new journal entry
    document.querySelector('#journalDate').value = "";
    document.querySelector('#journalConcepts').value = "";
    document.querySelector('#journalEntry').value = "";
    document.querySelector('#journalMood').value = "";

    console.log(newJournalEntry);

    // Change API state and application state
    saveJournalEntry(newJournalEntry)
    .then(EntryListComponent)
  }

})

export const JournalFormComponent = () => {
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
          <fieldset class="journal-mood">
            <label for="journalMood">Mood for the day</label>
            <select name="" id="journalMood">
              <option value="happy">Happy</option>
              <option value="ok">Ok</option>
              <option value="sad">Sad</option>
            </select>
          </fieldset>
        <button type="button" class="btn btn-light btn-outline-dark" id="btn-record-journal">
          <i class="bi bi-journal-check"></i>
          Record Journal Entry
        </button>
    </section>
    `
}