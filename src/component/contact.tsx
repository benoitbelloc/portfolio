import { Button, Card, CardActions, CardContent, Divider, FormControl, FormLabel, Input, Stack, Textarea, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack alignItems={"center"} justifyContent="center" mt={7}>
            <Card
            variant="outlined"
            sx={{
                width: 380,
                height: 380,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
                <Typography level="title-lg">Contact</Typography>
                <Divider inset="none" />
                <CardContent 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(50px, 3fr))',
                }}>
                    <FormControl>
                        <FormLabel>Prénom</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Mail</FormLabel>
                        <Input placeholder="exemple@mail.com" />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Message</FormLabel>
                        <Textarea />
                    </FormControl>
                  </CardContent>
                  <CardActions>
                    <Button variant="solid">Envoyer</Button>
                  </CardActions>
            </Card>
            </Stack>
        </div>
    )
}