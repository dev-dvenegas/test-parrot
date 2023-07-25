import React from "react";
import { Product } from "../../../domain/models/products";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControlLabel,
  Switch,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

interface MenuItemProps {
  product: Product;
  handleAvailability: (productId: string, availability: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ product, handleAvailability }) => {
  return (
    <Card
      sx={{
        height: "100%",
        // minWidth: 260,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }} aria-label="recipe">
            P
          </Avatar>
        }
        title={product.name}
        subheader={`Precio: $${product.price}`}
      />
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: "56.25%",
        }}
        image={product.imageUrl}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <FormControlLabel
          control={
            <Switch
              checked={product.availability === "AVAILABLE"}
              color="secondary"
              onChange={() =>
                handleAvailability(product.uuid, product.availability)
              }
            />
          }
          label={
            product.availability === "AVAILABLE"
              ? "Disponible"
              : "No Disponible"
          }
        />
      </CardActions>
    </Card>
  );
};

export default MenuItem;
