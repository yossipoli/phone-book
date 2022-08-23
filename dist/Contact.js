"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(name, address, phones, id = 0) {
        this.name = name;
        this.address = address;
        this.phones = phones;
        this.id = id;
    }
}
exports.default = Contact;
