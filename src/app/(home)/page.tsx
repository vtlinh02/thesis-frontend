"use client";

import { withAuth } from "@utils/withAuth";
import Feed from "../../components/Feed";

const Home = () => {
  return (
    <section className="pt-8">
      <Feed />{" "}
    </section>
  );
};

export default withAuth(Home);
