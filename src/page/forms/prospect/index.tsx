import React, { useEffect } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { fetchPaymentInformation } from "./prospectApi";

const Prospect: React.FC = () => {
  const [data, setData] = React.useState<Payment[]>([]);
  useEffect(() => {
    fetchPaymentInformation().then((data) => setData(data));
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Prospect;
