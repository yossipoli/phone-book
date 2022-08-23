import Contact from "./Contact";
import createPhonebook from "./Phonebook";

const yellowPages =  createPhonebook()

// yellowPages.nameContains = function(){

// }

yellowPages.add(new Contact("Shahar", "MH10", ["050222"]))
yellowPages.add(new Contact("Lior", "My House 12, Naharya", ["050-123"]))
yellowPages.add(new Contact("Nurit", "Maalor 5, Givataim", ["050-456"]))
yellowPages.add(new Contact("Zehava", "Shalosh 3, Shaloshim", ["050-234"]))
yellowPages.add(new Contact("Shmuel", "Bait 1, Home", ["050-222"]))
yellowPages.add(new Contact("Shahar", "Ben-Gurion 14, Netanya", ["03-123"]))
yellowPages.add(new Contact("Liran", "Neot Hashemesh 5, Haifa", ["050-741"]))
yellowPages.add(new Contact("Shmuel", "Maayan Zvi 4, Bat-Yam", ["050-951"]))
yellowPages.add(new Contact("Amit", "Mishol Hakanarit 44/12, Tivon", ["04-159"]))
yellowPages.add(new Contact("Liat", "Babait Sheli 19, Home", ["050-822"]))
yellowPages.add(new Contact("Ziv", "Lehavot 3, Lehavim", ["050-992"]))

// console.log(yellowPages.get("Amit"))
// console.log(yellowPages.get("Amits"))
// console.log(yellowPages.get(1))
// console.log(yellowPages.get(111))

const contacts  = yellowPages.get("Shahar")
contacts?.forEach(contact => {
    yellowPages.addPhone(contact.id, "999-999")
});

console.log(yellowPages.size())

yellowPages.add(new Contact("Shimrit", "bet Haroshet 3, Yokneam", ["04-863", "050-473"]))
yellowPages.add(new Contact("Shimrit", "HY7 SA", ["03-741"]))
// yellowPages.addPhone(1,"03-74999")
console.log(yellowPages.get(1))

console.log(yellowPages.size())
yellowPages.remove(13)
console.log(yellowPages.size())

for (const contact of yellowPages){
    console.log(contact)
}

for(const contact of yellowPages.nameContains('a')){
    console.log(contact)
 }