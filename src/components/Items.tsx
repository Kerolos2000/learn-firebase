import React from "react";
import { useFireStore } from "../firebase/useFireStore";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export interface ItemsProps {}

export const Items: React.FC<ItemsProps> = () => {
  const items = useFireStore("items");
  return (
    <>
      <h1>Items List</h1>
      <Grid container spacing={2}>
        {items.map((item) => {
          const { id, product_name, product_price, offer } = item;
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product_price} {offer ? "(On Offer)" : ""}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {offer ? "Offer Available" : "No Offer Available"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
