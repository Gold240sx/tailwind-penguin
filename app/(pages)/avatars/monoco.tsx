import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react"
import ReactDOM from "react-dom"
import React, { useRef, useEffect } from "react"

const Monoco = () => {
	const monaco = useMonaco()
	const editorRef = useRef(null)

	useEffect(() => {
		// do conditional chaining
		monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true)
		// or make sure that it exists by other ways
		if (monaco) {
			console.log("here is the monaco instance:", monaco)
		}
	}, [monaco])

	function handleEditorWillMount(monaco) {
		// here is the monaco instance
		// do something before editor is mounted
		monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true)
	}

	function handleEditorDidMount(editor, monaco) {
		// here is the editor instance
		// you can store it in `useRef` for further usage
		editorRef.current = editor
	}

	function showValue() {
		alert(editorRef.current.getValue())
	}

	loader.init().then((monaco) => console.log("here is the monaco instance:", monaco))

	return (
		<div>
			<button onClick={showValue}>Show value</button>
			<Editor
				height="90vh"
				defaultValue="<p>Hello, my friend!</p>// some comment"
				onMount={handleEditorDidMount}
				defaultLanguage="javascript"
			/>
		</div>
	)
}

export default Monoco
