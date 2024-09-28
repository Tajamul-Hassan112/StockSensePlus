import { Box } from "@mui/material";
import PageShell from "../components/PageShell";
import {
  CurrencyRupee,
  NewReleases,
  ShoppingBasket,
  ShowChart,
} from "@mui/icons-material";
import { RowFlex } from "../theme/style_extentions/Flex";
import { useContext, useEffect } from "react";
import TableComponent from "../components/ui/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import baseURL from "../api/baseURL";
import UserDataContext from "../context/UserDataContext";
import UserContextTypes from "../types/UserDataContextTypes";
import FormatIntoKs from "../utils/FormatIntoKs";
import StatBox from "../components/StatBox";
import { useNavigate } from "react-router-dom";
import WeeklyPurchasesChart from "../components/ui/WeeklyPurchaseChart";
import SnackbarContext from "../context/SnackbarContext";
import { SnackBarContextTypes } from "../types/SnackbarTypes";

function Dashboard() {
  const { userData }: UserContextTypes = useContext(UserDataContext);
  const { setOpenSnack }: SnackBarContextTypes = useContext(SnackbarContext);

  const navigate = useNavigate();

  // Get Store Stats Query
  const { data: storeStats } = useQuery({
    queryKey: ["storeStats"],
    queryFn: async () => {
      // console.log(baseURL + "invoices/stats/" + userData?._id);
      return axios.get(baseURL + "invoices/stats/" + userData?._id);
    },
    select: (data) => {
      return data.data;
    },
  });

  console.log(storeStats);

  // Get Store's Products Query
  const { data: products, status: productsStatus } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return axios.get(
        baseURL + "products/getProductsByOwnerId/" + userData?._id
      );
    },
    select: (data) => {
      return data.data;
    },
  });

  // Get Store's Products Query
  const { data: productsAddedToday } = useQuery({
    queryKey: ["productsAddedToday"],
    queryFn: async () => {
      return axios.get(
        baseURL + "products/getProductsAddedToday/" + userData?._id
      );
    },
    select: (data) => {
      return data.data;
    },
  });

  // Get Store's Products Query
  const { data: lowStockProducts } = useQuery({
    queryKey: ["lowStockProducts"],
    queryFn: async () => {
      return axios.get(
        baseURL + "products/getLowStockProducts/" + userData?._id
      );
    },
    select: (data) => {
      return data.data;
    },
  });

  useEffect(() => {
    if (lowStockProducts && lowStockProducts.length > 0) {
      setOpenSnack({
        open: true,
        message:
          lowStockProducts?.length +
          " product(s) are low in stock. Please restock them to avoid any disruptions.",
        severity: "warning",
      });
    }
  }, [lowStockProducts]);

  return (
    <PageShell contentGap={5}>
      {/* Stat Box Container */}
      <Box sx={{ ...RowFlex, width: "100%", gap: 2.5 }}>
        <StatBox
          icon={<ShoppingBasket sx={{ fontSize: 40 }} />}
          title="Total Products Sold"
          value={FormatIntoKs(storeStats?.totalProductsSold || 0)}
        />
        <StatBox
          icon={<CurrencyRupee sx={{ fontSize: 40 }} />}
          title="Revenue Generated"
          value={FormatIntoKs(storeStats?.totalRevenue || 0)}
        />
        <StatBox
          icon={<NewReleases sx={{ fontSize: 40 }} />}
          title="New Products"
          value={FormatIntoKs(productsAddedToday?.length || 0)}
        />
        <StatBox
          onClick={() => navigate("statistics")}
          icon={<ShowChart sx={{ fontSize: 40 }} />}
          title="Restocking Needed"
          value={FormatIntoKs(lowStockProducts?.length || 0)}
        />
      </Box>
      <WeeklyPurchasesChart />
      {/* Table Container */}
      {productsStatus && (
        <TableComponent tableHeader="Recently Stocked" products={products} />
      )}
    </PageShell>
  );
}

export default Dashboard;
