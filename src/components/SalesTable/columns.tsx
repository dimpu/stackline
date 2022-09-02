import { FormattedNumber } from 'react-intl';
import { Sale } from '../../types';

export const columns = [
  {
    title: "Week Ending",
    dataIndex: "weekEnding",
    key: "weekEnding",
  },
  {
    title: "Retail Sales",
    dataIndex: "retailSales",
    key: "retailSales",
    render: (amt: number) => <FormattedNumber value={amt} style="currency" currency="USD" />,
    sorter: (a: Sale, b: Sale) => a.retailSales - b.retailSales,
  },
  {
    title: "Wholesale Sales",
    dataIndex: "wholesaleSales",
    key: "wholesaleSales",
    render: (amt: number) => <FormattedNumber value={amt} style="currency" currency="USD" />,
    sorter: (a: Sale, b: Sale) => a.wholesaleSales - b.wholesaleSales,
  },
  {
    title: "Units Sold",
    dataIndex: "unitsSold",
    key: "unitsSold",
    sorter: (a: Sale, b: Sale) => a.unitsSold - b.unitsSold,
  },
  {
    title: "Retailer Margin",
    dataIndex: "retailerMargin",
    key: "retailerMargin",
    render: (amt: number) => <FormattedNumber value={amt} style="currency" currency="USD" />,
    sorter: (a: Sale, b: Sale) => a.retailerMargin - b.retailerMargin,
  },
];
