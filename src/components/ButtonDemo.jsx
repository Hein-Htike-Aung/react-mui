import { Add, Send } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import React from 'react';

const ButtonDemo = () => {
	const BlueButton = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.otherColor.main,
		color: '#888',
		margin: 5,
		'&:hover': {
			backgroundColor: 'lightblue',
		},
		'&:disabled:': {
			backgroundColor: 'gray',
			color: 'white',
		},
	}));

	return (
		<div>
			<Button variant='text'>Text</Button>
			<Button startIcon={<Add />} color='otherColor' variant='contained'>
				Contained
			</Button>
			<Button endIcon={<Send />} variant='outlined'>
				Outlined
			</Button>
			<Button
				variant='contained'
				sx={{
					backgroundColor: 'skyblue',
					color: '#888',
					margin: 5,
					'&:hover': {
						backgroundColor: 'lightblue',
					},
					'&:disabled:': {
						backgroundColor: 'gray',
						color: 'white',
					},
				}}
			>
				Inner Style
			</Button>
			<BlueButton variant='contained'>Using styled</BlueButton>
		</div>
	);
};

export default ButtonDemo;
