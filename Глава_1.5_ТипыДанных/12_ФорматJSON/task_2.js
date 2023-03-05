// Задача 2

let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
  // цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
  
const result = JSON.stringify(meetup, function replacer(key, value) {
    
    return (key != "" && value == meetup) ? undefined : value;
});

console.log(result);
  
/*
{
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
}
*/
  