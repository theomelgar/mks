"use client";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Vitrine from "../src/components/Vitrine";
import { Box, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "@/Interfaces/Produtos";
import axios from "axios";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );

    return response.data.products;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}


export default function Home() {
  const { data, isLoading} = useQuery({
    queryKey:[ "products"],
    queryFn: fetchData
  })

  // const [queryClient] =  useState(() => new QueryClient())

  // const [loading, setLoading] = useState(true);
  // const [produtos, setProdutos] = useState<Product[]>([]);



  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>

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
              <Header />
              <Vitrine produtos={data} />
              <Footer />
            </>
          )}

    </>
  );
}
