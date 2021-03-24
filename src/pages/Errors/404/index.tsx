import Lottie from 'react-lottie'

import {Container} from 'pages/Errors/404/style'

import logoAnimation from 'assets/lotties/error-404.json'


export function Error404(){

	const Error404AnimationOptions = {
		loop: true,
		autoplay: true,
		animationData: logoAnimation,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  }

	return (
		<Container>
			<Lottie options={Error404AnimationOptions} isClickToPauseDisabled />
		</Container>
	)
}