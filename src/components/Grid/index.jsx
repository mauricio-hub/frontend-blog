import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { CardBlog } from "../Card";
import Loading from "../Loading";
import { usePostData } from "../../context/PostProvider";

export const GridCards = () => {
  const { allPost, loading, error } = usePostData();


  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };

  if (loading) {
    return <Loading type="spin" color="#000" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 20, marginBottom: 20 }}>
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
              descrption={truncateText(post.content, 30)} 
              slug={post.slug}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
