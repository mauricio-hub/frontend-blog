import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardBlog = ({ descrption, title, date, slug, imgUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="body2" component="div">
            <span style={{ fontWeight: "600" }}>{title}</span>
          </Typography>
        }
        subheader={
          <Typography variant="body2" component="div">
            {date}
          </Typography>
        }
        about={slug}
      />

      <CardMedia component="img" height="194" image={imgUrl} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descrption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Leer post</Button>
      </CardActions>
    </Card>
  );
};
