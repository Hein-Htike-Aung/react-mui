import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import AddPost from './components/AddPost';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

const App = () => {
	const [mode, setMode] = useState('light');

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={'background.default'} color={'text.primary'}>
				<Navbar />
				<Stack direction='row' spacing={2}>
					<Sidebar
						setMode={() =>
							mode === 'light' ? setMode('dark') : setMode('light')
						}
					/>
					<Feed />
					<Rightbar />
				</Stack>
				<AddPost />
			</Box>
		</ThemeProvider>
	);
};

export default App;
