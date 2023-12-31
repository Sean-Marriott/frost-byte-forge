"use client";
import StyledPaper from "../styled_paper/StyledPaper";
import Grid from "@mui/material/Unstable_Grid2";

export default function DashboardAnalytics() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} lg={4}>
        <StyledPaper className="sales" sx={{ p: 3, borderRadius: 7 }}>
          <div className="status">
            <div className="info">
              <h3>Total Profit</h3>
              <h1>$35,024</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </StyledPaper>
      </Grid>
      <Grid xs={12} lg={4}>
        <StyledPaper className="sales" sx={{ p: 3, borderRadius: 7 }}>
          <div className="status">
            <div className="info">
              <h3>Current Year</h3>
              <h1>$12,149</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </StyledPaper>
      </Grid>

      <Grid xs={12} lg={4}>
        <StyledPaper className="searches" sx={{ p: 3, borderRadius: 7 }}>
          <div className="status">
            <div className="info">
              <h3>PCs Sold</h3>
              <h1>112</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+21%</p>
              </div>
            </div>
          </div>
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
