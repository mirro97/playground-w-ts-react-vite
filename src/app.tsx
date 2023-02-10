import { QueryClient, QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { routes } from "./routes";
import React from "react";
import "./index.css";

const App = () => {
  const elem = useRoutes(routes);

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
