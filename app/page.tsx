"use client";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Vitrine from "../src/components/Vitrine";
import { Box, Skeleton, Stack } from "@mui/material";
import { getProdutos } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useState } from "react";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProdutos,
  });

  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <>
      <Provider store={store}>
        {isLoading ? (
          <Stack spacing={12} width="100%">
            <Skeleton variant="rectangular" width="100vw" height={101} />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                flexWrap="wrap"
                gap="2em"
                width="60%"
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <Stack key={index} width={218}>
                    <Skeleton variant="rounded" width={217.56} height={235} />
                    <Skeleton variant="text" width={217.56} height={36} />
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>
        ) : (
          <>
            <Header setOpenCart={setIsOpenCart} isOpenCart={isOpenCart}/>
            <Vitrine setIsOpenCart={setIsOpenCart} produtos={data} />
            <Footer />
          </>
        )}
      </Provider>
    </>
  );
}
