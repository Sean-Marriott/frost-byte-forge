import PocketBase from "pocketbase";

async function getParts() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db
    .collection("parts")
    .getList(1, 10, { filter: 'status != "Recieved"' });
  return data;
}

const RecentOrders = async () => {
  const parts = await getParts();
  return (
    <div className="recent-orders">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Condition</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {parts.items?.map((part) => {
            return <Part key={part.id} part={part} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

function Part({ part }: any) {
  const { id, name, description, price, condition, status } = part || {};
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{condition}</td>
      <td
        className={
          status === "Awaiting Dispatch"
            ? "warning"
            : status === "Shpped"
            ? "primary"
            : "success"
        }
      >
        {status}
      </td>
    </tr>
  );
}
export default RecentOrders;
