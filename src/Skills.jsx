
import React from 'react';
import { Avatar, Grid, makeStyles, Paper, Typography,Chip, Box,List,ListItem,ListItemText,Divider} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

  
const Skills = ({skills,Icon}= {}) => {

    return  (
        <List>
            {skills && 
            skills.map(item => {
                const itemHeader = (
                    <Box display='flex' direction="row" alignItems="center" flexWrap='wrap'>
                        <Icon color='primary'/>
                       {item.split(' ').map(word => {
                           if(word.match(/\*\w+\*/g) !== null){
                                return (<Box mr={1}>
                                            <Typography variant='subtitle1' color='secondary'>
                                                {word.split('*')[1]}
                                            </Typography>
                                        </Box>);
                           }
                            
                           return (<Box mr={1} variant='subtitle2'>
                                    <Typography>
                                        {word}
                                    </Typography>
                                </Box>);
                       })}
                    </Box>
                        
                    
                );

                return (
                    <React.Fragment>
                        <ListItem>
                            <ListItemText primary={itemHeader}/>
                        </ListItem>
                    </React.Fragment>
                );
            })}    
        </List>
    );
};

export default Skills;