export interface ProductInfo {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

export interface Sale {
  retailSales: number;
  retailerMargin: number;
  unitsSold: number;
  weekEnding: string;
  wholesaleSales: number;
}

export type Data = ProductInfo & { sales: Sale[] };

export interface AppState {
  loading: boolean;
  error: boolean;
  data: Data | null;
}
