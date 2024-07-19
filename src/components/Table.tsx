import styles from "../assets/styles/table.module.css";

type DiagnosticItem = {
  name: string;
  description: string;
  status: string;
};

type Details = {
  diagnostic_list: DiagnosticItem[];
};

type TableProps = {
  details: Details | null;
};

const Table: React.FC<TableProps> = ({ details }) => {
  return (
    <div className="bg-white p-4 rounded-[0.5rem]">
      <h1 className="font-semibold text-2xl">Diagnostic List</h1>
      <div className={`${styles["table-container"]} max-h-[180px]`}>
        <table className="mt-5 w-full border-collapse table-fixed">
          <thead>
            <tr className="text-xs font-semibold text-left bg-gray-100">
              <th className={`${styles["tr-rounded-left"]} py-3 px-2`}>
                Problem/Diagnosis
              </th>
              <th className="py-3 px-2">Description</th>
              <th className={`${styles["tr-rounded-right"]} py-3 px-2`}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {details &&
              details.diagnostic_list.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-2">{item.name}</td>
                  <td className="py-3 px-2">{item.description}</td>
                  <td className="py-3 px-2">{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
