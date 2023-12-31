"use client";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import DashboardAnalytics from "./ui/analytics/DashboardAnalytics";
import Sidebar from "./ui/sidebar/Sidebar";
import CurrentListings from "./ui/current_listings/CurrentListings";

export default function Home() {
  return (
    <Grid container columnGap={2}>
      <Grid xs={12} md={9}>
        <Stack spacing={2}>
          <Stack spacing={2}>
            <h1>Dashboard</h1>
            <div className="dashboard">
              <DashboardAnalytics />
            </div>
          </Stack>
          <Stack spacing={2}>
            <h2>Current Listings</h2>
            <CurrentListings />
          </Stack>
          <Stack spacing={2}>
            <h2>Recent Orders</h2>
            <div className="recent-orders">{/* <RecentOrders /> */}</div>
          </Stack>
        </Stack>
      </Grid>
      <Grid xs sx={{ mt: 2 }}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
