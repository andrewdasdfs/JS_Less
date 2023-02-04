const pass = "password";

function crypto(pass) {
    const [...cryptoPass] = pass.split("");
    cryptoPass.push(cryptoPass[0], cryptoPass[1]);
    cryptoPass.splice(0, 2);
    cryptoPass.unshift(cryptoPass[4], cryptoPass[5]);
    cryptoPass.splice(6, 2);
    return cryptoPass.join("");
}

console.log(crypto(pass));

const pass2 = crypto(pass);

function check(pass2) {
    const [...cryptoPass2] = pass2.split("");
    cryptoPass2.unshift(cryptoPass2[6], cryptoPass2[7]);
    cryptoPass2.splice(8, 2);
    cryptoPass2.push(cryptoPass2[2], cryptoPass2[3]);
    cryptoPass2.splice(2, 2);
    if (cryptoPass2.join("") === pass) {
        return true;
    }
    return false;
}

console.log(check("rdsswopa"));
