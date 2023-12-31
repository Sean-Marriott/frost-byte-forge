import Stack from "@mui/material/Stack";
import PartsTable from "../ui/parts_table/PartsTable";
import {
  getParts,
  getKnownPartDescriptions,
  updatePart,
  PartUpdate,
} from "../lib/getParts";
import { GridRowModel } from "@mui/x-data-grid";

export default async function Page() {
  const parts = await getParts();
  const partDescriptions = await getKnownPartDescriptions();

  const processRowUpdate = async (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => {
    "use server";
    const partUpdate = {
      id: newRow.id,
      name: newRow.name,
      description: newRow.description,
    } as PartUpdate;

    await updatePart(partUpdate);
    return newRow;
  };

  return (
    <>
      <Stack spacing={2}>
        <h1>Inventory</h1>
        <PartsTable
          parts={parts}
          descriptionOptions={partDescriptions}
          processRowUpdate={processRowUpdate}
        />
      </Stack>
    </>
  );
}
