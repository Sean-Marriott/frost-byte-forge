import PocketBase from "pocketbase";
const db = new PocketBase("http://127.0.0.1:8090");

export interface PartUpdate {
    id: string;
    description?: string;
    price?: number;
    quantity?: number;
}

export async function getParts() {
    const data = await db.collection("parts").getFullList();
    return data;
}

export async function getKnownPartDescriptions() {
    const data = (await db.collection("parts").getFullList({ fields: "description" })).map(item => item.description);
    // Filter the distinct elements
    return data.filter((value, index, self) => self.indexOf(value) === index);
}

export async function updatePart(updateData: PartUpdate) {
    const data = await db.collection("parts").update(updateData.id, updateData);
    return data;
}