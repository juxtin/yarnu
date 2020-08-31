export function jsIsPartnerDomain() {
    let jsCode = `
        function isPartnerDomain() {
            if (window.location.host.includes(".zara.com") || window.location.host.includes(".hm.com") || window.location.host.includes(".mango.com")) {
                return true;
            }

            return false;
        };
    `;

    return jsCode;
}