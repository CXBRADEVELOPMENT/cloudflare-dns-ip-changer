import fetch from "node-fetch";


/**
* * Send you a lost of all DNS emtries fith a specified IP-Adress from an Zone
* @param zoneID CloudFlare ZoneID
* @param filteredIP Specified IP to filter
* @param apiToken CloudFlare-API-Key
* @returns A list of all entries with a specific IP
* @author CXBRADEVELOPMENT
*/
export async function getList(zoneID: string, filteredIP: string, apiToken: string) {
    return fetch(`https://api.cloudflare.com/client/v4/zones/${zoneID}/dns_records?content=${filteredIP}`, {
        method: "get",
        headers: {
            "Authorization": "Bearer " + apiToken,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch(err => {
            console.log(err);
        });
}

/**
 * Get a list of all DNS records
 * @param zoneID CloudFlare ZoneID
 * @param apiToken CloudFlare-API-Key
 * @returns All DNS records
 * @author CXBRADEVELOPMENT
 */
export async function getListALL(zoneID: string, apiToken: string) {
    return fetch(`https://api.cloudflare.com/client/v4/zones/${zoneID}/dns_records`, {
        method: "get",
        headers: {
            "Authorization": "Bearer " + apiToken,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch(err => {
            console.log(err);
        });
}