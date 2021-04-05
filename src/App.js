import Transition from "./Transition"

import "./App.scss"

export default function App() {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<button onClick={() => setOpen(!open)}>Press me</button>
			<div className="center min-h-screen">
				<Transition
					from={{
						boxShadow: `
							0 0 1px hsla(0, 0%, 0%, 0.25),
							0 0 transparent,
							0 0 transparent
						`,
						opacity: 0,
						y: -20,
						scale: 0.75,
						durMS: 400,
						// delayMS: 2_000,
					}}
					to={{
						boxShadow: `
							0 0 1px hsla(0, 0%, 0%, 0.25),
							0 8px 8px hsla(0, 0%, 0%, 0.1),
							0 2px 8px hsla(0, 0%, 0%, 0.1)
						`,
						opacity: 1,
						y: 0,
						scale: 1,
						durMS: 200,
						// delayMS: 1_000,
					}}
					func="cubic-bezier(0, 0.75, 0.25, 1.1)"
				// delayMS={1_000}
				>
					{open && (
						<div className="modal center">
							<h1>Hello, world!</h1>
						</div>
					)}
				</Transition>
			</div>
		</>
	)
}
