let instructors = [];

export const useInstructors = () => {
    return instructors.slice()
}

export const getInstructors = () => {
    return fetch("http://localhost:8088/instructors")
    .then(response => response.json())
    .then (data => {
        instructors = data
    })
}