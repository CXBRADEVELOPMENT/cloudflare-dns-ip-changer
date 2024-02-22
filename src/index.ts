// by CXBRADEVELOPMENT
import * as getHandler from './backend/get';
import * as postHandler from './backend/handleOutgoing';


// configuration


let zoneID = 'ZONE'; // Zone ID from Website-Dashboard
let apiToken = 'TOKEN' // create API Token https://dash.cloudflare.com/profile/api-tokens

let accountMail = 'example@gmail.com'; // Your CloudFlare Account E-Mail
let globalApiKey = 'KEY'; // create API Global Key https://dash.cloudflare.com/profile/api-tokens


//     OLD IP TO BE CHANGED    NEW IP TO WICH IT IS TO BE CHANGED
changeRecords("5.181.151.19", "45.142.115.00");







/**
 * Change the IP's of multible DNS entries with the same IP
 * @param oldIP The IP to filter by
 * @param newIP The new IP to which the filtered one should be set
 * @author CXBRADEVELOPMENT
 */
function changeRecords(oldIP: string, newIP: string) {
    getHandler.getList(zoneID, oldIP, apiToken).then(async (object) => {
        await object.result.forEach(element => {
            let options = {
                "type": (element.type as string),
                "name": (element.name as string),
                "content": (newIP as string),
                "ttl": `${(element.ttl as string)}`
            }
            postHandler.post(options,
                element.id, zoneID, accountMail, globalApiKey)
        });
        setTimeout(() => {
            console.log("Process completed successfully!");
            console.log("Everything is updated.");
        }, 1000 * 10)
    })
}

/**
 * Delete every DNS Records DO NOT ACTIVATE!!
 * @author CXBRADEVELOPMENT
 */
function deleteAllRecords() {
    getHandler.getListALL(zoneID, apiToken).then(async (object) => {
        object.result.forEach(element => {
            postHandler.deleteAllRecords(element.id, zoneID, accountMail, globalApiKey)
        });
    })
}

// DO NOT TOUCH!!!
// THIS WILL DELETE EVERYTHING
//deleteAllRecords();