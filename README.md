# phone-book1
Read about iterator design pattern in JavaScript.
(Here's one article, https://www.grauman.co.il/javascript-es6-iterator-article/)
2
Create Contact.ts which is a container for phonebook contacts (id, name, address, phones)
3
Create IPhonebook.ts for managing phonebook of contacts.
 size:number - gets the amount of contacts
 add(contact:Contact):number - add contact and returns its new id
 addPhone(id:number, phone:string):void - add new phone to existing contact
 get(id:number):Contact|undefined - get contact by id
 get(name:string):Contact[]|undefined - get contacts by name
 remove(id:number):Contact|undefined - remove contact by id and returns it
4
Create Phonebook.ts implementing IPhonebook interface.
But don't export Phonebook. Instead, export a function that returns an instance implementing IPhonebook:
 createPhonebook():IPhonebook
5
in main.ts:
import the function and get an instance of phonebook.
(Notice, you'll be using the phonebook but only via the IPhonebook interface!)
Add manually 11 contacts, few with same name (e.g. {'Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']} )
*Keep the data as realistic as possible
6
add 2 new contacts: 1 with existing name, 1 with new name
check the size is updated
7
add phone to existing contact
8
get contacts by name and add to them the same phone (Notice that adding a phone is done ONLY via addPhone!)
9
remove the last contact (of the previous contacts from #8) by id
check the size is updated
10
Enable this:
(You'll have to update IPhonebook)
import ... from './Phonebook'
...
const yellowPages = //get phonebook instance
...
for(const contact of yelloPages){
   //contacts will be delivered in alphabetical order
   //Try with O(N) complexity
}
...
for(const contact of yelloPages.nameContains('cohen')){
   //contacts with 'cohen' will be delivered
}
...
11
Git the whole thing!
