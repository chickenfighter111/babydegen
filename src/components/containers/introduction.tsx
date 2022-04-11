import { Container} from 'react-bootstrap';
import { Component } from 'react';
import trailer from '../media/trailer_sss_2.mp4'
import pp from '../media/pp.jpg'
const videoReact = require('video-react');

const Player = videoReact.Player
const BigPlayButton = videoReact.BigPlayButton

class ProjectIntro extends Component{

    render(){
        return(
            <div id="introduction" className='introContainer'>   
                <h2>Introduction</h2> 
                <Container className='introbody'>
                <h3>
                    
                    Snake Secret Service is pleased to welcome you, we are coming on Solana.
                    Watch out!
                    The secret operation is still in progress.
                            We are on a mission.
                            Join us to know more.
                    </h3>
                <Container className='mediaContainer'>
                    <Player
                    playsInline
                    poster={pp}
                    src={trailer}
                    >
                        <BigPlayButton position="center" />
                    </Player>
                    </Container>
                    </Container>
                
            </div>
        )
    }
}

export default (ProjectIntro);