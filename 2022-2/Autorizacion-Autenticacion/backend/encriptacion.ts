const cripto=require("crypto");
const algoritmo = 'aes-256-cbc'; //Using AES encryption
const key = cripto.randomBytes(32);
const iv = cripto.randomBytes(16);

export function encriptar(text:string, salt:string){
    //let salt = cripto.randomBytes(16).toString('hex'); 
    // Hashing user's salt and password with 1000 iterations, 
     
    let hash = cripto.pbkdf2Sync(text, salt,  1000, 64, `sha512`).toString(`hex`); 
    //console.log(salt);
    return hash;
}

export function validarPassword(text:string,salt:string){
    let hash = cripto.pbkdf2Sync(text, salt, 1000, 64, `sha512`).toString(`hex`); 
    return hash; 
}

export function encriptarToken(text:string) {
    let cipher = cripto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
 }

 export function desencriptarToken(text:any) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = cripto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
 }
 