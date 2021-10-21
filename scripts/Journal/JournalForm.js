export const journalForm = () => {
    const journalForm = document.querySelector('.journal-form');
    journalForm.innerHTML += `
    <section class="journal-form">
    <h2>Daily Journal</h2>
        <form action="">
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
        </form>
        <button type="button" class="btn btn-light btn-outline-dark">
          <i class="bi bi-journal-check"></i>
          Record Journal Entry
        </button>
    </section>
    `
}