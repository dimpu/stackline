import "./App.css";
import { Layout } from "antd";
import AppHeader from './components/AppHeader';
import AppContent from "./components/AppContent";
import { useAppSelector, useAppDispatch } from './store'
import { fetchDataAsync, isAppLoading } from "./store/slices/appSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isAppLoading);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </div>
  );
}

export default App;
