"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phonebook {
    constructor(contacts = []) {
        this.contacts = contacts;
        this.idNumber = 0;
    }
    get newId() {
        this.idNumber++;
        return this.idNumber;
    }
    size() {
        return this.contacts.length;
    }
    add(contact) {
        const id = this.newId;
        contact.id = id;
        this.contacts.push(contact);
        return id;
    }
    addPhone(id, number) {
        const contact = this.get(id);
        if (contact) {
            contact.phones.push(number);
        }
        else {
            console.log("No contact");
        }
    }
    get(id) {
        return this.contacts.find(contact => contact.id === id);
    }
    getByName(name) {
        return this.contacts.filter(contact => contact.name === name);
    }
    remove(id) {
        const contact = this.get(id);
        if (contact) {
            this.contacts.splice(this.contacts.indexOf(contact), 1);
        }
        return contact;
    }
}
function newPhoneBook() {
    return new Phonebook();
}
exports.default = newPhoneBook;
