import React from 'react';
import { Avatar, Grid, makeStyles, Paper, Typography,Chip,CircularProgress, Box,List,ListItem,ListItemText,Divider} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';

//What I did there
const experience = [
    {
      label:'Javascript Developer',
      company: 'Luxoft',
      startDate: 'October 2020',
      endDate: 'Ongoing',
      skills: [
        {
          description: 'Bug solving and enhancements implementation',
          technology: ['React.js', 'JavaScript']
        }
      ]
    },
    {
      label:'Spring Training: AI in Medicine',
      company: 'Siemens',
      startDate: 'May 2020',
      endDate: 'June 2020',
      skills: [
        {
          description: 'Designing and training Neural Networks',
          technology: ['Python', 'Tensorflow']
        },
        {
          description: 'Processing medical images with AI',
          technology: ['Python']
        },
        {
          description: 'Profiling and analysing AI model performance',
        }
      ]
    },
    {
      label:'Junior Front-End Developer',
      company: 'boogit.ro',
      startDate: '2017',
      endDate: '2018',
      skills: [
        {
          description: 'Developing component templates from mockups',
          technology: ['Thymeleaf', 'CSS', 'JavaScript']
        },
        {
          description: 'Bug solving',
          technology: ['Javascript', 'JQuery']
        }
        
      ]
    },
  ];
  
const Experience = () => {
    return  (
        <List>
            {experience.map(item => {
                const itemHeader = (
                    <React.Fragment>
                        <Box display='flex' direction="row" justifyContent="space-between" alignItems="center">
                            <Box display='flex' alignItems="center">
                                <WorkIcon color='primary'/>
                                <Typography variant='h6'>
                                    {item.label} - {item.company}
                                </Typography>
                            </Box>
                            
                            
                            <Box display='flex' alignItems="center">
                                <Typography variant='h6'>
                                    {`${item.startDate} - `}
                                </Typography>
                                <Typography variant='h6'>
                                    {item.endDate}
                                </Typography>
                            </Box>
                            
                            
                        </Box>
                        <Divider />
                    </React.Fragment>
                );

                const skillList = (
                    <List>
                        {item.skills.map(skill => {

                            const techList = (
                                <Box display='flex' mt={1}>
                                   {skill.technology && skill.technology.map(tech => (
                                       <Box mr={1}>
                                           <Chip variant='outlined' size='small' color='primary' ml={2} label={tech}/>
                                        </Box>
                                    ))} 
                                </Box>
                                
                            )

                            return (
                                <ListItem>
                                    <ListItemText primary={skill.description} secondary={techList} />
                                </ListItem>
                            )}
                        )}
                    </List>    
                )
                return (
                    <React.Fragment>
                        <ListItem>
                            <ListItemText primary={itemHeader} secondary={skillList} />
                        </ListItem>
                    </React.Fragment>
                );
            })}    
        </List>
    );
    

  
};

export default Experience;