import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync(
    "twinspot-tours-and-trave-4aa06-firebase-adminsdk-fbsvc-5d8cb5631b.json",
    "utf8"
  )
);

const key = serviceAccount.private_key;

if (!key.startsWith("-----BEGIN PRIVATE KEY-----")) {
  throw new Error("Invalid private key in JSON");
}

const base64 = Buffer.from(key, "utf8").toString("base64");

console.log("BASE64 LENGTH:", base64.length);
console.log(base64);
