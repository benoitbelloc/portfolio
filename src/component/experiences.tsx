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
      <Button onClick={() => navigate('/home')} variant="outlined" sx={{ mt: 2 }}>Retour</Button>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '0 16px', maxWidth: '100%', boxSizing: 'border-box' }}>
      <Stack ml={{ xs: 0, sm: 7 }} mr={{ xs: 0, sm: 7 }} mt={4}>
        <h1>Expériences</h1>
        <Divider sx={{ my: 1 }} />
        <Tabs 
          orientation="horizontal" 
          value={index} 
          onChange={(_event, value) => setIndex(value as number)}
          sx={{ justifyContent: 'center' }}
        >
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
            }}
          >
            <Tab variant={index === 0 ? 'outlined' : 'plain'} color={index === 0 ? 'primary' : 'neutral'} disableIndicator>2024</Tab>
            <Tab variant={index === 1 ? 'outlined' : 'plain'} color={index === 1 ? 'primary' : 'neutral'} disableIndicator>2023</Tab>
            <Tab variant={index === 2 ? 'outlined' : 'plain'} color={index === 2 ? 'primary' : 'neutral'} disableIndicator>2022</Tab>
            <Tab variant={index === 3 ? 'outlined' : 'plain'} color={index === 3 ? 'primary' : 'neutral'} disableIndicator>2021</Tab>
          </TabList>
          
          <TabPanel value={0} sx={{ p: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center" justifyContent="center" mt={3}>
              <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                <Typography><b>Proxy Product Owner</b></Typography>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="imsa.png" alt="IMSA logo" />
                    <Stack direction="column" spacing={1}>
                      <Typography>Recueillir les besoins clients et les traduire en fonctionnalité techniques en coordination avec l’équipe de développement (Alternance)</Typography>
                      <Stack direction="row" spacing={1} justifyContent="flex-start">
                        <ClockIcon /> <Typography>1 an</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                <Typography><b>Product Owner - Porteur de projet</b></Typography>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="ynov.png" alt="Ynov logo" />
                    <Stack direction="column" spacing={1}>
                      <Typography>Piloter, conceptualiser et recueillir les besoins pour une application de gestion de compétences à destination de tous les organismes de formation (Projet école)</Typography>
                      <Stack direction="row" spacing={1} justifyContent="flex-start">
                        <ClockIcon /> <Typography>1 an</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>                
              </Card>
            </Stack>
          </TabPanel>

          <TabPanel value={1} sx={{ p: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" mt={3}>
              <Stack direction="column" spacing={3}>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Proxy Product Owner</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="imsa.png" alt="IMSA logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Recueillir les besoins clients et les traduire en fonctionnalité techniques en coordination avec l’équipe de développement (Alternance)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>0 an</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Dévellopeur Full Stack</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="imsa.png" alt="IMSA logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Développer une application de gestion éditiques - Angular, Java J2E, PhpPgAdmin (Alternance)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>2 ans</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
              </Stack>
              <Stack direction="column" spacing={3}>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Product Owner - Porteur de projet</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="ynov.png" alt="Ynov logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Piloter, conceptualiser et recueillir les besoins pour une application de gestion de compétences à destination de tous les organismes de formation (Projet école)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>0 an</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Manager de projets IT</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="ynov.png" alt="Ynov logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Accompagner les chefs de projet dans leur réalisation en leur apportant les ressources nécessaire et en résolvant les conflits internes (Projet école)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>1 an</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
              </Stack>                
            </Stack>
          </TabPanel>

          <TabPanel value={2} sx={{ p: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" mt={3}>
              <Stack direction="column" spacing={3}>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Dévellopeur Full Stack</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="imsa.png" alt="IMSA logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Développer une application de gestion éditiques - Angular, Java J2E, PhpPgAdmin (Alternance)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>1 an</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
              </Stack>                
              <Stack direction="column" spacing={3}>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Manager de projets IT</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="ynov.png" alt="Ynov logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Accompagner les chefs de projet dans leur réalisation en leur apportant les ressources nécessaire et en résolvant les conflits internes (Projet école)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>0 an</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
                <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                  <Typography><b>Développeur Full Stack</b></Typography>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img width={100} height={100} src="ynov.png" alt="Ynov logo" />
                      <Stack direction="column" spacing={1}>
                        <Typography>Développer un site web pour un nouveau festival - Angular, Express js, MongoDB (Projet école)</Typography>
                        <Stack direction="row" spacing={1} justifyContent="flex-start">
                          <ClockIcon /> <Typography>1 an</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>                
                </Card>
              </Stack>                
            </Stack>                    
          </TabPanel>

          <TabPanel value={3} sx={{ p: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" mt={3}>
              <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                <Typography><b>Dévellopeur Full Stack</b></Typography>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems={"center"}>
                  <img width={100} height={100} src="imsa.png" alt="IMSA logo" />
                    <Stack direction="column" spacing={1}>
                      <Typography>Développer une application de gestion éditiques - Angular, Java J2E, PhpPgAdmin (Alternance)</Typography>
                      <Stack direction="row" spacing={1} justifyContent="flex-start">
                        <ClockIcon /> <Typography>0 an</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>                
              </Card>
              <Card sx={{ width: { xs: 'auto', sm: 500 }, mx: 'auto' }} variant="outlined">
                <Typography><b>Développeur Full Stack</b></Typography>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems={"center"}>
                  <img width={100} height={100} src="ynov.png" alt="Ynov logo" />
                    <Stack direction="column" spacing={1}>
                      <Typography>Développer un site web pour un nouveau festival - Angular, Express js, MongoDB (Projet école)</Typography>
                      <Stack direction="row" spacing={1} justifyContent="flex-start">
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
      <Stack
        sx={{
          marginTop: 'auto',
          alignItems: 'flex-end',
          direction: 'column',
          mt: 3
        }}
        alignItems="flex-end" direction="column" mt={3}
      >
        <Typography fontSize={12}>Mentions légales</Typography>
        <Typography fontSize={12}>© Benoît Belloc - 2024 - Tous droits réservés</Typography>
      </Stack>
      </div>
    </div>
    )
}