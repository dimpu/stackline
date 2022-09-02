


import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, Typography } from 'antd'
import { useAppSelector } from '../../store';
import { getSales } from '../../store/slices/appSlice';
import { transformer } from './utils';
import { FormattedMessage } from 'react-intl';

export const SalesHistoryChart = () => {
	const data = useAppSelector(getSales);
	const mappedData = transformer(data);

	return (
		<Card >
			<Typography.Text>
				<FormattedMessage
					id="app.historyChart"
					description="Retail Store"
					defaultMessage="Retail Store"

				/>
			</Typography.Text>
			<div style={{ width: '100%', height: 400 }}>
				<ResponsiveContainer >
					<LineChart
						data={mappedData}
					>
						<XAxis dataKey="month" />
						<Tooltip />
						<Legend />
						<Line strokeWidth={3} type="monotone" dataKey="retailSales" stroke="#40a5f7" />
						<Line strokeWidth={3} type="monotone" dataKey="wholesaleSales" stroke="#98a4be" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Card>
	);

}

export default SalesHistoryChart;

