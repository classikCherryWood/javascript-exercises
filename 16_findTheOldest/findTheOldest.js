const findTheOldest = function(people) {
    // let ageArr = people.map((person) => ({
    //     name: `${person['name']}`, 
    //     age: `${person['yearOfDeath']}` - `${person['yearOfBirth']}`
    // }));

    let ageArr = people.map(function(person) {
        if (person.yearOfDeath){
            return ({
                name: `${person['name']}`, 
                age: `${person['yearOfDeath']}` - `${person['yearOfBirth']}`
            })
        } else {
            return ({
                name: `${person['name']}`, 
                age: `${new Date().getFullYear()}` - `${person['yearOfBirth']}`
                
            })
        }
    })


    let sorted = ageArr.sort((a, b) => a.age > b.age ? -1:1);
    return sorted[0];


};

// Do not edit below this line
module.exports = findTheOldest;
