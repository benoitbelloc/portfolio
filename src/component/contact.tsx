import { Button, Divider, FormControl, FormLabel, Input, Stack, Textarea, Typography } from "@mui/joy";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { MailIcon } from "lucide-react";
import { motion } from "framer-motion";


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
      <Button onClick={() => navigate('/home')} variant="outlined" sx={{ mt: 1 }}>Retour</Button>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '0 16px', maxWidth: '100%', boxSizing: 'border-box' }}>
      <Stack spacing={3} mx={{ xs: 2, md: 7 }} my={4}>
        <h1>Contact</h1>
        <Divider />
        <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0
  }}>
        <Stack direction="row" justifyContent="center" mt={1}>
          <form ref={form} onSubmit={sendEmail} style={{ width: '100%', maxWidth: 600 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              <FormControl sx={{ width: "100%" }}>
                <FormLabel>Nom*</FormLabel>
                <Input required type="text" name="user_lastName" />
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <FormLabel>Prénom*</FormLabel>
                <Input required type="text" name="user_firstName" />
              </FormControl>
            </Stack>
            <FormControl sx={{ mt: 1, width: "100%" }}>
              <FormLabel>Email*</FormLabel>
              <Input required type="email" name="user_email" startDecorator={<MailIcon />} />
            </FormControl>
            <FormControl sx={{ mt: 1, width: "100%" }}>
              <FormLabel>Objet*</FormLabel>
              <Input required type="text" name="user_object" />
            </FormControl>
            <FormControl sx={{ mt: 1, width: "100%" }}>
              <FormLabel>Message*</FormLabel>
              <Textarea required name="user_message" sx={{ height: 130 }} />
            </FormControl>
            <Button
              type="submit"
              color="primary"
              sx={{ mt: 3 }}
              fullWidth
            >
              Envoyer
            </Button>
          </form>
        </Stack>
        </motion.div>
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