import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter'; import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, IconButton, Typography } from '@mui/material';
import ReactTypingEffect from 'react-typing-effect';

function App() {

  const homePageBtn = [
    'Home',
    'About',
    'Portfolio',
    'Contact'
  ]

  const socialMediaBtn = [
    {
      icon: <GitHubIcon />,
      link: 'www.github.com/mbganesh'
    },
    {
      icon: <TwitterIcon />,
      link: 'www.twitter.com/mbganesh'
    },
    {
      icon: <LinkedInIcon />,
      link: 'www.linkedin.com/mbganesh'
    },
    {
      icon: <InstagramIcon />,
      link: 'www.instagram.com/mbganesh'
    },
  ]


  const typingText = [
    'A Full Stack Developer',
    'A UI/UX Designer',
    'Android Developer',
    'DevOps'
  ]
  
  return (

    <>


      {/* home page */}
      <div style={{display:'flex' , flexWrap:'wrap' ,height:'94vh' , padding:'3vh 0px' , backgroundColor:'skyblue' ,}}>

        {/* profile */}
        <div style={{ backgroundColor: '#ddd', width: '300px', borderRadius: '11px', background: '#e0e0e0', boxShadow: `8px 8px 19px #8b8b8b, -8px -8px 19px #ffffff`, margin: '10px' }}>


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <img src='https://mbganesh.github.io/my_profile/static/media/ganesh.0e10f136.png' alt='loading' style={{
              width: '100px', height: '100px', borderRadius: '50%', background: '#e0e0e0', boxShadow: `5px 5px 9px #bebebe,
             -5px -5px 9px #ffffff, inset -5px -5px 9px #ffffff`, padding: '2%'
            }} />


            <Typography variant='h5'>
              Ganesh
            </Typography>

            <Typography variant='body1' sx={{ color: 'gray' }}>
              Full Stack Developer
            </Typography>

          </div>



          <div>

            {
              homePageBtn.map((obj, i) => (
                <div style={{
                  borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', background: `linear-gradient(145deg, #f0f0f0, #cacaca)`, textAlign: 'center', margin: '10px 30px', padding: '10px', boxShadow: `inset 8px 8px 16px #d3d3d3, inset -8px -8px 16px #ededed`,
                }}>
                  <Button fullWidth key={i} sx={{
                    borderTopLeftRadius: '20px', borderBottomRightRadius: '20px', background: `linear-gradient(145deg, #f0f0f0, #cacaca)`, boxShadow: `5px 5px 9px #bebebe,
                  -5px -5px 9px #ffffff`, textAlign: 'center', padding: '15px'
                  }} variant='body1' >
                    {obj}
                  </Button>
                </div>
              ))
            }

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {
              socialMediaBtn.map((obj, i) => (
                <div style={{ width: '45px', margin: '15px', borderRadius: '17px', background: '#ededed', boxShadow: `8px 8px 16px #d3d3d3, -8px -8px 16px #e0e0e0`, }}>
                  <IconButton sx={{ borderRadius: '17px', background: '#e0e0e0', boxShadow: `8px 8px 16px #d3d3d3, -8px -8px 16px #ededed`, }} >
                    {obj.icon}
                  </IconButton>
                </div>
              ))
            }
          </div>



        </div>


        {/* container */}
        <div style={{flex:1, backgroundColor: '#ddd', borderRadius: '11px', background: '#e0e0e0', boxShadow: `8px 8px 19px #8b8b8b, -8px -8px 19px #ffffff`, margin: '10px' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>

        <div style={{}}>
          <Typography variant='h3'> Ganesh Dev </Typography>
        <ReactTypingEffect  text={typingText} speed={100} eraseDelay={900}
        displayTextRenderer={(text, i) => {
          return (
            <Typography variant='subtitle1' sx={{color:'gray'}}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{}}
                  >{char}</span>
                );
              })}
            </Typography>
          );
        }}        
        />
          </div>

        </div>

      </div>

    </>
  );
}

export default App;
