import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { CardBlog } from "../Card";
import Loading from "../Loading";
import { usePostData } from "../../context/PostProvider";

export const GridCards = () => {
  const { allPost, loading, error } = usePostData();

  

  if (loading) {
    return <Loading type="spin" color="#000" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        styled={{ backgroundColor: "red" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allPost.map((post, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CardBlog
              key={index}
              imgUrl={post.miniature}
              title={post.title}
              descrption={post.content}
              slug={post.slug}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
