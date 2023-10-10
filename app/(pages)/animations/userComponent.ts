// UserComponent.js
import { renderToNodeStream } from "react-dom/server"

export default function UserComponent() {
	const userCode = `
      <div>
      <h1>Hello from User Component</h1>
        <h1>Hello from User Component</h1>
      </div>
  `

	const stream = renderToNodeStream(userCode)

	return (
		<div>
			<h1>User Component</h1>
			{stream}
		</div>
	)
}
