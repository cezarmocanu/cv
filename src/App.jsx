import 'fontsource-roboto';
import React,{useState} from 'react';
import { Avatar,
          Grid, 
          makeStyles, 
          Paper, 
          Typography,
          Box,
          Divider,
          Drawer,
          
          AppBar,
          Toolbar,
          Stepper,
          Zoom,
          Tooltip,
          Chip,
          Link as MaterialLink,
          ButtonGroup,
          Button,
          StepButton} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FaceIcon from '@material-ui/icons/Face';
import GitHubIcon from '@material-ui/icons/GitHub';
import avatar from './avatar.jpeg';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#ec407a',
    },
  },
});

const technicalSkills = [
  'Highly experienced in *HTML5*, *CSS3* and *Javascript*',
  'Work experience in *ReactJS*',
  'Practical experience in using *Git* *Version* *Control*',
  'Medium experience with *Java* and *Python*',
];

const personalSkills = [
  '*Flexible* professional who *embraces* *teamwork*, but who also enjoys working independently',
  '*Fast* *learner* able to aquire new skills in a short time',
  'Analythical person focused on *root* *cause* *analysis*'
];

const App = () => {

  const [tooltip, setTooltip] = useState({
    contact : false,
    experience: false,
    education: false,
    personal: false,
    technical: false
  });
  

  const useStyles = makeStyles(theme =>({
    header:{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: '0px'
    },
    contact:{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      width:'100%',
      height:'100%',
      borderRadius: '0px',
      
    },
    grid:{
      height:'100vh'
    },
    avatar: {
      width: theme.spacing(23),
      height: theme.spacing(23),
    },
    experienceAvatar:{
      width: theme.spacing(5),
      height: theme.spacing(5),
      backgroundColor: theme.palette.secondary.main
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: theme.palette.primary.contrastText,
    }
  }));
  
  const classes = useStyles();

  const renderSectionHeader = (title, Icon) => (
    <Box ml={1} p={2} display='flex'>
      <Avatar className={classes.experienceAvatar}>
          <Icon fontSize='small'/>
      </Avatar>
      <Box ml={1}>
        <Typography variant='h4'>
          {title}
        </Typography>
      </Box>
    </Box>
  );
  

  return (
    <ThemeProvider theme={theme}>
      <Box overflow='hidden'>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Box p={3} width='100%' display='flex' alignItems='center' justifyContent='space-evenly'>
              <ButtonGroup
                variant="text"
                color="primary">              
                  <Button>
                    <MaterialLink href='#contact'>
                      Contact
                    </MaterialLink>
                  </Button>
                  <Button>
                    <MaterialLink href='#experience'>
                      Experience
                    </MaterialLink>
                  </Button>
                  <Button>
                    <MaterialLink href='#education'>
                      Education
                    </MaterialLink>
                  </Button>
                  <Button>
                    <MaterialLink href='#technical'>
                      Technical Skills
                    </MaterialLink>
                  </Button>
                  <Button>
                    <MaterialLink href='#personal'>
                      Personal Skills
                    </MaterialLink>
                  </Button>
                  
              </ButtonGroup>
            </Box>
            
          </Toolbar>
        </AppBar>
        <Box minHeight='175vh'>
        <Grid className={classes.grid} container spacing={2}>
          
          <Grid id="contact" item xs={12}>
            <Paper className={classes.contact}>
              <Box p={5} display='flex' alignItems='center' justifyContent='space-evenly'>
                <Box flexGrow={2} display='flex' alignItems='flex-start' flexDirection='column'>
                  <Box mb={1}>
                    <Typography variant='h3'>
                      Cezar - Cristian Mocanu
                    </Typography>
                  </Box>
                  <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                    <Box mr={1} component={EmailIcon}/>
                    <Typography variant='h6'>
                      cezarmocanu2014@gmail.com
                    </Typography>
                  </Box>
                  <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                    <Box mr={1} component={PhoneIcon}/>
                    <Typography variant='h6'>
                      +40 771 581 400
                    </Typography>
                  </Box>
                  <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                    <Box mr={1} component={GitHubIcon}/>  
                    
                    <MaterialLink href='https://github.com/cezarmocanu/cv' target='_blank'>
                      <Typography color='secondary' variant='h6'>
                        See this project and more
                      </Typography>    
                    </MaterialLink>
                  </Box>
                  
                  <Chip
                  size='large'
                  color='secondary'
                  label={
                    <Typography variant='h6'>
                      Quick learning senior student, with 1 year of experience in web development.
                    </Typography>
                    }
                  />
                </Box>
                <Box flexGrow={1}>
                  <Avatar src={avatar} className={classes.avatar}/>
                </Box>
                
              </Box>
            </Paper>
          </Grid>

        
        
        <Grid item xs={12}>
          
          <Grid container spacing={2} justify="space-evenly">
            <Grid id="experience" item lg={6} xs={12}>
              <Paper elevation={1}>
                {renderSectionHeader('Experience', WorkIcon)}
                <Experience/>  
              </Paper>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Grid container spacing={2}>

                <Grid id="education" item  xs={12}>
                  <Paper elevation={1}>
                    {renderSectionHeader('Education', SchoolIcon)}
                    <Education/>  
                  </Paper>
                </Grid>

                <Grid id="technical" item  xs={12}>
                  <Paper elevation={1}>
                    {renderSectionHeader('Technical Skills', BuildIcon)}
                    <Skills skills={technicalSkills} Icon={BuildIcon}/>
                  </Paper>
                </Grid>

                <Grid id="personal" item xs={12}>
                  <Paper elevation={1}>
                    {renderSectionHeader('Personal Skills', FaceIcon)}
                    <Skills skills={personalSkills} Icon={FaceIcon}/>
                  </Paper>
                </Grid>

              </Grid>
            </Grid>
          </Grid>  
        </Grid>
        
        
      </Grid>
        </Box>
      </Box>
      
      
    </ThemeProvider>
    
  );
}

export default App;
