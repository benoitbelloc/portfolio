import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    const navigate = useNavigate();
    const cardColor = "#white";

    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '0 16px', maxWidth: '100%', boxSizing: 'border-box' }}>
      <Button onClick={() => navigate('/')} variant="outlined" sx={{ mt: 2, alignSelf: 'flex-start' }}>Retour</Button>
      <Stack spacing={3} mx={{ xs: 2, md: 7 }} my={4} flexGrow={1} justifyContent="center">
        <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
        <Divider />
        <Stack spacing={3} justifyContent="center" alignItems="center" mt={1}>
        <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center" flexWrap="wrap">
            <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
              <Typography><b>Expériences</b></Typography>
              <CardContent>
                <img src="experiences.gif" alt="" style={{ width: '100%', height: 'auto' }} />
                <Button
                  color="primary"
                  sx={{ mt: 2, fontWeight: 600 }}
                  onClick={() => navigate('/experiences')}
                >
                  Détails
                </Button>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
              <Typography><b>Compétences</b></Typography>
              <CardContent>
                <img src="skills.gif" alt="" style={{ width: '100%', height: 'auto' }} />
                <Button
                  color="primary"
                  sx={{ mt: 2, fontWeight: 600 }}
                  onClick={() => navigate('/skills')}
                >
                  Hard & Soft
                </Button>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
              <Typography><b>Certifications</b></Typography>
              <CardContent>
                <img src="graduations.gif" alt="" style={{ width: '100%', height: 'auto' }} />
                <Button
                  color="primary"
                  sx={{ mt: 2, fontWeight: 600 }}
                  onClick={() => navigate('/certifications')}
                >
                  Obtenues et en cours
                </Button>
              </CardContent>
            </Card>
          </Stack>
  </motion.div>
  <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}>
    <Card variant="outlined" sx={{ width: 250, backgroundColor: cardColor, mt: 4, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' } }}>
            <Typography><b>Contact</b></Typography>
            <CardContent>
              <img src="mailing.gif" alt="" style={{ width: '100%', height: 'auto' }} />
              <Button
                color="primary"
                sx={{ mt: 2, fontWeight: 600 }}
                onClick={() => navigate('/contact')}
              >
                Formulaire
              </Button>
            </CardContent>
          </Card>
  </motion.div>
        </Stack>
      </Stack>
      <Stack 
        sx={{
          marginTop: 'auto',
          alignItems: 'flex-end',
          direction: 'column',
          mt: 3
        }}
        alignItems={"flex-end"} direction={"column"} mt={3}
      >
        <Typography fontSize={12}>Mentions légales</Typography>
        <Typography fontSize={12}>© Benoît Belloc - 2024 - Tous droits réservés</Typography>
      </Stack>
    </div>
    )
}