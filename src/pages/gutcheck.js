import React, {useState, useRef} from 'react'
// import Radios from '../components/Radios'
// import FormName from '../components/FormName'
import StepForm from '../components/StepForm'
import Layout from '../components/Layout'

const Form = () => {
		const formRef = useRef(null)
		const scriptUrl = "https://script.google.com/a/macros/overhaulmedia.com/s/AKfycbwE4Ed4-OEhVdeY_Kvfp2O-6GMlGc9-0Jwf9tXGJB8oDUFtxC1aRoGxgUj_HsVbX_lc/exec"
		const [loading, setLoading] = useState(false)
		const slide = [
			"A"
		]

		const handleSubmit = (e) =>{
				e.preventDefault()
				setLoading(true)

				fetch(scriptUrl, {
				method: 'POST', 
				body: new FormData(formRef.current),

		}).then(res => {
						console.log("SUCCESSFULLY SUBMITTED")
						document.getElementsByClassName('gutcheck').innerHtml = "DONE"
						setLoading(false)
				})
				.catch(err => console.log(err))
		}

	return (
		<div>
			<Layout themeColor="dark">
			<form className="gutcheck" ref={formRef} onSubmit={handleSubmit} name="google-sheet">
				<StepForm>
				</StepForm>
			</form>
			</Layout>
		</div>

	)
}

export default Form