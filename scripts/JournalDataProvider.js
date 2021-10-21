/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/11/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "10/13/2021",
        concept: "JavaScript",
        entry: "We talked about how to write and execute functions with JavaScript. To link your external JavaScript file, you must add a script tag at the bottom of your html body.",
        mood: "Happy"
    }, 
    {
        id: 3,
        date: "10/15/2021",
        concept: "JavaScript, HTML, and CSS",
        entry: "We continued to work with JavaScript on our Martin's Aquarium project, by utilizing the DOM to auto populate our webpage content with JavaScript.",
        mood: "Ok"
    },
    {
        id: 4,
        date: "10/21/2021",
        concept: "JavaScript, HTML, CSS, and Bootstrap",
        entry: "Today we finished our 2nd group project which was similar to the 1st group project, but we were required to render all of our html using javascript. This project I wanted to get more comfortable with Bootstrap, so my entire country's page was done in Bootstrap.",
        mood: "Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
