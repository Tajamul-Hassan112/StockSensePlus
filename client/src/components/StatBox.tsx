import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ColFlex, RowFlex } from "../theme/style_extentions/Flex";

interface StatBoxProps {
  icon: ReactNode;
  title: string;
  value: string;
}

const StatBox = ({ icon, title, value }: StatBoxProps) => {
  return (
    <Box
      sx={{
        ...ColFlex,
        width: "30%",
        color: "white",
        p: 2.5,
        border: "5px solid white",
        borderRadius: "10px",
        gap: 2,
      }}
    >
      <Box
        sx={{
          ...RowFlex,
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {icon}
        <Typography variant="h4" fontWeight={600}>
          {value}
        </Typography>
      </Box>
      <Typography variant="body1" fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
};

export default StatBox;