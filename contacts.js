require("colors");
const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);
    return console.log(contacts);
  } catch (error) {
    return console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);
    let searchingContact =
      `Contact with id: ${contactId} is missing on your list :(`.red;

    contacts.map((contact) => {
      if (contactId === contact.id) {
        searchingContact =
          `Contact that you are looking for with id: "${contactId}"\n`.yellow +
          `${contact.name}\n${contact.email}\n${contact.phone}`.green;
      }
    });

    return console.log(searchingContact);
  } catch (error) {
    return console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index > 0) {
      contacts.splice(index, 1);
      console.log(
        `Contacts "${contacts[index].name}" successfully removed`.green
      );
      const updatedContactsJson = JSON.stringify(contacts, null, 2);

      return fs.writeFile(contactsPath, updatedContactsJson, "utf-8");
    } else {
      return console.log(`Can't find contact with id: "${contactId}"`.red);
    }
  } catch (error) {
    return console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const nanoidModule = await import("nanoid");
    const nanoid = nanoidModule.nanoid;

    const newContact = {
      id: nanoid(21),
      name,
      email,
      phone,
    };

    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);

    if (
      contacts.find(
        (contact) =>
          contact.name.toUpperCase() === newContact.name.toUpperCase()
      )
    ) {
      return console.log(`Contact ${name} already exist on list`.red);
    } else {
      contacts.push(newContact);
    }

    const updatedContactsJson = JSON.stringify(contacts, null, 2);

    fs.writeFile(contactsPath, updatedContactsJson, "utf-8");
    return console.log(`Contact ${name} added successfully`.green);
  } catch (error) {
    return console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
