import { Box, Skeleton, Stack } from '@mui/material';
import { useState } from 'react';
import Post from './Post';

const Feed = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, [2000]);

	return (
		<Box flex={4} p={2}  sx={{ margin: "0!important" }}>
			{loading ? (
				<Stack spacing={1}>
					<Skeleton variant='text' />
					<Skeleton variant='circular' width={40} height={40} />
					<Skeleton variant='rectangular' width={210} height={118} />
				</Stack>
			) : (
				<>
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</>
			)}
		</Box>
	);
};

export default Feed;
