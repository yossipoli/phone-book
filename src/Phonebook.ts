import Contact from "./Contact";
import { IPhonebook } from "./IPhonebook";

class Phonebook implements IPhonebook {
    private idNumber;
    private index;
    constructor(public contacts: Contact[] = []) {
        this.idNumber = 0;
        this.index = 0;
    }

    get newId(): number {
        this.idNumber++;
        return this.idNumber;
    }

    size(): number {
        return this.contacts.length;
    }

    add(contact: Contact): number {
        const id: number = this.newId;
        contact.id = id;
        this.contacts.push(contact);
        return id;
    }

    addPhone(id: number, number: string): void {
        const contact = this.get(id);
        if (contact) {
            contact.phones.push(number);
        } else {
            console.log("No contact");
        }
    }

    get(argument: number | string): Contact |  undefined ;
    get(argument: number | string):  Contact[] | undefined ;
    get(argument: number | string): Contact | Contact[] | undefined {
        if (typeof(argument) === "number") {
            return this.contacts.find(contact=> contact.id === argument)
        }

        else {
            return this.contacts.filter(contact=> contact.name.includes(argument))
        }
    }

    remove(id: number): Contact | undefined {
        const contact = this.get(id);
        if (contact) {
            this.contacts.splice(this.contacts.indexOf(contact), 1);
        }
        return contact;
    }

    next() {
        if (this.index < this.contacts.length) {
            return {
                done: false,
                value: this.contacts[this.index++],
            };
        }
        return {
            done: true,
        };
    }

    [Symbol.iterator](): any {
        // IterableIterator<Contact> {
        return this;
    }
}

export default function newPhoneBook(): IPhonebook {
    return new Phonebook();
}
