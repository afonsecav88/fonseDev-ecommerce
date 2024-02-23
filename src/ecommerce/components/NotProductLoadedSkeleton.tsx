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
        subheader={
          <Skeleton
            animation="wave"
            height={10}
            width="40%"
            style={{ marginBottom: '60px' }}
          />
        }
      />
      <Skeleton
        sx={{ height: 150, marginLeft: '20%', marginBottom: 2 }}
        width="60%"
        animation="wave"
        variant="rectangular"
      />
      <CardContent>
        <>
          <Skeleton
            animation="wave"
            height={15}
            width="80%"
            style={{ marginBottom: 5, marginLeft: 8 }}
          />
          <Skeleton
            animation="wave"
            height={120}
            width="100%"
            style={{ marginBottom: 5 }}
          />
          <Skeleton
            animation="wave"
            height={15}
            width="50%"
            style={{ marginBottom: 8 }}
          />
          <Skeleton
            animation="wave"
            height={15}
            width="70%"
            style={{ marginBottom: 15 }}
          />
        </>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Skeleton
          animation="wave"
          width={100}
          height={50}
          sx={{ marginBottom: 2, marginLeft: 3 }}
        />
        <Skeleton
          animation="wave"
          width={100}
          height={50}
          sx={{ marginBottom: 2, marginRight: 3 }}
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
