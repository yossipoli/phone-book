"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = __importDefault(require("./Contact"));
const Phonebook_1 = __importDefault(require("./Phonebook"));
const yellowPages = (0, Phonebook_1.default)();
// yellowPages.nameContains = function(){
// }
yellowPages.add(new Contact_1.default("Shahar", "MH10", ["050222"]));
yellowPages.add(new Contact_1.default("Lior", "My House 12, Naharya", ["050-123"]));
yellowPages.add(new Contact_1.default("Nurit", "Maalor 5, Givataim", ["050-456"]));
yellowPages.add(new Contact_1.default("Zehava", "Shalosh 3, Shaloshim", ["050-234"]));
yellowPages.add(new Contact_1.default("Shmuel", "Bait 1, Home", ["050-222"]));
yellowPages.add(new Contact_1.default("Shahar", "Ben-Gurion 14, Netanya", ["03-123"]));
yellowPages.add(new Contact_1.default("Liran", "Neot Hashemesh 5, Haifa", ["050-741"]));
yellowPages.add(new Contact_1.default("Shmuel", "Maayan Zvi 4, Bat-Yam", ["050-951"]));
yellowPages.add(new Contact_1.default("Amit", "Mishol Hakanarit 44/12, Tivon", ["04-159"]));
yellowPages.add(new Contact_1.default("Liat", "Babait Sheli 19, Home", ["050-822"]));
yellowPages.add(new Contact_1.default("Ziv", "Lehavot 3, Lehavim", ["050-992"]));
// console.log(yellowPages.get("Amit"))
// console.log(yellowPages.get("Amits"))
// console.log(yellowPages.get(1))
// console.log(yellowPages.get(111))
const contacts = yellowPages.get("Shahar");
contacts === null || contacts === void 0 ? void 0 : contacts.forEach(contact => {
    yellowPages.addPhone(contact.id, "999-999");
});
console.log(yellowPages.size());
yellowPages.add(new Contact_1.default("Shimrit", "bet Haroshet 3, Yokneam", ["04-863", "050-473"]));
yellowPages.add(new Contact_1.default("Shimrit", "HY7 SA", ["03-741"]));
// yellowPages.addPhone(1,"03-74999")
console.log(yellowPages.get(1));
console.log(yellowPages.size());
yellowPages.remove(13);
console.log(yellowPages.size());
for (const contact of yellowPages) {
    console.log(contact);
}
for (const contact of yellowPages.nameContains('a')) {
    console.log(contact);
}
