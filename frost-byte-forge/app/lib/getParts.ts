import PocketBase from "pocketbase";
const db = new PocketBase("http://127.0.0.1:8090");

export async function getParts() {
    const data = await db.collection("parts").getFullList();
    return data;
}

export async function getKnownPartDescriptions() {
    const data = (await db.collection("parts").getFullList({ fields: "description" })).map(item => item.description);
    // Filter the distinct elements
    return data.filter((value, index, self) => self.indexOf(value) === index);
}