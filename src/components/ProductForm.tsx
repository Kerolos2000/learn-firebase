import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export interface ProductFormProps {}

export const ProductForm: React.FC<ProductFormProps> = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      productName: "",
      productPrice: "",
      offer: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "items"), {
        product_name: data.productName,
        product_price: parseFloat(data.productPrice),
        offer: data.offer,
      });

      reset();

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="productName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Product Name"
            fullWidth
            margin="normal"
            required
          />
        )}
      />
      <Controller
        name="productPrice"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Product Price"
            type="number"
            fullWidth
            margin="normal"
            required
          />
        )}
      />
      <Controller
        name="offer"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Offer"
          />
        )}
      />
      <Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};
