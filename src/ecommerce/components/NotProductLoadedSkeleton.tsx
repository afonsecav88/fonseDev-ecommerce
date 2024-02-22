import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { CardActions } from '@mui/material';

export const NotProductLoadedSkeleton = () => {
  return (
    <Card sx={{ width: 320, height: 600, m: 2 }}>
      <CardHeader
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="60%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton
        sx={{ height: 150 }}
        width="100%"
        animation="wave"
        variant="rectangular"
      />
      <CardContent>
        <>
          <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={150} width="100%" />
          <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
        </>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton
          animation="wave"
          width={100}
          height={50}
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          width={100}
          height={50}
          style={{ marginBottom: 6 }}
        />
      </CardActions>
    </Card>
  );
};

export const LoaderSkeleton = () => {
  return (
    <>
      <NotProductLoadedSkeleton />
      <NotProductLoadedSkeleton />
      <NotProductLoadedSkeleton />
    </>
  );
};
