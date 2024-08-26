import React from "react";

import { Container } from "@mui/material";
import { Items } from "./Items";
import { AppBar } from "./AppBar";
import { ProductForm } from "./ProductForm";

export const Layout: React.FC = () => {
  return (
    <Container>
      <AppBar />
      <ProductForm />
      <Items />
    </Container>
  );
};
