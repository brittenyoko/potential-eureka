import React from "react";
import "./styles/Post.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
       <Card className="post-container" sx={{ maxWidth: 345 }}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="140"
           image={imgUrl}
           alt="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {title}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {body}
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>
);
};

export default Post;
