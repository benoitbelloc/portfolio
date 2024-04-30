import { Button, Card, CardContent, Divider, Stack, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy";
import { ClockIcon } from "lucide-react";
import { tabClasses } from '@mui/joy/Tab';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Experiences() {
    const navigate = useNavigate();
    const [index, setIndex] = React.useState(0);

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack ml={7} mr={7}>
            <h1>Expériences</h1>
            <Divider inset="none" />
            <Tabs orientation="horizontal" value={index} onChange={(event, value) => setIndex(value as number)}>
                <TabList 
                disableUnderline
                sx={{
                  p: 0.5,
                  gap: 0.5,
                  borderRadius: 'xl',
                  width: 'auto',
                  bgcolor: 'background.level1',
                  [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: 'sm',
                    bgcolor: 'background.surface',
                  },
                  justifyContent: 'center',
                }}>
                    <Tab 
                    variant={index === 0 ? 'outlined' : 'plain'}
                    color={index === 0 ? 'primary' : 'neutral'}
                    disableIndicator>2024</Tab>
                    <Tab
                    variant={index === 1 ? 'outlined' : 'plain'}
                    color={index === 1 ? 'primary' : 'neutral'}
                    disableIndicator>2023</Tab>
                    <Tab
                    variant={index === 2 ? 'outlined' : 'plain'}
                    color={index === 2 ? 'primary' : 'neutral'}
                    disableIndicator>2022</Tab>
                    <Tab
                    variant={index === 3 ? 'outlined' : 'plain'}
                    color={index === 3 ? 'primary' : 'neutral'}
                    disableIndicator>2021</Tab>
                </TabList>
                {/*
                * 
                2024
                *
                */}
                <TabPanel value={0}>
                <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Proxy Product Owner</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={170} src="public\imsa.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Recueillir les besoins clients et les traduire en fonctionnalité techniques en coordination avec l’équipe de développement (Alternance)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>1 an</Typography>
                </Stack>
                    </Stack>                    
                    </Stack>
                </CardContent>                
                </Card>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Product Owner - Porteur de projet</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={100} src="public\ynov.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Piloter, conceptualiser et recueillir les besoins pour une application de gestion de compétences à destination de tous les organismes de formation (Projet école)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>1 an</Typography>
                </Stack>
                </Stack>
                    </Stack>                    
                </CardContent>                
                </Card>
                </Stack>
                </TabPanel>
                {/*
                *
                2023
                *
                */}
                <TabPanel value={1}>
                <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
                    <Stack direction={"column"} spacing={3}>
                    <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Proxy Product Owner</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={170} src="public\imsa.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Recueillir les besoins clients et les traduire en fonctionnalité techniques en coordination avec l’équipe de développement (Alternance)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>0 an</Typography>
                </Stack>
                    </Stack>                    
                    </Stack>
                </CardContent>                
                </Card>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Dévellopeur Full Stack</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={170} src="public\imsa.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Développer une application de gestion éditiques - Angular, Java J2E, PhpPgAdmin (Alternance)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>2 ans</Typography>
                </Stack>
                    </Stack>                    
                    </Stack>
                </CardContent>                
                </Card>
                    </Stack>
                    <Stack direction={"column"} spacing={3}>
                    <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Product Owner - Porteur de projet</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={100} src="public\ynov.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Piloter, conceptualiser et recueillir les besoins pour une application de gestion de compétences à destination de tous les organismes de formation (Projet école)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>0 an</Typography>
                </Stack>
                </Stack>
                    </Stack>                    
                </CardContent>                
                </Card>
                    <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Manager de projets IT</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={100} src="public\ynov.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Accompagner les chefs de projet dans leur réalisation en leur apportant les ressources nécessaire et en résolvant les conflits internes (Projet école)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>1 an</Typography>
                </Stack>
                </Stack>
                    </Stack>                    
                </CardContent>                
                </Card>
                    </Stack>                
                </Stack>
                </TabPanel>
                {/*
                *
                2022
                *
                */}
                <TabPanel value={2}>
                <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
                    <Stack direction={"column"} spacing={3}>
                    <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Dévellopeur Full Stack</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={170} src="public\imsa.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Développer une application de gestion éditiques - Angular, Java J2E, PhpPgAdmin (Alternance)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>1 an</Typography>
                </Stack>
                    </Stack>                    
                    </Stack>
                </CardContent>                
                </Card>
                    </Stack>                
                <Stack direction={"column"} spacing={3}>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Manager de projets IT</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={100} src="public\ynov.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Accompagner les chefs de projet dans leur réalisation en leur apportant les ressources nécessaire et en résolvant les conflits internes (Projet école)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>0 an</Typography>
                </Stack>
                </Stack>
                    </Stack>                    
                </CardContent>                
                </Card>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Développeur Full Stack</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={100} src="public\ynov.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Développer un site web pour un nouveau festival - Angular, Express js, MongoDB (Projet école)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>1 an</Typography>
                </Stack>
                </Stack>
                    </Stack>                    
                </CardContent>                
                </Card>
                </Stack>                
                </Stack>                    
                </TabPanel>
                {/*
                *
                2021
                *
                */}
                <TabPanel value={3}>
                <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Dévellopeur Full Stack</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={170} src="public\imsa.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Développer une application de gestion éditiques - Angular, Java J2E, PhpPgAdmin (Alternance)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>0 an</Typography>
                </Stack>
                    </Stack>                    
                    </Stack>
                </CardContent>                
                </Card>
                <Card sx={{ width: 500 }} variant="outlined">
                <Typography level="title-lg">Développeur Full Stack</Typography>
                <CardContent>
                    <Stack direction={"row"} spacing={1}>
                    <img width={100} src="public\ynov.png" alt="" />
                    <Stack direction={"column"} spacing={1}>
                    <Typography>Développer un site web pour un nouveau festival - Angular, Express js, MongoDB (Projet école)</Typography>
                <Stack direction="row" spacing={1} justifyContent={"start"}>
                <ClockIcon /> <Typography>0 an</Typography>
                </Stack>
                </Stack>
                    </Stack>                    
                </CardContent>                
                </Card>
                </Stack>      
                </TabPanel>
            </Tabs>
            </Stack>
        </div>
    )
}