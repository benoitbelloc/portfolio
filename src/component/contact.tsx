import { Button, Divider, FormControl, FormLabel, Input, Stack, Textarea } from "@mui/joy";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { MailIcon } from "lucide-react";


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
            alert("Votre message a bien été envoyé");
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            alert("Une erreur est survenue, veuillez réessayer");
            form.current.reset();
        });
    }

    return (
        <div>
            <Button onClick={() => navigate('/home')} variant="outlined">Retour</Button>
            <Stack ml={7} mr={7}>
            <h1>Contact</h1>
            <Divider inset="none" />
            <Stack direction={"row"} justifyContent="center" mt={1}>
                    <form ref={form} onSubmit={sendEmail}>
                        <Stack direction={"row"} spacing={3}>
                        <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <Input type="text" name="user_lastName" />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Prénom</FormLabel>
                        <Input type="text" name="user_firstName" />
                        </FormControl>
                        </Stack>
                        <FormControl>
                        <FormLabel>Email*</FormLabel>
                        <Input required type="email" name="user_email" startDecorator={<MailIcon />}/>
                        </FormControl>
                        <FormControl>
                        <FormLabel>Objet*</FormLabel>
                        <Input required type="text" name="user_object" />
                        </FormControl>
                        <FormControl>
                        <FormLabel sx={{ gridColumn: '1/-1' }}>Message*</FormLabel>
                        <Textarea required name="user_message" sx={{ height: 130 }}/>
                        </FormControl>
                        <Button
                        type="submit"
                        variant="solid"
                        size="sm"
                        color="primary"
                        sx={{ gridColumn: '1/-1', mt: 1}}
                        fullWidth
                        >
                            Envoyer
                        </Button>                        
            </form>           
            </Stack>
            </Stack>
        </div>
    )
}