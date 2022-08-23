import Contact from "./Contact";
import { IPhonebook } from "./IPhonebook";

class Phonebook implements IPhonebook{
    private idNumber
    constructor(public contacts:Contact[] = []){
        this.idNumber=0
    }
    get newId():number{
        this.idNumber++
        return this.idNumber
    }

    size():number{
        return this.contacts.length
    }

    add(contact:Contact):number{
        const id:number = this.newId
        contact.id = id
        this.contacts.push(contact)
        return id
    }

    addPhone(id: number, number: string): void {
        const contact = this.get(id)
        if(contact){
            contact.phones.push(number)
        } else{
            console.log("No contact")
        }
    }

    get(id: number): Contact | undefined {
        return this.contacts.find(contact=> contact.id === id)
    }

    getByName(name: string): Contact[] | undefined {
        return this.contacts.filter(contact=> contact.name === name)
    }

    remove(id:number):Contact|undefined{
        const contact = this.get(id)
        if (contact){
            this.contacts.splice(this.contacts.indexOf(contact),1)
        }
        return contact
    }
    
}

export default function newPhoneBook():IPhonebook{
    return  new Phonebook()
}