import { Button, Card, CardContent, CardOverflow, Chip, Divider, Stack, Tooltip, Typography } from "@mui/joy";
import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Skills() {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '0 16px', maxWidth: '100%', boxSizing: 'border-box' }}>
            <Stack mx={{ xs: 0, md: 7 }} my={4}>
                <h1>Hard Skills</h1>
                <Divider inset="none" />
                
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems="center" justifyContent={"center"} mt={3}>
                <Stack direction="column" spacing={3} justifyContent="center">
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "280px" }}>
                        <CardContent>
                            <Stack direction="row" spacing={1}>
                                <Tooltip title="Jira">
                                <img width={80} src="jira.png" />
                                </Tooltip>
                                <Tooltip title="Notion">
                                <img width={80} src="notion.png" />
                                </Tooltip>
                                <Tooltip title="Trello">
                                <img width={80} src="trello.png" />
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
                        }}>Outils</CardOverflow>
                    </Card>
                    </motion.div>
                    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.1
  }}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "280px" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="Scaled Agile SAFe">
                                <img width={80} src="safe.png" />
                                </Tooltip>
                                <Tooltip title="Kanban">
                                <img width={80} src="kanban.png" />
                                </Tooltip>
                                <Tooltip title="Scrum">
                                <img width={80} src="scrum.png" />
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
                        }}>Méthodes</CardOverflow>
                    </Card>
                    </motion.div>
                    </Stack>
                    <Stack direction="column" spacing={3} justifyContent="center">
                    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.2
  }}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "280px" }}>
                        <CardContent>
                            <Stack direction="row" spacing={1}>
                                <Tooltip title="React">
                                <img width={80} src="react.png" />
                                </Tooltip>
                                <Tooltip title="Angular">
                                <img width={80} src="angular.png" />
                                </Tooltip>
                                <Tooltip title="Flutter">
                                <img width={80} src="flutter.png" />
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
                    </motion.div>
                    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.3
  }}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "280px" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="MySQL">
                                <img width={80} src="mysql.png" />
                                </Tooltip>
                                <Tooltip title="MongoDB">
                                <img width={80} src="mongodb.png" />
                                </Tooltip>
                                <Tooltip title="Prisma">
                                <img width={80} src="prisma.png" />
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
                    </motion.div>
                    </Stack>
                    <Stack direction="column" spacing={3} justifyContent="center">
                    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.4
  }}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "280px" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="NestJs">
                                <img width={80} src="nestjs.png" />
                                </Tooltip>
                                <Tooltip title="Java J2E">
                                <img width={80} src="javaj2e.png" />
                                </Tooltip>
                                <Tooltip title="Django">
                                <img width={80} src="django.png" />
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
                    </motion.div>
                    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.5
  }}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: "280px" }}>
                    <CardContent>
                    <Stack direction="row" spacing={1}>
                                <Tooltip title="Docker">
                                <img width={80} src="docker.png" />
                                </Tooltip>
                                <Tooltip title="Gitlab CI">
                                <img width={80} src="gitlabci.png" />
                                </Tooltip>
                                <Tooltip title="Github Actions">
                                <img width={80} src="githubaction.png" />
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
                    </motion.div>
                    </Stack>
                </Stack>
                
            </Stack>
            <Stack mx={{ xs: 2, md: 7 }} my={4}>
                <h1>Soft Skills</h1>
                <Divider inset="none" />
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center" mt={3}>
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Esprit d'équipe</Typography>
                </Chip>
                </motion.div>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.05
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Ecoute</Typography>
                </Chip>
                </motion.div>
                </Stack>
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.1
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Bienveillant</Typography>
                </Chip>
                </motion.div>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.15
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Respect</Typography>
                </Chip>
                </motion.div>
                </Stack>     
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.2
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Ponctuel</Typography>
                </Chip>
                </motion.div>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.25
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Curieux</Typography>
                </Chip>
                </motion.div>
                </Stack>           
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>  
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.3
  }}>             
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Autonome</Typography>
                </Chip>
                </motion.div>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.35
  }}>  
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Flexible</Typography>
                </Chip>
                </motion.div> 
                </Stack>
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.4
  }}>  
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Organisé</Typography>
                </Chip>
                </motion.div>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.45
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Créatif</Typography>
                </Chip>
                </motion.div>
                </Stack>           
                <Stack direction="column" spacing={3} justifyContent="center" mt={1}>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.5
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Ouvert</Typography>
                </Chip>
                </motion.div>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.55
  }}>
                <Chip
                variant="outlined"
                color="primary"
                startDecorator={<CheckIcon />}
                sx={{ borderColor: 'primary'}}
                >
                    <Typography>Rigoureux</Typography>
                </Chip>
                </motion.div>
                </Stack>
                </Stack>                
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