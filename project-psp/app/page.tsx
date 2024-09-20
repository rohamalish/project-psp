"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from "./components/main/page";

export default function Home() {

  const queryClient = new QueryClient();

  return (
      <Main />
  );
}
