import Stack from "@mui/material/Stack";
import PartsTable from "../ui/parts_table/PartsTable";
import { getParts, getKnownPartDescriptions } from "../lib/getParts";

export default async function Page() {
  const parts = await getParts();
  const partDescriptions = await getKnownPartDescriptions();

  return (
    <>
      <Stack spacing={2}>
        <h1>Inventory</h1>
        <PartsTable parts={parts} descriptionOptions={partDescriptions} />
      </Stack>
    </>
  );
}
