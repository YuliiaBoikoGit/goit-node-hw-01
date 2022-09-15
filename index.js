const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
        const contactsList = await contacts.listContacts();
        console.table(contactsList);
        break;

    case "get":
        const oneContact = await contacts.getContactById(id);
        console.log(oneContact);
        break;

    case "add":
        const newContact = await contacts.addContact({ name, email, phone });
        console.log(newContact);
        break;

    case "remove":
        const contactRemove = await contacts.removeContact(id);
        console.log(contactRemove);
        break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);