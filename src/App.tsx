import Layout from "./components/_shared/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details/:coinID" component={Details}></Route>
          </Switch>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
