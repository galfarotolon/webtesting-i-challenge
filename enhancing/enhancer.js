module.exports = {
  succeed,
  fail,
  repair,
  get,
};



function succeed(item) {

  if (item.enhacement !== 20) {

    return item.enhancement + 1;
  } else {
    return item.enhancement
  }


}


// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {

  if (item.enhancement < 15 && item.enhancement >= 0) {
    item.durability = item.durability - 5;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    item.durability = item.durability - 10;
  } else if (item.enhancement > 16 && item.enhancement <= 20) {
    item.durability = item.durability - 10;
    item.enhancement = item.enhancement - 1;
  } else (
    console.log('error: enhancement value must be between 0 and 20')
  )

  return item;
}


//a repair(item) method that accepts an item object and returns a new 
//item with the durability restored to 100. This method is the simplest 
//of the three and would be a good starting point on this project.

function repair(item) {

  if (item.durability === 100) {
    return item.durability
  } else if (item.durability >= 0 && item.durability <= 99) {
    item.durability = item.durability + (100 - item.durability)
    return item.durability
  } else {
    console.log("durability must be between 0 and 100.")
  }


  return item.durability
}


// Add a get() method to the enhancer object that takes an item and returns 
// a new item with the name property modified according to the following rules:
// if the enhancement level is 0, the the name is not modified.
// if the enhancement level is greater than 0, change the name to include the enhancement level, 
// preceded by a plus sign ( + ), between square brackets before the item's name. 
// Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".

function get(item) {

  if (item.enhancement >= 0 && item.enhancement <= 20) {
    let level = item.enhancement;
    item.name = `[+${level}] ` + item.name
  } else {
    console.log('error: enhancement level must be between 0 and 20')
  }

  return item;
}
