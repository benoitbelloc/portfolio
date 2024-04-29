import { Button, Card, CardContent, CardOverflow, Chip, Divider, Stack, Tooltip, Typography } from "@mui/joy";
import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Skills() {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack ml={7} mr={7}>
                <h1>Hard Skills</h1>
                <Divider inset="none" />
                <h3>Gestion de produit</h3>
                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
                    
                </Card>
                <h3>Technologies Web</h3>
                <Stack direction="row" spacing={5} justifyContent="center" mt={3}>
                    <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "auto", height: "auto" }}>
                        <CardContent>
                            <Stack direction="row" spacing={1}>
                                <Tooltip title="React">
                                <img width={70} src="public\react.png" />
                                </Tooltip>
                                <Tooltip title="Angular">
                                <img width={70} src="public\angular.png" />
                                </Tooltip>
                                <Tooltip title="Flutter">
                                <img width={70} src="public\flutter.png" />
                                </Tooltip>
                            </Stack>
                        </CardContent>
                        <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                          px: 0.2,
                          writingMode: 'vertical-rl',
                          justifyContent: 'center',
                          fontSize: 'xs',
                          fontWeight: 'xl',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          borderLeft: '1px solid',
                          borderColor: 'divider',
                        }}>Frontend</CardOverflow>
                    </Card>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "auto", height: "auto" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="MySQL">
                                <img width={70} src="public\mysql.png" />
                                </Tooltip>
                                <Tooltip title="MongoDB">
                                <img width={70} src="public\mongodb.png" />
                                </Tooltip>
                                <Tooltip title="Prisma">
                                <img width={70} src="public\prisma.png" />
                                </Tooltip>
                            </Stack>
                    </CardContent>
                        <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                          px: 0.2,
                          writingMode: 'vertical-rl',
                          justifyContent: 'center',
                          fontSize: 'xs',
                          fontWeight: 'xl',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          borderLeft: '1px solid',
                          borderColor: 'divider',
                        }}>BDD et ORM</CardOverflow>
                    </Card>
                    </Stack>
                    <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "auto", height: "auto" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="NestJs">
                                <img width={70} src="public\nestjs.png" />
                                </Tooltip>
                                <Tooltip title="Java J2E">
                                <img width={70} src="public\javaj2e.png" />
                                </Tooltip>
                                <Tooltip title="Django">
                                <img width={70} src="public\django.png" />
                                </Tooltip>
                            </Stack>
                    </CardContent>
                        <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                          px: 0.2,
                          writingMode: 'vertical-rl',
                          justifyContent: 'center',
                          fontSize: 'xs',
                          fontWeight: 'xl',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          borderLeft: '1px solid',
                          borderColor: 'divider',
                        }}>Backend</CardOverflow>
                    </Card>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "auto", height: "auto" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="Docker">
                                <img width={70} src="public\docker.png" />
                                </Tooltip>
                                <Tooltip title="Gitlab CI">
                                <img width={70} src="public\gitlabci.png" />
                                </Tooltip>
                                <Tooltip title="Github Actions">
                                <img width={70} src="public\githubaction.png" />
                                </Tooltip>
                            </Stack>
                    </CardContent>
                        <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                          px: 0.2,
                          writingMode: 'vertical-rl',
                          justifyContent: 'center',
                          fontSize: 'xs',
                          fontWeight: 'xl',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          borderLeft: '1px solid',
                          borderColor: 'divider',
                        }}>DevOps</CardOverflow>
                    </Card>
                    </Stack>
                </Stack>
            </Stack>
            <Stack ml={7} mr={7}>
                <h1>Soft Skills</h1>
                <Divider inset="none" />
                <Stack direction="row" spacing={3} justifyContent="center" mt={3}>
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Esprit d'équipe</Typography>
                </Chip>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Ecoute</Typography>
                </Chip>
                </Stack>
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Bienveillant</Typography>
                </Chip>
                
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Respect</Typography>
                </Chip>
                </Stack>     
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Ponctuel</Typography>
                </Chip>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Curieux</Typography>
                </Chip>
                </Stack>           
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>                    
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Autonome</Typography>
                </Chip>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Flexible</Typography>
                </Chip>
                </Stack>
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Organisé</Typography>
                </Chip>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Créatif</Typography>
                </Chip>
                </Stack>           
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Ouvert</Typography>
                </Chip>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Rigoureux</Typography>
                </Chip>
                </Stack>
                </Stack>                
            </Stack>
        </div>
    )
}