/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

const sortPeople = (names, heights) => {
    const people = [];

    for (let i = 0; i < names.length; i++) {
        people.push({name: names[i], height: heights[i]})
    }

    return people.sort((a, b) => b.height - a.height).map(person => person.name)
}