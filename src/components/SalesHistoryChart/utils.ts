import { Sale } from "../../types";

export const transformer = (data?: Sale[]) => {
  return data?.reduce((acc: any, sale, index: number) => {
    const previousSale = acc?.pop();
    const currentMonth = new Date(sale.weekEnding).toLocaleString("default", {
      month: "short",
    });
    if (!previousSale) {
      return [{ ...sale, month: currentMonth }];
    }
    const previousMonth = previousSale.month;
    if (previousMonth === currentMonth) {
      return [
        ...acc,
        {
          ...previousSale,
          wholesaleSales: previousSale.wholesaleSales + sale.wholesaleSales,
          retailSales: previousSale.retailSales + sale.retailSales,
        },
      ];
    }
    return [...acc, previousSale, { ...sale, month: currentMonth }];
  }, []);
};
