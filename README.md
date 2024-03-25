# goit-node-hw-01

"Contacts" CLI app

## DEMO

`node index.js --action list`

![alt text](<./images/list(1).png> "list(1)")
![alt text](<./images/list(2).png> "list(2)")

`node index.js --action get`

![alt text](./images/get.png "get")
![alt text](<./images/get(2).png> "get(2)")

`node index.js --action add`

![alt text](<./images/add(1).png> "add(1)")
![alt text](<./images/add(2).png> "add(2)")

`node index.js --action remove`

![alt text](./images/remove.png "remove")

## Technologies used

- Node
- JavaScript

## Setup and Usage

Clone this repo to your desktop and run `npm install` to install all the
dependencies. Once the dependencies are installed, you can run:

- list : node index.js --action list
- find by id : node index.js --action get --id CONTACT_ID
- add : node index.js --action add --name NAME --email EXAMPLE@EMAIL.COM --phone 322-22-22
- remove : node index.js --action remove --id CONTACT_ID
