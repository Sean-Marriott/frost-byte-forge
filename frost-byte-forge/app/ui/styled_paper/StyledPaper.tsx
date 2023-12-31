import { styled } from "@mui/material/styles";
import { Paper, PaperProps } from "@mui/material";

const StyledPaper = styled(Paper)<PaperProps>({
  boxShadow: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
  borderRadius: "1rem",
  padding: "1rem",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "none",
  },
});

export default StyledPaper;
