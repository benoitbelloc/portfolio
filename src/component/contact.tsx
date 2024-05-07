import { Button, Card, CardContent, Divider, Stack, Typography } from "@mui/joy";
import emailjs, { send } from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Contact() {
    const navigate = useNavigate();
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
    
    const serviceId = 'service_hlcmb1s';
    const templateId = 'template_y3qid8l';
    const key = 'ZRgw1KtcWPfeBAi9e';
    
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, {
            publicKey: key,
        })
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

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
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Nom</label>
                        <input type="text" name="user_lastName" />
                        <label>Prénom</label>
                        <input type="text" name="user_firstName" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Objet</label>
                        <input type="text" name="user_object" />
                        <label>Message</label>
                        <textarea name="user_message" />
                        <Button type="submit">Envoyer</Button>
            </form>              
                    </CardContent>
            </Card>
            </Stack>
        </div>
    )
}