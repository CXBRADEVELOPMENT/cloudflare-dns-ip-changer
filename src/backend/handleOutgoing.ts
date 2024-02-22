import fetch from "node-fetch";


/**
 * Patch DNS entries
 * @param options body
 * @param dnsId DNS identifier
 * @param zoneID CloudFlare ZoneID
 * @param accountMail Account mail
 * @param globalApiKey The CloudFlare globalApiKey
 * @author CXBRADEVELOPMENT
 */
export async function post(options, dnsId: string, zoneID: string, accountMail: string, globalApiKey: string) {
    fetch(`https://api.cloudflare.com/client/v4/zones/${zoneID}/dns_records/${dnsId}`, {
        method: "patch",
        body: JSON.stringify(options),
        headers: {
            "X-Auth-Email": accountMail,
            "X-Auth-Key": globalApiKey,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}


/**
 * Delete entries
 * @param dnsId The identifier of the DNS entry
 * @param zoneID The CloudFlare zone id
 * @param accountMail Account mail
 * @param globalApiKey The CloudFlare globalApiKey
 * @author CXBRADEVELOPMENT
 */
export async function deleteAllRecords(dnsId: string, zoneID: string, accountMail: string, globalApiKey: string) {
    fetch(`https://api.cloudflare.com/client/v4/zones/${zoneID}/dns_records/${dnsId}`, {
        method: "delete",
        headers: {
            "X-Auth-Email": accountMail,
            "X-Auth-Key": globalApiKey,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}