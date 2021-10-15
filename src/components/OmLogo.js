import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/navigation.scss'

function OmLogo(){
	return(
		<Link to="/" className="logo cursor-text--🏠"> 
			<svg id="logo" className="scaling-svg" viewBox="0 0 140 55">
				<g>
					<path d="M10.3,9.4H8c-2.7,0-4.8,1.4-6.1,3.4c-1.3,2-1.9,4.6-1.9,7.1c0,2.5,0.6,5.1,1.9,7.1c1.3,2,3.4,3.4,6.1,3.4h2.3
						c2.7,0,4.8-1.4,6.1-3.4c1.3-2,1.9-4.6,1.9-7.1c0-2.6-0.6-5.1-1.9-7.1C15.1,10.7,13,9.4,10.3,9.4z M15.2,26.1
						c-1.1,1.7-2.7,2.7-4.9,2.7v0H8c-2.2,0-3.7-1-4.9-2.7c-1.1-1.7-1.7-4-1.7-6.3c0-2.3,0.6-4.6,1.7-6.3c1.1-1.7,2.7-2.7,4.9-2.7h2.3
						c2.2,0,3.7,1.1,4.9,2.7c1.1,1.7,1.7,4,1.7,6.3C16.9,22.1,16.3,24.4,15.2,26.1z"/>
					<path d="M35.7,9.5c-0.4-0.1-0.8,0.2-0.8,0.6c-0.3,1.9-1.1,5.8-1.9,9.5c-0.4,1.9-0.8,3.7-1.2,5.1c-0.4,1.4-0.7,2.6-0.9,2.9
						c-0.3,0.7-1.5,1.1-2.6,1c-1,0-2.3-0.4-2.6-1c-0.2-0.4-0.5-1.5-0.9-2.9c-1.1-4.3-2.7-11.8-3.1-14.7c-0.1-0.4-0.4-0.7-0.8-0.6
						c-0.4,0.1-0.7,0.4-0.6,0.8c0.3,1.9,1.1,5.9,1.9,9.6c0.4,1.9,0.8,3.7,1.2,5.2c0.4,1.5,0.7,2.6,1,3.2c0.8,1.6,2.6,1.8,3.9,1.9
						c1.3,0,3.1-0.3,3.9-1.9c0.3-0.6,0.6-1.7,1-3.2c1.1-4.4,2.7-11.9,3.1-14.8C36.4,10,36.1,9.6,35.7,9.5z"/>
					<path d="M53.5,26.5c-2.3,0.7-5.9,2.2-8.7,2.2c-1.5,0-2.6-0.4-3.3-1.5c-0.4-0.5-0.4-1.1-0.4-1.9v-9.7c0-2.2,1.3-3.2,2.6-3.9
						c0.7-0.3,1.4-0.5,1.9-0.5C46,11,46.2,11,46.4,11c0.2,0,0.2,0,0.2,0h0.1c0,0,0.1,0,0.4,0c0.6,0,1.8,0.1,2.8,0.7
						c1,0.6,1.9,1.5,2.1,3.5c0,0.4,0.1,0.7,0.1,1.1c0,1-0.2,1.6-0.5,2c-0.3,0.4-0.9,0.7-2,0.7h-5c-0.4,0-0.7,0.3-0.7,0.7
						c0,0.4,0.3,0.7,0.7,0.7h5c1.3,0,2.4-0.4,3.1-1.2c0.7-0.8,0.9-1.8,0.9-2.9c0-0.4,0-0.8-0.1-1.2c-0.2-2.5-1.5-3.9-2.9-4.7
						c-1.4-0.7-2.8-0.8-3.5-0.8c-0.2,0-0.4,0-0.5,0c-0.3,0-1.8,0.1-3.3,0.8c-1.7,0.7-3.5,2.3-3.5,5.2v9.7c0,0.8,0.1,1.8,0.6,2.7
						c1,1.6,2.8,2.2,4.5,2.2h0.2c3.2,0,6.9-1.6,9-2.2c0.4-0.1,0.6-0.5,0.5-0.9S53.9,26.4,53.5,26.5z"/>
					<path d="M67.8,9.9c-1-0.4-2-0.4-2.5-0.4c-0.2,0-0.4,0-0.5,0c-0.3,0-1.8,0.1-3.3,0.8c-0.7,0.3-1.4,0.7-2,1.4v-0.6
						c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v18.4c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7v-14c0,0,0,0,0,0
						c0-2.2,1.3-3.2,2.6-3.9c0.7-0.3,1.4-0.5,1.9-0.5c0.2-0.1,0.5-0.1,0.6-0.1c0.2,0,0.2,0,0.2,0H65c0,0,0.1,0,0.4,0
						c0.5,0,1.3,0.1,2,0.3c0.4,0.1,0.8-0.1,0.9-0.5C68.4,10.5,68.2,10.1,67.8,9.9z"/>
					<path d="M83.5,10.4c-1.4-0.7-2.9-0.8-3.7-0.8c-0.3,0-0.4,0-0.5,0c-0.2,0-1.8,0.1-3.4,0.7c-0.7,0.3-1.5,0.7-2.2,1.4V1
						c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v28.5c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V15.5c0,0,0,0,0,0
						c0-2.2,1.3-3.2,2.7-3.8c0.7-0.3,1.4-0.5,2-0.6C78.6,11,78.8,11,79,11c0.1,0,0.2,0,0.2,0h0.1c0,0,0.1,0,0.4,0c0.7,0,2,0.1,3.1,0.7
						c1.1,0.6,2,1.5,2.3,3.5v14.4c0,0.4,0.3,0.7,0.7,0.8c0.4,0,0.7-0.3,0.7-0.7V15.1V15C86.3,12.6,84.9,11.1,83.5,10.4z"/>
					<path d="M134.5,28.8C134.5,28.8,134.5,28.8,134.5,28.8c-0.5-0.3-2.4-1.2-2.4-3.8V1c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7v24l0,0
						c0,1.9,0.8,3.3,1.7,4.1c0.8,0.8,1.6,1.1,1.7,1.1c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.2,0.7-0.5C135.1,29.4,134.9,29,134.5,28.8z"/>
					<path d="M106.5,28.8C106.5,28.8,106.5,28.8,106.5,28.8c-0.3-0.2-1.1-0.6-1.7-1.5c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3
						c-0.3-0.5-0.4-1.1-0.4-1.9v-0.8v-9.7c0-0.9-0.1-1.8-0.6-2.7c-1-1.7-2.8-2.3-4.6-2.2c-2,0-4.1,0.6-5.9,1.2c-0.4,0.1-0.6,0.5-0.5,0.9
						c0.1,0.4,0.5,0.6,0.9,0.5c1.8-0.6,3.8-1.1,5.5-1.1c1.5,0,2.6,0.4,3.3,1.5c0.4,0.5,0.4,1.1,0.4,1.9v9.7V25c0,0.8,0.1,1.4,0.3,2
						c-2.2,0.7-4.8,1.6-7,1.6c-1.5,0-2.6-0.4-3.3-1.5c-0.3-0.5-0.4-1.1-0.4-1.8c0,0,0-0.1,0-0.1c0-1.9,0.8-2.8,2.2-3.6
						c1.4-0.8,3.5-1.3,5.7-1.8c0,0,0,0,0,0c0.3-0.1,0.7-0.2,1-0.2c0.4-0.1,0.6-0.5,0.5-0.9c-0.1-0.4-0.5-0.6-0.9-0.5
						c-0.3,0.1-0.6,0.2-1,0.2c0,0,0,0,0,0c-2.2,0.6-4.4,1-6.1,2c-1.7,0.9-2.9,2.4-2.9,4.7c0,0.1,0,0.1,0,0.2c0,0.9,0.1,1.8,0.6,2.7
						c1,1.6,2.8,2.2,4.5,2.2h0.1c2.6,0,5.5-1.1,7.6-1.8c0.2,0.3,0.4,0.5,0.6,0.7c0.8,0.8,1.6,1.1,1.7,1.1c0.1,0,0.2,0.1,0.3,0.1
						c0.3,0,0.6-0.2,0.6-0.5C107.1,29.4,106.9,29,106.5,28.8z"/>
					<path d="M126.5,28.8C126.5,28.8,126.5,28.8,126.5,28.8c-0.5-0.3-2.4-1.2-2.4-3.8V10.3c0-0.4-0.3-0.7-0.7-0.7
						c-0.4,0-0.7,0.3-0.7,0.7V25c0,0,0,0,0,0c0,0,0,0,0,0v1.8c0,0.3-0.1,0.5-0.5,0.8c-0.6,0.4-1.7,0.7-2.6,0.9c-0.8,0.2-1.5,0.2-1.6,0.2
						h-0.7c-3.1,0-4.4-1.3-5.2-2.8c-0.8-1.4-0.8-3.1-0.8-3.5c0-0.1,0-0.1,0-0.1v0V10.3c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7
						v12.1c0,0,0,0.1,0,0.1c0,0.5,0.1,2.3,1,4.2c0.9,1.8,2.9,3.5,6.4,3.5c0,0,0.1,0,0.1,0h0.7h0.1c0,0,1.4-0.1,2.9-0.5
						c0.7-0.2,1.5-0.5,2.1-0.9c0.2-0.2,0.5-0.4,0.7-0.6c0.2,0.3,0.5,0.6,0.7,0.8c0.8,0.8,1.6,1.1,1.7,1.1c0.1,0,0.2,0.1,0.2,0.1
						c0.3,0,0.6-0.2,0.7-0.5C127.1,29.4,126.9,29,126.5,28.8z"/>
				</g>
			</svg>
		</Link>
	)
}

export default OmLogo