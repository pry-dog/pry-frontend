// deps
import nacl from "tweetnacl";
import util from "tweetnacl-util";

// exports
export default {
    // for sending signed requests
    signed: function signed(endpoint, body) {
        // set props in the body to be signed
        body.date = Date.now();
        body.endpoint = `/api/${endpoint}`;
        // fetch the endpoint
        return fetch(`https://api.pry.dog/api/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // the username from localstorage
                username: localStorage.getItem("username"),
                // the body signed with the key from localstorage
                signedBody: nacl.util.encodeBase64(nacl.sign(nacl.util.decodeUTF8(JSON.stringify(body)), nacl.util.decodeBase64(localStorage.getItem("key"))))
            })
        });
    },
    // for sending unsigned requests
    unsigned: function unsigned(endpoint, body) {
        // just fetch the endpoint
        return fetch(`https://api.pry.dog/api/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
};