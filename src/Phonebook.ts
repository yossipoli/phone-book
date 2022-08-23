import Contact from "./Contact";
import { IPhonebook } from "./IPhonebook";

class Phonebook implements IPhonebook{
    private idNumber
    constructor(private contacts:Contact[] = []){
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

    addPhone(id: numbernumber: number): void {
        
    }

    getByNumber(id: number): Contact | undefined {
        return this.contacts.find(contact=> contact.id === id)
    }

    getByName(name: string): Contact[] | undefined {
        return this.contacts.filter(contact=> contact.name === name)
    }


    
}

export function newPhoneBook(){
    return Phonebook
}