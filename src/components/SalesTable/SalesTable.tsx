import { Table } from "antd";
import { useAppSelector } from "../../store";
import { getSales } from "../../store/slices/appSlice";
import { columns } from './columns';

export const SalesTable = () => {
	const data = useAppSelector(getSales);
	if (!data) {
		return null;
	}
	return <Table dataSource={data} columns={columns} />;
}

export default SalesTable;