import Head from "next/head";
import React from "react";
import BookSessionPage from "../../components/Pages/BookSessionPage/BookSessionPage";

function index() {
  return (
    <>
      <Head>
        <title>Book Session</title>
          </Head>
          
          <BookSessionPage/>
    </>
  );
}

export default index;
