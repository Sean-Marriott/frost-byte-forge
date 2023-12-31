import Sidebar from "./ui/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Stack } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export const metadata: Metadata = {
  title: "Frost Byte Forge",
  description:
    "Frost Byte Forge: Your premier solution for PC parts inventory management and assembly. Built on Next.js 14, Frost Byte Forge offers a sophisticated platform to organize, track, and craft PC builds effortlessly. Seamlessly manage inventory and unleash creativity in assembling custom PC configurations with precision and ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Grid
          container
          margin={{ xs: 1 }}
          ml={{ xs: 1, md: 3 }}
          justifyContent="center"
        >
          <Grid container xs={6}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                alt="Frost Byte Logo"
                src="/images/logo.png"
                sx={{ width: 30, height: 30 }}
              />
              <h2>
                FrostByte<span className="primary">PCs</span>
              </h2>
            </Stack>
          </Grid>
          <Grid xs={6}>
            <div className="nav">
              <button id="menu-btn">
                <span className="material-icons-sharp">menu</span>
              </button>
              <div className="dark-mode">
                <span className="material-icons-sharp active">light_mode</span>
                <span className="material-icons-sharp">dark_mode</span>
              </div>

              <div className="profile">
                <div className="info">
                  <p>
                    Hey, <b>Sean</b>
                  </p>
                  <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                  <img src="/images/sean.jpg" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={2}>
            <Sidebar />
          </Grid>
          <Grid xs={10}>{children}</Grid>
        </Grid>
      </body>
    </html>
  );
}
