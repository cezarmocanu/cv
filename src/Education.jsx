
import React from 'react';
import { Avatar, Grid, makeStyles, Paper, Typography,Chip, Box,List,ListItem,ListItemText,Divider} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';

//What I did there
const education = [
    {
        university: 'University of Transilvania, Romania',
        program:'BSc in Applied Computer Science (German Language)',
        startDate: 'October 2018',
        endDate: 'Ongoing'
    },
    {
        university: 'University of Heilbronn, Germany',
        program:'BSc in Software Engineering Erasmus+',
        startDate: 'September 2019',
        endDate: 'February 2020'
    }
];
  
const Education = () => {

    return  (
        <List>
            {education.map(item => {
                const itemHeader = (
                    <Box display='flex' direction="row" justifyContent="space-between" alignItems="center">
                        <Box display='flex' alignItems="center">
                                <SchoolIcon color='primary'/>
                                <Typography variant='h6'>
                                    {item.university}
                                </Typography>
                            </Box>
                        <Typography variant='subtitle1'>
                            {item.startDate} - {item.endDate}
                        </Typography>
                    </Box>
                    // <React.Fragment>
                    //     <Grid container display='flex' direction="row" justify="space-between" alignItems="center">
                    //         <Grid item>
                    //             <Typography>
                    //                 {item.university}
                    //             </Typography>
                    //         </Grid>
                    //         <Grid item>
                    //             <Typography>
                    //                 {item.startDate} - {item.endDate}
                    //             </Typography>
                    //         </Grid>
                    //     </Grid>
                    //     <Divider />
                    // </React.Fragment>
                );

                return (
                    <React.Fragment>
                        <ListItem>
                            <ListItemText 
                                primary={itemHeader}
                                secondary={
                                    <Box ml={1}>
                                        <Typography>
                                            {item.program}
                                        </Typography>
                                    </Box>
                                    
                                } 
                            />
                        </ListItem>
                    </React.Fragment>
                );
            })}    
        </List>
    );
    

   
};

export default Education;