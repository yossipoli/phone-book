import Contact from "./Contact";

export interface IPhonebook {
    contacts: Contact[];
    size(): number; //gets the amount of contacts
    add(contact: Contact): number; //add contact and returns its new id
    addPhone(id:number, number: number): void; //add new phone to existing contact
    getByNumber(id: number): Contact | undefined; //get contact by id
    getByName(name: string): Contact[] | undefined; // get contacts by name
    remove(id: number): Contact | undefined; // remove contact by id and returns it
}
