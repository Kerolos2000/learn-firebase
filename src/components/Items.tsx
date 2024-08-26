import React from "react";
import { useFireStore } from "../firebase/useFireStore";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export interface ItemsProps {}

export const Items: React.FC<ItemsProps> = () => {
  const items = useFireStore("items");

  return (
    <>
      <Typography variant="h4" sx={{ margin: 2 }}>
        Items List
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => {
          const { product_name, product_price, offer } = item;
          return (
            <Grid item xs={12} sm={6} md={4} key={JSON.stringify(item)}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent={"space-between"}>
                    <Typography variant="h6" component="div">
                      {product_name}
                    </Typography>
                    {offer ? (
                      <Chip
                        label="On Offer"
                        color="primary"
                        sx={{ marginTop: 1 }}
                      />
                    ) : null}
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product_price}
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
