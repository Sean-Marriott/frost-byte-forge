import PocketBase from "pocketbase";

export async function getParts() {
    const db = new PocketBase("http://127.0.0.1:8090");
    const data = await db.collection("parts").getFullList();
    return data;
}