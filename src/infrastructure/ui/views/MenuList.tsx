import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Box from "@mui/material/Box";
import StoreIcon from "@mui/icons-material/Store";
import Button from "@mui/material/Button";
import MenuItem from "../components/MenuItem";
import { RootState } from "../../../application/reducers";
import useStoreActions from "../../../features/stores/useStoreActions";
import useProductsActions from "../../../features/products/useProductsActions";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AppBar,
  Backdrop,
  ButtonGroup,
  CircularProgress,
  Container,
  Toolbar,
} from "@mui/material";
import useLoginActions from "../../../features/login/useLoginActions";
const MenuList: React.FC = () => {
  const { stores } = useStoreActions();
  const { getProducts, handleUpdateProductAvailability } = useProductsActions();
  const { handleLogout } = useLoginActions();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const { data, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const handleExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    stores.length > 0 && getProducts(stores[0].uuid);
  }, [stores]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AppBar position="relative" color={"secondary"}>
        <Toolbar>
          <RestaurantMenuIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Parrot Software
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="h3" component="h3">
            Tiendas
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {stores.map((store) => (
              <Button
                key={store.uuid}
                onClick={() => getProducts(store.uuid)}
                startIcon={<StoreIcon />}
              >
                {store.name}
              </Button>
            ))}
          </ButtonGroup>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          {data.map((category) => (
            <Accordion
              key={category.uuid}
              expanded={expanded === category.uuid}
              onChange={handleExpanded(category.uuid)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Categoria: {category.name}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Cantidad de productos: {category.products.length}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={{ xs: 2, md: 3 }}
                >
                  {category.products.map((product) => (
                    <Grid key={product.uuid} item xs={8} md={4}>
                      <MenuItem
                        product={product}
                        handleAvailability={handleUpdateProductAvailability}
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default MenuList;
