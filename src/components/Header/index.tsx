import Lottie from 'react-lottie';
import logoAnimation from 'assets/lotties/star-wars-animation.json'
import {Container} from 'components/Header/style'


export function  Header() {
	const logoAnimationOptions = {
		loop: true,
		autoplay: true,
		animationData: logoAnimation,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  }


	return(
		<Container>
			<Lottie 
				options={logoAnimationOptions}
				isClickToPauseDisabled
			/>
		</Container>
	)
  	
}
