import "./App.css";
import { styled } from "@mui/material/styles";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 1px;
  }
`;

export default function StyledComponentsDeep() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
    </Box>
  );
}
