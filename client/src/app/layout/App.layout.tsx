import React, { useEffect } from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import { ScrollRestoration, useParams } from "react-router-dom/";
import JobPostSearchForm from "./JobPostSearchForm.layout";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../components/home/HomePage.component";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../stores/common/common.selector";
import { setCurrentUserLoading } from "../stores/users/user.action";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);
  const { id } = useParams();
  const visiblePaths = ["/", "/browse-jobs", `/browse-jobs/${id}`];
  const isSearchFormVisible = visiblePaths.includes(location.pathname);

  useEffect(() => {
  if (userToken) {
    dispatch(setCurrentUserLoading())
  }
  }, [])
  
  return (
    <div className="app">
      <ScrollRestoration />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      {isSearchFormVisible && (
        <div className="app__search">
          <JobPostSearchForm />
        </div>
      )}
      <main className="app__main">
        {location.pathname === "/" ? <HomePage /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
