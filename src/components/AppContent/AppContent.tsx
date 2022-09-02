import { wrapper } from './styles';
import { Content } from 'antd/lib/layout/layout';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Col, Row } from 'antd';
import SalesHistoryChart from '../SalesHistoryChart';
import SalesTable from '../SalesTable';

export const AppContent = () => {
	return (<Content>
		<div className={wrapper}>
			<Row gutter={{ xs: 8, sm: 12, md: 12 }}>
				<Col span={24} lg={5} md={24}>
					<ProductInfo />
				</Col>
				<Col span={24} lg={19} md={24} >
					<Row gutter={[24, 24]} >
						<Col span={24}>
							<SalesHistoryChart />
						</Col>
						<Col span={24}>
							<SalesTable />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	</Content >)
}
export default AppContent;