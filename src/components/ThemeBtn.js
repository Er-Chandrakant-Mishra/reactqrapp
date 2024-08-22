import { useEffect, useState } from 'react';

export default function ThemeBtn() {
	const [theme, setTheme] = useState(true); // `true` indicates 'light' theme, `false` indicates 'dark' theme

	// Effect to apply theme class to the body
	useEffect(() => {
		document.body.classList.toggle('dark', !theme); // Add 'dark' class if `theme` is `false`, otherwise remove it
	}, [theme]);

	return (
		<div>
			{/* Label for light theme */}
			<h3 className={theme ? 'sr-only' : null}>Light</h3>

			{/* Checkbox input to toggle theme */}
			<input
				id="toggle"
				type="checkbox"
				className="toggle-checkbox"
				checked={!theme} // Checkbox is checked if `theme` is `false`
				onChange={() => setTheme(prevTheme => !prevTheme)} // Toggle theme on change
			/>

			{/* Label for the toggle switch */}
			<label htmlFor="toggle" className="toggle-label">
				<span className="toggle-label-bg"></span>
			</label>

			{/* Label for dark theme */}
			<h3 className={!theme ? 'sr-only' : null}>Dark</h3>
		</div>
	);
}
