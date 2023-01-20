import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import * as SC from './ArticleListItem.styled';
import { Hightlight } from 'components/Hightlight/Hightlight';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import { CustomLink } from 'components/CustomLink/CustomLink';

export const ArticleListItem = ({ article }) => {
  const { id, imageUrl, updatedAt, title, summary } = article;
  const location = useLocation();
  const { keyword } = useGetSearchParams();

  const dateConverter = useCallback(value => {
    const data = new Date(value.slice(0, 10));
    return data.toDateString().slice(3);
  }, []);

  const ChangeColor = useCallback(
    str => {
      return <Hightlight filter={keyword} str={str} />;
    },
    [keyword]
  );

  return (
    <SC.Item item xs={12} md={4} component="li">
      <SC.Wrap>
        <SC.Image component="img" src={`${imageUrl}`} alt={`${title}`} />

        <SC.Content>
          {updatedAt && (
            <SC.DateText component="p">{dateConverter(updatedAt)}</SC.DateText>
          )}
          <SC.CardTitle variant="h5" component="h2">
            {ChangeColor(title)}
          </SC.CardTitle>
          <SC.CardText component="p">
            {ChangeColor(summary.slice(0, 100))}
          </SC.CardText>
        </SC.Content>
        <CustomLink to={`articlePage/${id}`} state={{ from: location }}>
          Read more
        </CustomLink>
      </SC.Wrap>
    </SC.Item>
  );
};

// import { useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import * as SC from './ArticleListItem.styled';
// import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import { Hightlight } from 'components/Hightlight/Hightlight';
// import { useGetSearchParams } from 'Huks/GetSearchParams';

// export const ArticleListItem = ({ article }) => {
//   const { id, imageUrl, updatedAt, title, summary } = article;
//   const location = useLocation();
//   const { keyword } = useGetSearchParams();

//   const dateConverter = useCallback(value => {
//     const data = new Date(value.slice(0, 10));
//     return data.toDateString().slice(3);
//   }, []);

//   const ChangeColor = useCallback(
//     str => {
//       return <Hightlight filter={keyword} str={str} />;
//     },
//     [keyword]
//   );

//   return (
//     <Grid
//       item
//       xs={12}
//       md={4}
//       component="li"
//       sx={{ display: 'flex', flexDirection: 'column' }}
//     >
//       <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//         <CardMedia
//           component="img"
//           src={`${imageUrl}`}
//           alt={`${title}`}
//           sx={{ height: 240 }}
//         />

//         <CardContent sx={{ flexGrow: '1' }}>
//           {updatedAt && (
//             <Typography component="p" sx={{ mb: '16px' }}>
//               {dateConverter(updatedAt)}
//             </Typography>
//           )}
//           <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>
//             {ChangeColor(title)}
//           </Typography>
//           <Typography component="p">
//             {ChangeColor(summary.slice(0, 100))}
//           </Typography>
//         </CardContent>
//         <SC.LinkTo to={`articlePage/${id}`} state={{ from: location }}>
//           Read more
//         </SC.LinkTo>
//       </Card>
//     </Grid>
//   );
// };
