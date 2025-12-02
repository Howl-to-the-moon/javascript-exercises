const findTheOldest = function(people) {


    //get current date
     let now = new Date();

     //if no death year, make 'death' year current year

   people.map ( function (item) {

      if (item.yearOfDeath == undefined) {
        item.yearOfDeath = now.getFullYear();
        console.log(item.yearOfDeath);
      }

   });



   //sorts the people from oldest to youngest


    let sortedPeople = people.sort((a, b) => 
        
        (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    
    );

    //returns the first (read: oldest) object in the array

    let lastOneStanding = sortedPeople[0];

    return lastOneStanding;

    

};



// Do not edit below this line
module.exports = findTheOldest;
