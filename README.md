# C-Development CloudFlare DNS IP-Changer
 
Hello, my name is Nico. I coded a tool a tool to change the CloudFlare DNS entries of a specific IP address all. 
I had a lot of DNS entries and after a server change I had to change the IPv4 of the server. 
In order not to have to change each DNS entry individually, I coded this tool.

#### Contents:
- [Installation](#installation)
- [Hof to use](#how-to-use)


## Installation
First you need [NodeJS](https://nodejs.org/).
IMPORTANT, you need NodeJS Version 16+

1. Clone the Repo
```
git clone https://github.com/CXBRADEVELOPMENT/cloudflare-dns-ip-changer.git
```
2. Go to the folder where the project is and do
```bash
npm i
```
3. And do this too 
```bash
npm i ts-node --global
```

## How to use

When the installation is finished, you can start using it.

First you have to go to the folder `src` and edit the `index.ts`.
There you have to enter the required data.

Then you go to the point where the function `changeRecords()` is executed and change the parameters so that they fit for you.
The first parameter is the IP address to filter by. The second parameter is the IP address to which the first should be changed. 
```ts
let zoneID = 'ZONE'; // Zone ID from Website-Dashboard
let apiToken = 'TOKEN' // create API Token https://dash.cloudflare.com/profile/api-tokens

let accountMail = 'example@gmail.com'; // Your CloudFlare Account E-Mail
let globalApiKey = 'KEY'; // create API Global Key https://dash.cloudflare.com/profile/api-tokens


//     OLD IP TO BE CHANGED    NEW IP TO WICH IT IS TO BE CHANGED
changeRecords("5.181.151.19", "45.142.115.00");
```

Then save the file and run the script.
For this you have to execute the command ```ts-node src/index.ts``` in the main folder where you can also see the `src` folder.
Then the old IP is replaced by the new one.



## Adoption
I hope my little tool could help you.

#### Have a great day, greatings
Nico Kumar
