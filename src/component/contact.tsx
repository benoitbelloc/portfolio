import { Button, Card, CardContent, Divider, FormControl, FormLabel, Input, Stack, Textarea, Typography } from "@mui/joy";
import { MailIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack alignItems={"center"} justifyContent="center" mt={3}>
            <Card
            variant="outlined"
            sx={{
                width: 400,
                height: 400,
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
                        <Input startDecorator={<MailIcon />} required placeholder="exemple@mail.com" />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Objet</FormLabel>
                        <Input required />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Message</FormLabel>
                        <Textarea required sx={{ height: 100 }} />
                    </FormControl>
                    <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    onClick={() => navigate('/contact')}
                    sx={{ gridColumn: '1/-1', mt: 1}}
                    >
                    Envoyer
                    </Button>                  
                    </CardContent>
            </Card>
            </Stack>
        </div>
    )
}